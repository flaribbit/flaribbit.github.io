---
title: python opencv rtsp 直播流处理 跳帧与延迟控制
date: 2021-03-05 15:14:00
tags: [python, opencv, rtsp]
---

众所周知 opencv 没法获取缓冲区长度，如果图像处理速度小于视频帧速率，延迟就会越来越大。此时就要丢弃一些视频帧来保证实时性。

下面介绍三种方法来解决这个问题。

---

## 方法1 根据帧速率计算帧数

在已知视频帧速率的情况下，我们可以根据时间计算当前应该处理的帧数。如果落后了，时间差比较大，就要丢弃视频帧了。

ffmpeg 推流：

```bash
ffmpeg -re -stream_loop -1 -i test2.mp4 -c copy -f rtsp rtsp://127.0.0.1:8554/test
```

`-re` 表示与推流速度与视频同步，如果编码速度跟不上视频速度，建议换台机器，或者降低分辨率，`-stream_loop -1` 表示循环次数无限（此处使用视频测试，实际推流去掉即可），实际使用时也可以使用 `opencv` 通过 `pipe` 推流，写 `-i -`，其他参数见 `ffmpeg -h`，另自备 `rtsp` 服务器。

根据延迟判断是否需要跳帧的核心代码：

```python
import cv2
from time import time, sleep
import logging


def process():
    # 模拟图像处理耗时
    sleep(0.03)


logging.basicConfig(level=logging.INFO,
                    format="%(asctime)s [%(levelname)s] %(message)s",
                    datefmt="%Y/%m/%d %H:%M:%S")

# 打开直播流
cap = cv2.VideoCapture("rtsp://127.0.0.1:8554/test")

fps = 30  # 直播流帧率
maxDelay = 0.5  # 最大容许延时
startTime = time()  # 开始时间
frames = 0
logging.info("已连接")
while True:
    frames += 1
    ret, frame = cap.read()
    # 延时小于最大容许延时才进行识别
    if frames > (time()-startTime-maxDelay)*fps:
        process()
        cv2.imshow("frame", frame)
    else:
        logging.info(f"已跳过一帧，当前{frames}，期望{int((time()-startTime-maxDelay)*fps)}")
    # 按q退出
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cv2.destroyAllWindows()
cap.release()
```

此方法的延迟可以自由设置。

## 方法2 使用线程清空 buffer

方法很简单：设置一个全局变量存放最新的图像，开一个线程循环读取图像存到变量里，主线程读取变量中的图像即可。

此方法拿到的是最新的图像。

## 方法3 根据获取图像耗时判断是否是最新图像

在读取图像的时候，我们发现 `cap.read()` 是阻塞的。如果没有图像他会等待拿到图像才返回，有图像则会立刻返回。于是我们可以根据获取图像的时间来判断拿到的是不是最新的图像。

```python
def readLatest(cap):
    while True:
        t = time()
        cap.grab()
        if time()-t>.01:
            return cap.retrieve()
```
此方法拿到的是最新的图像，但是这个函数会占用一帧时间。如果相机帧速率为 30fps，这个函数会占用0.033s。
