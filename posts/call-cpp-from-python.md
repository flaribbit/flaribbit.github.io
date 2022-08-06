---
title: 在 python 中调用 c++
date: 2022-05-08 16:56:00
tags: [c++, pathon, 笔记]
---

剧透：SWIG

---

## 准备

[SWIG 官网](https://swig.org/)可以下载到可执行文件。

这里给出一个示例头文件：`lib.h`

```cpp
#include <string>

class Person {
   public:
    std::string name;
    int age;
    Person(std::string name, int age);
    std::string getName();
    int getAge();
};
```

## 编写 .i 文件

`lib.i`
```cpp
%module Person
%include "std_string.i"
%{
#include "lib.h"
%}
using namespace std;
%include "lib.h"
```

其中 module 对应编译得到的 python 模块名。因为我这里用到了 `std::string`，所以还要引入对应的声明文件 `std_string.i`，如果用了其他容器也类似。

## 使用 SWIG 编译 .i 文件

一行简简单单的命令：

```bash
swig.exe -c++ -python lib.i
```

编译后会生成两个文件：
- `lib_wrap.cxx`（文件名取决于头文件）
- `Person.py`（文件名取决于 module）

## 编译源文件和 wrap 文件

这次头铁，使用了不熟悉的 msvc 编译器，命令如下：

```bash
cl lib.cpp lib_wrap.cxx /LD /IC:\Tools\Python\include /link /LIBPATH:C:\Tools\Python\libs
```

- `/LD` 相当于 gcc 的 `-shared`，表示生成动态链接库
- `/I` 相当于 gcc 的 `-I`
- `/link /LIBPATH:` 相当于 gcc 的 `-L`

然后把生成的文件重命名为 `_Person.pyd`，这样就可以被 SWIG 生成的 `Person.py` 调用了。

## 在 python 中调用

这一步没什么好说的，把他当成正常的 python 类就好了。

```py
import Person

p = Person.Person("John", 20)
print(p.getName())
print(p.getAge())
```
