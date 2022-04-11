---
title: 从答案反推代码
date: 2022-04-11 20:38:00
tags: [python]
---

今天写出了震撼自己一分钟的代码，顺便思考一下这种快速糊屎的方法。

---

那串代码是这样的

```py
q_eval = self.eval_net(states).view(-1, 10, 3).gather(2, actions.view(-1, 10, 1)).view(-1, 10)
q_next = self.target_net(observations).detach().view(-1, 10, 3).max(2)[0]
```

在这里，q_eval 是现在的 Q 值，q_next 是下一个状态的 Q 值，actions 是当前状态的动作，后面需要用这两个东西做梯度下降。

其中，`states` 的维度是 (batch, 30)，他需要被转换成 (batch, 10, 3)，然后用 `actions`（取值范围0~2）作为最后一个维度的 index，取出一组 (batch, 10) 的 Q 值。

那么问题就出在这个 `gather` 上，对这个函数不太熟悉。

遂一怒之下，给这行代码打了个断点，然后在调试器窗口里面就可以执行代码试错了。

我只知道我想要怎么提取，但是完全不会写。

于是又想到一个方法：

```py
# 我先把第一行打印出来
self.eval_net(states)[0]

# 把动作也打印出来
actions

# 然后目测一下我需要什么样子的数据，把期望的数据写出来
# 这些数据应该是很有区分度的，不会有相同的数据

# 然后就可以开始试错了
# 把这坨打印出来看是不是我要的东西
self.eval_net(states).view(-1, 10, 3).gather(2, actions.view(-1, 10, 1)).view(-1, 10)[0]
```

结果还真就成了
