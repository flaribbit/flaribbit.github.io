---
title: c++ promise future 初体验
date: 2022-06-29 22:07:00
tags: [c++, 笔记, 异步]
---

理解了 python 的 promise 和 future，顺便再看看 c++ 的。

---

## 为什么要用 promise 和 future

此前，我们跨线程传递数据基本是使用消息队列，代码比较复杂，还要考虑线程安全问题。

`future` 和 `promise` 的作用也是在不同线程之间传递数据，代码更简洁。

`promise` 大概是个承诺，表示我将放数据进去，`future` 表示将来会有数据过来。

## future

先看看 `future` 是如何使用的

```cpp
#include <future>
#include <iostream>
using namespace std;

int factorial(int N) {
    int res = 1;
    for (int i = N; i > 1; i--) res *= i;
    return res;
}

int main() {
    future<int> f = async(factorial, 10);
    cout << f.get() << endl;
    return 0;
}
```

这是一个最简单的例子，`async` 将启动一个线程，执行函数，把参数传入，返回一个 `future` 对象，表示此时我们还没有获得函数执行结果，但是可以在将来拿到。

其中 async 函数省略了第一个参数，默认是
```cpp
    future<int> f = async(launch::async|launch::deferred, factorial, 10);
```
两个值的含义是：
- `launch::async` 自动创建一个线程，启动异步任务。
- `launch::deferred` 线程的执行就会推迟到 `future.get()` 方法时才会启动，如果不使用 `get` 或者 `wait`，线程直接结束。

我们可以通过 `get` 方法获得函数执行结果，这个方法会等待函数执行完成，然后返回函数的返回值。

注意到我们这里我们直接把 `factorial` 的参数 `10` 传进去了，如果我们目前没有这个参数，想在之后传进去，就可以使用 `promise` 来实现。

## promise

```cpp
#include <future>
#include <iostream>
using namespace std;

int factorial(future<int>& f) {
    int res = 1;
    int N = f.get();
    for (int i = N; i > 1; i--) res *= i;
    return res;
}

int main() {
    promise<int> p;
    future<int> f = p.get_future();
    future<int> f2 = async(factorial, ref(f));
    p.set_value(10);
    cout << f2.get() << endl;
    return 0;
}
```

于是这里出现了两个 `future`：
- 第一个是和 `promise` 对应的，相当于管道的两端。我们承诺将来会传数据进去，然后把对应的 `future` （也就是管道出口）交给另一个线程。
- 第二个是 `factorial` 返回结果的出口，同第一个例子，我们暂时拿不到。

但这里的 `ref` 是什么东西？其实就是引用，这里 `ref(f)` 的类型相当于上面的 `future<int>&`。

我们知道 C++ 中本来就有引用的存在，为何 C++11 中还要引入一个 `std::ref`？主要是考虑函数式编程（如 `std::bind`）在使用时，是对参数直接拷贝，而不是引用。

再看 `factorial` 函数里，我们可以用 `future.get()` 来获得将来传过来的参数，然后再继续执行。

回到主函数，我们首先通过 `promise.set_value()` 把数据传过去，然后我们就可以使用 `get` 从第二个 `future` 中获得结果了。

## 反向思考

写到这里我想到一个问题，能不能用 promise 把计算结果传回来？

可以！

```cpp
#include <future>
#include <iostream>
using namespace std;

void add(promise<int>& p, int a, int b) {
    p.set_value(a + b);
}

int main() {
    promise<int> p;
    future<void> f = async(add, ref(p), 114, 514);
    cout << p.get_future().get() << endl;
    return 0;
}
```

呐，这就是了。

这样函数没有返回值了，我们在函数返回之前用 get 拿到结果，返回的 `future<void> f` 也没用了<del>，但不写编译器不开心</del>。
