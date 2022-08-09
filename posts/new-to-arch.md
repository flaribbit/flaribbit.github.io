---
title: archlinux 入坑和踩坑记录
date: 2022-08-09 11:18:00
tags: [linux, archlinux]
---

记录了系统和常用软件的安装配置方法。

---

## 安装
安装前我想了一下，反正都要装桌面，那我直接用 plasma 版不是方便很多吗。于是我就去用 plasma 了，确实方便了不少。至少分区之类的不用害怕了，和 ubuntu 的安装向导是一样的，鼠标操作就行。

## 添加 cn 源
在 `/etc/pacman.conf` 文件末尾添加以下两行：
```
[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

然后更新库并安装 `archlinuxcn-keyring`，就可以安装 `paru` 包管理器了
```bash
sudo pacman -Syy
sudo pacman -S archlinuxcn-keyring
sudo pacman -S paru
```

之后就可以直接使用 `paru` 代替 `pacman` 了，除此之外 `paru` 可以很方便地安装 aur 上面的包。

## 中文显示
安装中文字体
```bash
sudo paru -S ttf-roboto noto-fonts noto-fonts-cjk adobe-source-han-sans-cn-fonts adobe-source-han-serif-cn-fonts ttf-dejavu
```

然后配置 fontconfig，全局配置在 `/etc/fonts/local.conf`，用户配置在 `~/.config/fontconfig/fonts.conf`。
```xml
<?xml version='1.0'?>
<!DOCTYPE fontconfig SYSTEM 'fonts.dtd'>
<fontconfig>

  <match target="font">
    <edit mode="assign" name="rgba">
      <const>rgb</const>
    </edit>
  </match>

  <match target="font">
    <edit mode="assign" name="hintstyle">
      <const>hintslight</const>
    </edit>
  </match>

  <match target="font">
    <edit mode="assign" name="antialias">
      <bool>true</bool>
    </edit>
  </match>

<!-- Default font (no fc-match pattern) -->
  <match>
    <edit mode="prepend" name="family">
      <string>JetBrainsMono Nerd Font</string>
    </edit>
  </match>

<!-- Default font for the zh_CN locale (no fc-match pattern) -->
  <match>
    <test compare="contains" name="lang">
      <string>zh_CN</string>
    </test>
    <edit mode="prepend" name="family">
      <string>Noto Sans CJK SC</string>
    </edit>
  </match>

<!-- Default sans-serif font -->
  <match target="pattern">
    <test qual="any" name="family">
      <string>sans-serif</string></test>
    <edit name="family" mode="prepend" binding="same">
      <string>Noto Sans</string>
    </edit>
  </match>

<!-- Default serif fonts -->
  <match target="pattern">
    <test qual="any" name="family">
      <string>serif</string>
    </test>
    <edit name="family" mode="prepend" binding="same">
      <string>Noto Serif</string>
    </edit>
  </match>

<!-- Default monospace fonts -->
  <match target="pattern">
    <test qual="any" name="family">
      <string>monospace</string>
    </test>
    <edit name="family" mode="prepend" binding="same">
      <string>JetBrainsMono Nerd Font</string>
    </edit>
  </match>

<!-- Fallback fonts preference order -->
  <alias>
    <family>sans-serif</family>
    <prefer>
      <family>Noto Sans</family>
      <family>Noto Sans CJK SC</family>
      <family>Noto Sans CJK TC</family>
      <family>Noto Sans CJK JP</family>
      <family>Noto Sans CJK KR</family>
      <family>Noto Color Emoji</family>
      <family>Noto Emoji</family>
    </prefer>
  </alias>
  <alias>
    <family>serif</family>
    <prefer>
      <family>Noto Serif</family>
      <family>Noto Serif CJK SC</family>
      <family>Noto Serif CJK TC</family>
      <family>Noto Serif CJK JP</family>
      <family>Noto Serif CJK KR</family>
      <family>Noto Color Emoji</family>
      <family>Noto Emoji</family>
    </prefer>
  </alias>
  <alias>
    <family>monospace</family>
    <prefer>
      <family>JetBrainsMono Nerd Font</family>
      <family>Noto Serif CJK SC</family>
      <family>Noto Serif CJK TC</family>
      <family>Noto Serif CJK JP</family>
      <family>Noto Serif CJK KR</family>
      <family>Noto Color Emoji</family>
      <family>Noto Emoji</family>
    </prefer>
  </alias>

</fontconfig>

```

这里批评一下 wiki 写的什么玩意，这才叫配置文件啊，多么清晰易懂。

来源：[wiki](https://wiki.archlinux.org/title/Font_Configuration_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)/Chinese_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#Windows_%E6%98%BE%E7%A4%BA%E6%95%88%E6%9E%9C%E7%9A%84%E5%AD%97%E4%BD%93%E5%8F%82%E8%80%83%E9%85%8D%E7%BD%AE) 和 [Arch Linux 字体调优 - JC Zhang 的博客](https://jczhang.top/posts/arch_fonts_config/)

## 中文输入法
安装 fcitx5
```bash
sudo paru -S fcitx5 fcitx5-chinese-addons fcitx5-gtk fcitx5-qt fcitx5-configtool
```

然后添加环境变量 `/etc/environment`，或者 `~/.xprofile`
```
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
INPUT_METHOD=fcitx
SDL_IM_MODULE=fcitx
GLFW_IM_MODULE=ibus
```
然后设置开机启动即可（桌面环境不同，方法也不同）。

安装后可能还需要去设置里添加一个拼音输入法。

我还遇到一个小 bug/特性，刚打开软件的时候 shift 切换中英文无效，先用 ctrl+shift 切换一次之后，才可以用 shift 切换。

来源：[2022.5 archlinux详细安装过程 - 知乎专栏](https://zhuanlan.zhihu.com/p/513859236)

## vscode
推荐安装 `aur/visual-studio-code-bin`，这个是官方的，之前用 OSS 遇到了一些很不爽的问题，还是乖乖官方的吧。

## chrome
安装 `aur/google-chrome`

## $XDG_CONFIG_HOME 是啥
其实就是 `~/.config/`，不知道为啥我这里没有这个环境变量。

## 搜索包
- 搜索本地包是 `-Qs`
- 在线搜索是 `-Ss`

## clash 全部超时
检查系统时间
