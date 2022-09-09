---
title: 常见算法模板
date: 2022-09-06 17:05:00
tags: [python, 算法, c++]
---

常见算法模板备份

---

## 快速幂
[剑指 Offer 16. 数值的整数次方](https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/)
```py
class Solution:
    def myPow(self, x: float, n: int) -> float:
        res = 1.0
        if n < 0:
            n, x = -n, 1.0/x  # 操你妈怎么有负的
        while n > 0:
            if n & 1:
                res *= x
            x *= x
            n >>= 1
        return res
```

## 二分查找
[704. 二分查找](https://leetcode.cn/problems/binary-search/)
```cpp
class Solution {
   public:
    int search(vector<int>& nums, int target) {
        int left = 0;
        int right = nums.size() - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
};
```

## 反转链表
[剑指 Offer 24. 反转链表](https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/)

别推了，直接背吧

```py
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        l, c = None, head
        while c:
            r = c.next
            c.next = l
            l = c
            c = r
        return l
```

## BFS
[1091. 二进制矩阵中的最短路径](https://leetcode.cn/problems/shortest-path-in-binary-matrix/)

给你一个 n x n 的二进制矩阵 grid 中，返回矩阵中最短 畅通路径 的长度。如果不存在这样的路径，返回 -1 。

```py
class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        dirs = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
        if grid[0][0] != 0:
            return -1
        m = len(grid)
        n = len(grid[0])
        if m == 1:
            return 1
        visited = [[False]*n for i in range(m)]
        q = deque()
        q.append((0, 0))
        visited[0][0] = True
        step = 1
        while q:
            for _ in range(len(q)):  # 一次走完所有step步的
                si, sj = q.popleft()  # 回档的位置
                for (di, dj) in dirs:  # 尝试所有方向
                    i, j = si+di, sj+dj  # 新的位置
                    if 0 <= i < m and 0 <= j < n and grid[i][j] == 0 and not visited[i][j]:  # 判断新位置合法
                        if i == m-1 and j == n-1:  # 终点
                            return step+1
                        q.append((i, j))  # 存档
                        visited[i][j] = True
            step += 1
        return -1
```

## DFS
[695. 岛屿的最大面积](https://leetcode.cn/problems/max-area-of-island/)

给你一个大小为 m x n 的二进制矩阵 grid 。

岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

岛屿的面积是岛上值为 1 的单元格的数目。

计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

```py
class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        m = len(grid)
        n = len(grid[0])

        def dfs(i, j):
            if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] == 0:
                return 0
            grid[i][j] = 0  # 给他扬了，就不用标记访问过了
            area = 1
            for (di, dj) in dirs:  # 递归其他方向
                area += dfs(i+di, j+dj)
            return area

        maxArea = 0
        for i in range(m):
            for j in range(n):
                maxArea = max(maxArea, dfs(i, j))
        return maxArea
```

## 最长不含重复字符的子字符串
[剑指 Offer 48. 最长不含重复字符的子字符串](https://leetcode.cn/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/)
```py
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        dic = {}
        res = dp = 0  # 以当前字符为结束的最长不重复子串
        for j, c in enumerate(s):
            # abcdefcdef
            #   ^   ^
            #   i   j
            i = dic.get(c, -1)
            dic[c] = j
            if dp < j-i:
                dp = dp+1
            else:
                dp = j-i
            res = max(res, dp)
        return res
```

## 二叉搜索树的第 k 大节点
[剑指 Offer 54. 二叉搜索树的第k大节点](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)

提示：反向中序遍历

```py
class Solution:
    def kthLargest(self, root: TreeNode, k: int) -> int:
        def dfs(node: TreeNode):  # 反向中序遍历 有点骚
            nonlocal k, res
            if not node:
                return
            dfs(node.right)
            if k == 0:
                return
            k -= 1
            if k == 0:
                res = node.val
            dfs(node.left)

        res = 0
        dfs(root)
        return res
```

## 卡特兰数
相关问题：
- 左右括号匹配
- 满二叉树数量（显然和左右括号一样）
- 出栈方式数量
- 凸多边形划分
- 方格中不穿过对角线的单调路线（同出栈方式数量，可以转化为二叉树）

通项公式

$$H_{n}=C_{2 n}^{n} - C_{2 n}^{n + 1} = \frac{C_{2 n}^{n}}{n+1} (n \geq 2, n \in \mathbf{N}_{+} )$$

递推公式

$$\begin{aligned} H_{n+1}&=\frac{H_{n}(4 n+2)}{n+2} \\ H_{n}&=\left\{\begin{array}{ll} \sum_{i=1}^{n} H_{i-1} H_{n-i} & n \geq 2, n \in \mathbf{N}_{+} \\ 1 & n=0,1 \end{array} \right. \end{aligned}$$

下面代码是第一个递推公式

```py
def ktl(x):
    r = 1
    for n in range(x):
        r = r*(4*n+2)//(n+2)
    return r
```
