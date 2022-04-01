---
title: 关于 ascii art 的思考
date: 2022-04-01 15:30:00
tags: [python]
---
网络上常见的 ascii art 都是根据灰度生成的，像这样

![](https://cdn.nlark.com/yuque/0/2022/gif/22611614/1648800088776-dd3cee89-2167-4114-877f-8619b0a01738.gif)

实际上还有另一种风格的 ascii art ，在[这个网站](http://anime.en.utf8art.com/)有许多更精美的作品，像下图这样

![image.png](https://cdn.nlark.com/yuque/0/2022/png/22611614/1648799956181-78170000-c835-4188-816b-ab8f1ee5f42c.png)

这些作品显然是手动绘制的。本来想偷一张用，但他们用的不是等宽字体，没办法用。那么有没有办法自动生成等宽字体的字符画呢。

首先想到了一个很粗暴的方法，把线稿图片分割成 5x5 的方格，然后根据方格内的线条形态选择对应的字符。感觉好像可以，那就试一试：

```py
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 95 个可打印字符
chars = ''
for i in range(0x20, 0x7f):
    chars += chr(i)
print(chars)


# 导入字体文件
font = cv2.imread('font.png', cv2.IMREAD_COLOR).astype(np.float32)/255
font = cv2.cvtColor(font, cv2.COLOR_BGR2GRAY)
font = cv2.resize(font, (95*5, 5), interpolation=cv2.INTER_AREA)

plt.figure(figsize=(20, 50))
plt.imshow(font, cmap='gray')


# 导入原始图像
image = cv2.imread('download.jpg', cv2.IMREAD_COLOR).astype(np.float32)/255
image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
image = cv2.resize(image, (20*5, 12*5), interpolation=cv2.INTER_AREA)
plt.imshow(image, cmap='gray')


# 找到误差最小的图像对应的字符
m, n = image.shape
res = ''
for i in range(0, m, 5):
    for j in range(0, n, 5):
        err = np.abs(font-np.hstack([image[i:i+5, j:j+5]]*95))
        err = err.reshape(5, 95, 5).sum(axis=(0, 2))
        res += chars[np.argmin(err)]
    res += '\n'
print(res)

```
结果：

原始图像

![e3287b49-b065-46fc-a241-c1b3c20fedec.png](https://cdn.nlark.com/yuque/0/2022/png/22611614/1648800462908-0ce10b8b-94b1-4746-b7f2-3c73d1dae8c0.png)

程序输出：

```
              -_:   
                    
            :  :    
                    
   _  - :  ,_       
     _ ,  :'  _     
    _  -   _  -     
           '- _:_-  
  '                 
   \                
      .    _-       
                    
```
至少能看出一点点，当然，实验之前我也没想到会这么惨。
然后想要找找看有没有其他人做过类似的工作，发现了一个逆天的：[https://github.com/OsciiArt/DeepAA](https://github.com/OsciiArt/DeepAA)
![](https://github.com/OsciiArt/DeepAA/raw/master/sample%20images/images%20generated%20with%20CNN/21%20generated.png)

看来这种事情还是得炼丹。

对照他的操作方法思考了一下，主要原因可能有两个：

1. 我的误差计算方法过于粗暴，像素精确一致才能满足条件。如果竖线歪了一个像素，实际上问题不大，但是在我的算法里就认为误差非常大了。
2. ascii 能实现的线条太少了，比如无法画出 45° 的斜线，这一方面日本的 ascii art 可发挥的空间就大得多。

如果我也用炼丹方法的话，最大的问题还是没有数据集。他可以直接从上述网站中获得数据集，但是纯 ascii 字符的，我好像还没有见过。

摸了
