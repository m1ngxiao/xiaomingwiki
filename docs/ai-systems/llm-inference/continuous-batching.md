---
title: Continuous Batching
sidebar_position: 5
description: Continuous Batching 笔记模板
---

# Continuous Batching

Continuous Batching 允许请求动态进入和离开 batch，用于提升推理服务吞吐。

## 核心问题

- 静态 batching 为什么会浪费计算资源？
- 请求长度差异如何影响调度？
- continuous batching 如何影响延迟和吞吐？

## 笔记模板

- 请求流模型。
- batch 形成策略。
- token 级调度。
- 指标变化。
- 公平性问题。
- 与 KV Cache 的关系。
