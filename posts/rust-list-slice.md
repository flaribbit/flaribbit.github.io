---
title: rust 数组切片
---

关于 rust 中的 `From` 和 slice 切片，还有 `&[]` 和 `[].as_ref()` 的区别。

已知

```rust
#[derive(Debug)]
pub struct Foo {
    value: Vec<i32>,
}

impl From<&[i32]> for Foo {
    fn from(value: &[i32]) -> Self {
        Foo {
            value: value.to_vec(),
        }
    }
}
```

奇怪的是
```rust
fn main() {
    let foo = Foo::from([1, 2, 3].as_ref()); //可以
    println!("{:?}", foo);
    let foo = Foo::from(&[1, 2, 3]);         //报错
    //        ^^^^^^^^^ the trait `From<&[{integer}; 3]>` is not implemented for `Foo`
    println!("{:?}", foo);
}
```

为什么呢，其实原因很简单，前者 `as_ref()` 返回类型 `&T` ，这里是 `&[i32]` ；后者类型是 `&[i32; 3]` ，注意是有长度的，长度也是类型的一部分。除了使用 `as_ref()` ，手动 `as &[i32]` 也可以。

如果要带长度的，可以加一个类型参数，改成这样
```rust
impl<const N: usize> From<&[i32; N]> for Foo {
    fn from(value: &[i32; N]) -> Self {
        Foo {
            value: value.to_vec(),
        }
    }
}
```

另一些奇奇怪怪的想法，如果这样写呢
```rust
impl<T: Into<&[i32]>> From<T> for Foo {
//           ^ explicit lifetime name needed here
// `&` without an explicit lifetime name cannot be used here
    fn from(value: T) -> Self {
        Foo { value: value.into().to_vec() }
    }
}

//行吧那就加一个
impl<'a, T: Into<&'a [i32]>> From<T> for Foo {
    fn from(value: T) -> Self {
        Foo { value: value.into().to_vec() }
    }
}
```

可以是可以，但并没有什么卵用，没有其他类型（至少 `&[i32; N]` 不行）到 `&[i32]` 的自动转换（这不就绕回刚开始的问题了）。

最后， `as_ref()` 真香，长度爬。
