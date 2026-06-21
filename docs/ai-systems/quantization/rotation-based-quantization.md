---
title: QuaRot / FlatQuant / ResQ
sidebar_position: 5
description: 旋转量化方法笔记模板
---

# QuaRot / FlatQuant / ResQ

旋转类量化方法通过变换激活或权重分布，降低 outlier 和通道不均衡带来的量化难度。

## 核心问题

- 旋转变换如何改变数值分布？
- 变换是否保持模型函数等价或近似等价？
- 额外计算开销能否被低精度收益抵消？

## 笔记模板

- 方法动机。
- 数学变换。
- 插入位置。
- 分布变化。
- 精度结果。
- 系统开销。
