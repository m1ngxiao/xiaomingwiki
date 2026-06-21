---
title: 显存管理
sidebar_position: 3
description: 显存管理笔记模板
---

# 显存管理

显存管理关注权重、激活、KV Cache、临时 buffer 和 allocator 行为。

## 核心问题

- 显存主要被哪些对象占用？
- 碎片化如何影响可用显存？
- offload、recompute、paging 等方法如何取舍？

## 笔记模板

- 显存组成。
- 生命周期。
- 峰值分析。
- 碎片观察。
- 优化策略。
- 性能代价。
