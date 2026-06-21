---
title: KV Cache
sidebar_position: 4
description: KV Cache 笔记模板
---

# KV Cache

KV Cache 保存历史 token 的 key 和 value，是自回归大模型推理的核心状态。

## 核心问题

- KV Cache 为什么能减少重复计算？
- 显存占用如何随 batch、层数、序列长度和隐藏维度增长？
- 多请求服务中如何管理 cache 生命周期？

## 笔记模板

- 模型参数。
- cache 形状。
- 显存估算。
- 生命周期。
- 调度影响。
- 优化方法。
