---
title: GEMM
sidebar_position: 1
description: GEMM 笔记模板
---

# GEMM

GEMM 是矩阵乘法的核心算子，也是理解 AI Kernel 优化的起点。

## 核心问题

- 如何利用 tiling 提高数据复用？
- 如何在 shared memory、register 和 tensor core 之间组织数据？
- 如何分析算力瓶颈和带宽瓶颈？

## 笔记模板

- 矩阵形状。
- 数据布局。
- tiling 策略。
- 线程映射。
- 使用硬件特性。
- benchmark 结果。
