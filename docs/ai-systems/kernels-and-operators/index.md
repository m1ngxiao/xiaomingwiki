---
title: 算子与内核优化
sidebar_position: 2
description: GEMM、Attention Kernel、FlashAttention、算子融合和性能分析
---

# 算子与内核优化

算子优化关注 kernel 级别、访存、并行度、tiling、fusion、profiling，是连接模型数学和硬件性能的关键层。

## 包含内容

- [GEMM](./gemm.md)
- [Attention Kernel](./attention-kernel.md)
- [FlashAttention](./flash-attention.md)
- [算子融合](./kernel-fusion.md)
- [性能分析](./performance-analysis.md)

## 推荐学习路径

先从 GEMM 理解 tiling、shared memory 和寄存器复用，再进入 Attention Kernel 和 FlashAttention，最后学习 fusion 和 profiling。

## 笔记模板

- 算子数学定义。
- 输入输出形状。
- 访存模式。
- 并行映射。
- 性能指标。
- profiler 结果。

## 参考资料

CUDA 文档、CUTLASS、FlashAttention 论文和实现、Nsight Compute、Triton 教程。
