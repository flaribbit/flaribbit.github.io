---
title: 水波纹效果
date: 2022-05-20 20:18:00
tags: [js, 前端]
---

js + css 实现水波纹效果

---

突然想实现一个水波纹效果，于是就有了这篇文章。

<div class="ripple" @mousedown="onClick"></div>

## 思路分析

思路比较简单，在容器内创建一个用于绘制水波纹的元素，然后放大就可以了。

## 实现

实现过程中发现主要的难点是半径的计算。

需要圆形完全覆盖矩形，也就是说圆的半径要大于等于到四个顶点的距离，把这四个距离求最大值就可以了。

进一步思考，只需计算出到左侧和右侧距离的最大值，和上方和下方距离的最大值，勾股定理即可。

```ts
  const maxH = Math.max(e.offsetX, el.clientWidth - e.offsetX)
  const maxV = Math.max(e.offsetY, el.clientHeight - e.offsetY)
  const radius = Math.sqrt(maxH ** 2 + maxV ** 2)
```

完整代码如下：

```html
<template>
  <div class="ripple" @mousedown="onClick"></div>
</template>

<script setup lang="ts">
const onClick = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement
  const circle = document.createElement('span')
  const maxH = Math.max(e.offsetX, el.clientWidth - e.offsetX)
  const maxV = Math.max(e.offsetY, el.clientHeight - e.offsetY)
  const radius = Math.sqrt(maxH ** 2 + maxV ** 2)
  circle.className = 'ripple-circle'
  circle.style.left = `${e.offsetX - radius}px`
  circle.style.top = `${e.offsetY - radius}px`
  circle.style.width = `${radius * 2}px`
  circle.style.height = `${radius * 2}px`
  el.appendChild(circle)
  circle.addEventListener('animationend', () => {
    el.removeChild(circle)
  })
}
</script>

<style>
.ripple {
  width: 200px;
  height: 80px;
  margin: auto;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
}

.ripple-circle {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  transform-origin: center;
  animation: 0.7s ripple-animation ease forwards;
  pointer-events: none;
}

@keyframes ripple-animation {
  0% {
    opacity: 1;
    transform: scale(0);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(1);
  }
}
</style>
```

<script setup>
const onClick = (e) => {
  const el = e.currentTarget
  const circle = document.createElement('span')
  const maxH = Math.max(e.offsetX, el.clientWidth - e.offsetX)
  const maxV = Math.max(e.offsetY, el.clientHeight - e.offsetY)
  const radius = Math.sqrt(maxH ** 2 + maxV ** 2)
  circle.className = 'ripple-circle'
  circle.style.left = `${e.offsetX - radius}px`
  circle.style.top = `${e.offsetY - radius}px`
  circle.style.width = `${radius * 2}px`
  circle.style.height = `${radius * 2}px`
  el.appendChild(circle)
  circle.addEventListener('animationend', () => {
    el.removeChild(circle)
  })
}
</script>

<style>
.ripple {
  width: 200px;
  height: 80px;
  margin: auto;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
}

.ripple-circle {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  transform-origin: center;
  animation: 0.7s ripple-animation ease forwards;
  pointer-events: none;
}

@keyframes ripple-animation {
  0% {
    opacity: 1;
    transform: scale(0);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(1);
  }
}
</style>
