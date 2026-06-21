---
title: MoE 系统
sidebar_position: 2
description: MoE 系统笔记模板
---

# MoE 系统

MoE 系统通过专家路由提高模型容量，但会带来负载均衡、通信和调度问题。

## 核心问题

- router 如何分配 token？
- expert parallelism 如何组织通信？
- 负载不均衡如何影响吞吐和尾延迟？

## 笔记模板

- MoE 结构。
- 路由策略。
- 专家并行。
- 通信模式。
- 负载均衡。
- 性能结果。
