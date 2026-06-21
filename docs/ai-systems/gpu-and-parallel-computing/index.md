---
title: GPU 与并行计算
sidebar_position: 1
description: GPU 架构、CUDA 编程、并行计算模型和 GPU Mode 学习笔记
---

# GPU 与并行计算

GPU 与并行计算是 AI 系统性能的硬件和编程基础。

## 包含内容

- [GPU 架构](./gpu-architecture.md)
- [CUDA 编程](./cuda-programming.md)
- [并行计算模型](./parallel-computing-model.md)
- [GPU Mode 学习笔记](./gpu-mode-notes.md)

GPU Mode 学习笔记放在这里，不单独作为和 vLLM、量化平级的主栏目。

## 推荐学习路径

先理解线程、warp、block、SM、显存层次和带宽，再学习 CUDA 编程模型，最后结合 profiling 工具观察真实 Kernel 的性能瓶颈。

## 笔记模板

- 硬件概念。
- 编程模型。
- 内存访问模式。
- 并行粒度。
- 性能指标。
- 实验记录。

## 参考资料

NVIDIA CUDA 文档、GPU Mode 课程资料、Nsight 工具文档和高质量 Kernel 实现。
