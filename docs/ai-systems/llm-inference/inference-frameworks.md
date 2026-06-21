---
title: 推理框架
sidebar_position: 1
description: 大模型推理框架笔记模板
---

# 推理框架

推理框架负责模型加载、请求调度、KV Cache 管理、算子调用和服务接口。

## 核心问题

- 框架如何组织 prefill 和 decode？
- 如何管理多请求、多 batch 和多 GPU？
- 如何在吞吐、延迟和显存之间取舍？

## 笔记模板

- 框架定位。
- 架构组件。
- 请求流程。
- 调度策略。
- 显存管理。
- benchmark 结果。
