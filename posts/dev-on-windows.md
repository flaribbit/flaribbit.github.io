---
title: 在 windows 上愉快地配置开发环境
date: 2022-10-05 19:24:00
tags: [windows, python, c++, nodejs]
---

本文将介绍几个小工具，以及如何快速配置各种开发环境。

---

## 脚本执行策略
windows 默认不允许执行来源不明的 powershell 脚本，本文中提到的工具使用前要把这个干掉。
```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## 包管理器 scoop
### 对比
scoop 安装的软件是 portable 的，全部安装到自己的 `$SCOOP/apps` 目录中，不会污染系统盘和注册表（注），可以搬走。

TODO

注：某些依赖注册表增强功能的会在安装后提示可选执行的命令。

### 安装

```powershell
irm get.scoop.sh | iex
```

默认安装位置在 `~/scoop` 如果需要修改安装位置，可以设置环境变量 `SCOOP`，值为期望安装的路径。

### 使用
安装常用的软件

```powershell
scoop install aria2
scoop install 7zip git nodejs-lts python
```

注：安装 aria2 之后，安装其他程序时会默认使用 aria2 多线程下载，速度快一些。

注：默认的 `main` 仓库中只包含命令行工具，添加 `extra` 仓库可以获得许多 GUI 工具，例如 everything、obs-studio。

更新所有软件
```powershell
scoop update *
```

更新默认保留旧版本，需要手动清除
```powershell
scoop cleanup *
```

## 终端配置与美化
安装 starship 和 gsudo
```powershell
scoop install starship gsudo
```

创建配置文件，执行
```powershell
if (!(Test-Path -Path $PROFILE)) {
  New-Item -ItemType File -Path $PROFILE -Force
}
```

打开配置文件
```powershell
notepad $PROFILE
```

粘贴以下内容，保存后重启终端即可
```
Set-PSReadLineOption -PredictionSource History
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
Set-PSReadLineKeyHandler -Chord "Ctrl+RightArrow" -Function ForwardWord
Invoke-Expression (&starship init powershell)
```

效果如图：
![](images/20221005194508.png)

## c++ 包管理器
安装 vcpkg，先进入安装位置，然后执行
```powershell
git clone https://github.com/Microsoft/vcpkg
cd vcpkg
.\bootstrap-vcpkg.bat
```
把克隆下来的目录添加到环境变量 `PATH` 中。

设置环境变量 `CMAKE_TOOLCHAIN_FILE`，值为 `path/to/vcpkg/scripts/buildsystems/vcpkg.cmake`，记得改掉 `path/to`。

安装 cmake
```powershell
scoop install cmake
```

大功告成，现在就可以一键安装各种库了，例如
```powershell
vcpkg install jsoncpp
```

注：官方文档里写的使用方法是命令行添加 `-DCMAKE_TOOLCHAIN_FILE=xxxx`，这里已经设置了环境变量，即可直接执行 `cmake -B`，不必添加那一长串。

## rust 环境
```powershell
scoop install rustup-msvc
```

他会自动设置相关环境变量到 scoop 目录，然后安装 `stable-x86_64-pc-windows-msvc`。等一两分钟安装完成后就可以使用 `rust`、`cargo`、`rustup` 等命令了。

如果需要其他工具链，根据正常流程，使用 `rustup` 添加即可。

注意：不要使用 scoop 里面的 `rust` 包，这个没有源码，会导致 rust-analyzer 爆炸。

## TODO
TODO
