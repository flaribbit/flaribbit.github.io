---
title: 各种奇怪的程序备份
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

## c++ 自带的编码转换

放在这里备份一下 当模板了

```cpp
#include <string>
#include <codecvt>  // for std::codecvt_utf8
#include <locale>   // for std::wstring_convert
#include <cstdio>
#ifdef _WIN32
#include <windows.h>
#endif

int main() {
#ifdef _WIN32
    SetConsoleOutputCP(65001);
#endif
    std::wstring_convert<std::codecvt_utf8<char32_t>, char32_t> u32conv;
    std::string u8string = "你好世界";
    std::u32string unicode_string = u32conv.from_bytes(u8string);
    std::string u8string2 = u32conv.to_bytes(unicode_string);
    for (auto c : unicode_string) printf("%x ", c);
    printf("%s\n", u8string2.c_str());
    return 0;
}
```
