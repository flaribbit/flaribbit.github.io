---
title: 把 python 代码压缩到一行
date: 2023-04-02 23:00:00
tags: [python]
---

把程序变成别人看不懂的样子 hhh。

---

原程序：

```py
import numpy as np

def fun(m, n, ratio=0.7):
    data = np.zeros(m*n, dtype=int)
    data[:int(m*n*ratio)] = 1
    np.random.shuffle(data)
    return data.reshape((m, n))

fun(10, 10)
```

这段代码首先声明了一个函数，可以换成 lambda。

但是 lambda 只能执行一条表达式，不能写语句，因此局部变量和赋值语句需要另想办法。

思考，如果我们再套一层 lambda，就有变量了！

那么赋值怎么办呢？

简单！python 里 `a[b]=c` 实际上调用的是 `__setitem__`，那就直接写这个嘛！

接下来把多条表达式合成一条，直接用 tuple 就可以了。

结果：

```py
import numpy as np

(lambda m, n, ratio=0.7: (lambda d: (d.__setitem__(slice(None, int(m*n*ratio)), 1),
 np.random.shuffle(d), d.reshape((m, n)))[2])(np.zeros(m*n)))(10, 10)
```
