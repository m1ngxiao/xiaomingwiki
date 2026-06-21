---
title: CUDA 编程
sidebar_position: 2
description: CUDA 编程笔记模板
---

# CUDA 编程

CUDA 编程用于把并行计算任务映射到 GPU 线程层级和内存层级上。

## 核心问题

- 如何设计 grid、block 和 thread 的映射？
- 如何减少 global memory 访问和非合并访存？
- 如何使用 shared memory、warp primitive 和异步拷贝？

## 笔记模板

- Kernel 目标。
- 线程映射。
- 内存访问。
- 同步方式。
- 性能指标。
- correctness 测试。
