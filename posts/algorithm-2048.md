---
title: 时隔五年重写 2048 核心算法
date: 2022-07-10 10:58:00
tags: [c++, '2048']
---

《2048》是一款单人在线和移动端游戏，由19岁的意大利人Gabriele Cirulli于2014年3月开发。游戏任务是在一个网格上滑动小方块来进行组合，直到形成一个带有有数字2048的方块。

---

## 前言

在公交车上看到有人玩 2048，突然想起自己在多年前在计算器上写过。

当时的算法是某次月考中，写完理综后在选择题旁边推出来的，利用自习课时间在计算器上实现，后来又移植到 C 语言，编写了一个 addin。

当年搞出的算法是这样的：

```c
// ...
		if(key==KEY_CTRL_LEFT){
			for(i=0;i<4;i++){
				Move(&t[i][3],&t[i][2],&t[i][1],&t[i][0],&score,&new);
			}
		}
		if(key==KEY_CTRL_RIGHT){
			for(i=0;i<4;i++){
				Move(&t[i][0],&t[i][1],&t[i][2],&t[i][3],&score,&new);
			}
		}
		if(key==KEY_CTRL_UP){
			for(i=0;i<4;i++){
				Move(&t[3][i],&t[2][i],&t[1][i],&t[0][i],&score,&new);
			}
		}
		if(key==KEY_CTRL_DOWN){
			for(i=0;i<4;i++){
				Move(&t[0][i],&t[1][i],&t[2][i],&t[3][i],&score,&new);
			}
		}
// ...
void Move(int *a,int *b,int *c,int *d,unsigned long int *score,int *new){
	int *t[4],i,j;
	t[0]=a;t[1]=b;t[2]=c;t[3]=d;
	for(j=3;j>0;j--){
		if(*t[j]) continue;
		for(i=j-1;i>=0;i--){
			if(*t[i]){
				*t[j]=*t[i];
				*t[i]=0;
				*new=1;
				break;
			}
		}
	}
	for(i=3;i>0;i--){
		if(*t[i-1]==*t[i]&&*t[i]!=0){*t[i]*=2;*t[i-1]=0;*score+=*t[i];*new=1;}
	}
	for(j=3;j>0;j--){
		if(*t[j]) continue;
		for(i=j-1;i>=0;i--){
			if(*t[i]){
				*t[j]=*t[i];
				*t[i]=0;
				*new=1;
				break;
			}
		}
	}
}
// ...
```

看不懂是吧，哈哈我也看不懂，而且这个神必算法只适用于 4x4 的场景。

可惜最初的 basic 版本已经丢了，一同丢的还有 400 字节的贪吃蛇和高考前没完成的植物大战僵尸。

## 思路分析

跑题了，继续说正事。

2048 的核心算法是如果两个带有相同数字的方块在移动中碰撞，则它们会合并为一个方块，且所带数字变为两者之和。

比如 `[2 _ 2 2]` 向左移动就会变成 `[4 2 _ _ ]`。

稍加思索，四个方向移动的核心算法其实是一样的，使用一维数组存储场地，四个方向的区别只是取子数组的步长不一样，右 1 左 -1 下 n 上 -n。

因此我们只需实现一个移动并合并相同数字的算法，典型的双指针。
- 如果快指针没有数字，自增；
- 如果慢指针没有数字，快指针有，移动；
- 如果两者数字相同，合并；

## 带测试的核心算法
```cpp
#include <iostream>
#include <string>
#include <array>

// 核心算法
void move(int *arr, int n) {
    int i = 1, j = 0;
    while (i < n) {
        if (arr[i] == 0 || i == j) {
            i++;
        } else if (arr[i] == arr[j]) {
            arr[j] += arr[i];
            arr[i] = 0;
            i++;
            j++;
        } else if (arr[j] == 0) {
            arr[j] = arr[i];
            arr[i] = 0;
            i++;
        } else {
            j++;
        }
    }
}

template <typename T, size_t N>
std::string to_string(std::array<T, N> &arr) {
    std::string s = "[";
    bool first = true;
    for (auto &i : arr) {
        if (!first) s += ", ";
        s += std::to_string(i);
        first = false;
    }
    s += "]";
    return s;
}

template <size_t N>
bool test_case(std::array<int, N> from, std::array<int, N> to) {
    auto arr = from;
    move(arr.data(), N);
    for (size_t i = 0; i < N; i++) {
        if (arr[i] != to[i]) {
            std::cout << "FAIL: " << to_string(from) << " -> " << to_string(arr) << ", expected: " << to_string(to) << std::endl;
            return false;
        }
    }
    std::cout << "PASS: " << to_string(from) << " -> " << to_string(to) << std::endl;
    return true;
}

int main(int argc, char const *argv[]) {
    using std::array;
    test_case(array{0, 0, 0, 2}, {2, 0, 0, 0});
    test_case(array{0, 0, 2, 2}, {4, 0, 0, 0});
    test_case(array{0, 2, 0, 2}, {4, 0, 0, 0});
    test_case(array{2, 2, 0, 2}, {4, 2, 0, 0});
    test_case(array{2, 2, 2, 2}, {4, 4, 0, 0});
    test_case(array{2, 2, 4, 2}, {4, 4, 2, 0});
    test_case(array{2, 2, 2, 4}, {4, 2, 4, 0});
    test_case(array{4, 2, 2, 4}, {4, 4, 4, 0});
    test_case(array{2, 4, 2, 4}, {2, 4, 2, 4});
    test_case(array{0, 2, 0, 2, 0, 2}, {4, 2, 0, 0, 0, 0});
    test_case(array{4, 2, 2, 4, 4, 2}, {4, 4, 8, 2, 0, 0});
    return 0;
}
```

## 其他

写测试的时候遇到了一点小插曲

```cpp
test_case({0, 0, 0, 2}, {2, 0, 0, 0}); // 报错
test_case<4>({0, 0, 0, 2}, {2, 0, 0, 0}); // 可以
```
我还以为是编译器不能推导长度，结果是不能推导参数类型，至少指定一个就可以了，另一个可以自动隐式转换。
