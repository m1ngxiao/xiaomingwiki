---
title: FlashAttention
sidebar_position: 3
description: FlashAttention 笔记模板
---

# FlashAttention

FlashAttention 通过分块和在线 softmax 减少显存读写，是 Attention Kernel 优化的重要代表。

## 核心问题

- 为什么标准 Attention 会产生大量 HBM 访问？
- 在线 softmax 如何避免保存完整注意力矩阵？
- 分块大小如何影响性能和数值稳定性？

## 笔记模板

- 算法动机。
- 分块策略。
- 在线归一化。
- 内存流量。
- 数值误差。
- 与标准 Attention 的对比。
