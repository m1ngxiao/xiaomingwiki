---
title: 大模型系统优化
sidebar_position: 5
description: 并行策略、MoE、显存、通信、调度和端到端性能优化
---

# 大模型系统优化

大模型系统优化关注系统级优化，而不是单个算子或单个框架功能。这里把并行、MoE、显存、通信、调度和端到端性能放在统一视角下分析。

## 包含内容

- [并行策略](./parallelism.md)
- [MoE 系统](./moe-systems.md)
- [显存管理](./memory-management.md)
- [通信优化](./communication-optimization.md)
- [调度系统](./scheduling.md)
- [端到端性能优化](./end-to-end-performance.md)

## 推荐学习路径

先理解数据并行、张量并行、流水线并行和专家并行，再学习显存与通信瓶颈，最后用端到端 profiling 分析系统收益。

## 笔记模板

- 系统目标。
- 架构组件。
- 瓶颈判断。
- 优化手段。
- 指标变化。
- 代价和边界。

## 参考资料

分布式训练 / 推理论文、MoE 系统论文、NCCL 文档、推理服务和训练框架文档。
