---
title: 俄罗斯方块场地压缩
date: 2022-05-27 15:30:00
tags: [rust, 笔记]
---

---

## 代码

```py
import zlib
import base64

field_str = """
IJJJLOO___
IJZZLOO___
IZZLLS____
ITJJSS____
ITTJS_____
ITLLL_____
IJJJ______
IJ________
"""

blockid = {
    '_': 0,
    'I': 1,
    'L': 2,
    'O': 3,
    'Z': 4,
    'T': 5,
    'J': 6,
    'S': 7,
    'X': 8,
    '=': 9,
}


def field_from_str(field: str):
    res = []
    for line in field.split('\n'):
        if len(line) != 10:
            continue
        for i in range(0, len(line), 2):
            a, b = blockid[line[i]], blockid[line[i + 1]]
            res.append(a << 4 | b)
    return bytes(res)


def field_to_base64(field: str):
    return base64.b64encode(zlib.compress(field_from_str(field))[2:-4]).decode()


res = field_to_base64(field_str)
print(len(res))
print(res)

print(zlib.decompress(zlib.compress(field_from_str(field_str))[2:-4], -15))
```

## python 的 raw inflate/deflate

raw inflate 其实就是没有头部和尾部的 inflate，有个很暴力的实现方式就是直接截掉。

```py
zlib.compress(data)[2:-4]
```

解压的时候需要加个标志让 python 不报错

```py
zlib.decompress(data, -15)
```
