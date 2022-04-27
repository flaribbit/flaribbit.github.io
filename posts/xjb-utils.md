---
title: 各种奇怪的程序
date: 2022-04-13 22:00:00
tags: [c++]
---

## 军备竞赛之 c++ 实现 enumerate

和锤哥的一次军备竞赛，实现方法比较暴力，但居然还挺好用

```cpp
#include <iostream>
#include <vector>
#include <string>

using namespace std;

template <typename T>
class enumerate {
   private:
    T& obj;
    using iter_t = decltype(obj.begin());
    using item_t = decltype(*obj.begin());

   public:
    enumerate(T& obj) : obj(obj) {}
    class iterator {
       public:
        size_t i;
        iter_t iter;
        iterator(iter_t iter) : i(0), iter(iter) {}
        iterator& operator++() {
            i++;
            iter++;
            return *this;
        }
        pair<size_t, item_t> operator*() {
            return {i, *iter};
        }
        bool operator!=(const iterator& other) {
            return iter != other.iter;
        }
    };
    iterator begin() {
        return iterator(obj.begin());
    }
    iterator end() {
        return iterator(obj.end());
    }
};

int main() {
    vector<int> nums = {1, 1, 4, 5, 1, 4};
    for (auto&& [i, num] : enumerate(nums)) {
        cout << i << " " << num << endl;
    }
    vector<string> words = {"hello", "world"};
    for (auto&& [i, word] : enumerate(words)) {
        cout << i << " " << word << endl;
    }
    return 0;
}
```
