---
title: d3.js 学习笔记
date: 2021-08-16
tags: [d3, 前端, 笔记]
---

边学边随便写的，没有实际应用，各种操作详见注释
- 初始化
- 新数据添加
- 数据绑定
- 带主键的数据绑定
- 数据更新
- 数据删除
- 过渡效果或补间

```html
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://d3js.org/d3.v6.min.js"></script>
    <title>Document</title>
</head>

<body>
</body>

<script>
    var svg = d3.select("body")
        .append("svg")
        .attr("width", 640)
        .attr("height", 480);
    //数据集 id用于匹配新添加和删除的数据
    var dataset = [{ id: 1, n: 5 }, { id: 2, n: 10 }, { id: 3, n: 15 }, { id: 4, n: 20 }, { id: 5, n: 25 }, { id: 6, n: 30 }];
    //从零开始添加数据的模板
    svg.selectAll("circle")
        .data(dataset)
        .enter()
        //使用append创建新的空元素，数量与数据集长度一致
        .append("circle")
        //更新数据
        //d: 数据, i:索引
        //如果前面没有transition就是立即更新
        //这里的属性参见svg语法
        .attr("cx", (d, i) => (i * 50) + 25)
        .attr("cy", 240)
        .attr("r", d => d.n)
        //transition的最基本写法
        //默认平滑过渡，其他需要时自行搜索
        .transition()
        .duration(1000)
        //前面有transition就是补间
        .attr("r", 20);
    setTimeout(() => {
        dataset.splice(3,1);
        //选中update部分，注意带主键
        var update = svg.selectAll("circle").data(dataset, d => d.id);
        //选中enter部分
        var enter = update.enter();
        //选中exit部分
        var exit = update.exit();
        //接下来分别处理三个部分的元素，和前面基本一样
        update
            .transition()
            .duration(1000)
            .attr("cx", (d, i) => (i * 50) + 25)
            .attr("r", d => d.n);
        enter
            .append("circle")
            .attr("cx", (d, i) => (i * 50) + 25)
            .attr("cy", 240)
            .transition()
            .duration(1000)
            .attr("r", d => d.n);
        exit
            .transition()
            .duration(1000)
            .attr("r", 0)
            //使用remove删除不需要的元素
            .remove();
    }, 1000)
</script>

</html>
```
