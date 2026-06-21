---
title: vLLM
sidebar_position: 2
description: vLLM 笔记模板
---

# vLLM

vLLM 是一个面向高吞吐大模型推理的框架，核心关注请求调度、PagedAttention 和 KV Cache 管理。

## 核心问题

- vLLM 的架构如何组织 worker、scheduler 和 engine？
- PagedAttention 如何改善 KV Cache 管理？
- Continuous Batching 如何提升吞吐？

## 笔记模板

- 版本和环境。
- 架构图。
- 关键机制。
- 配置项。
- 性能指标。
- 与其他框架对比。
