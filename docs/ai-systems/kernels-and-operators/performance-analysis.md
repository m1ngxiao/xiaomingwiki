---
title: 性能分析
sidebar_position: 5
description: Kernel 性能分析笔记模板
---

# 性能分析

性能分析用于判断瓶颈来自计算、访存、同步、调度还是 launch 开销。

## 核心问题

- 当前算子是 compute-bound 还是 memory-bound？
- 哪些指标能解释性能变化？
- benchmark 是否稳定、可复现？

## 笔记模板

- 测试环境。
- 输入规模。
- 指标定义。
- profiler 截图或数据。
- 瓶颈判断。
- 下一步优化。
