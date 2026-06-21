---
title: 大模型推理系统
sidebar_position: 3
description: 推理框架、vLLM、PagedAttention、KV Cache、Continuous Batching 和 Speculative Decoding
---

# 大模型推理系统

大模型推理系统关注如何在服务场景中高效执行 prefill、decode、缓存管理、批处理和调度。

## 包含内容

- [推理框架](./inference-frameworks.md)
- [vLLM](./vllm.md)
- [PagedAttention](./paged-attention.md)
- [KV Cache](./kv-cache.md)
- [Continuous Batching](./continuous-batching.md)
- [Speculative Decoding](./speculative-decoding.md)

vLLM 是推理框架的一部分；PagedAttention 是 vLLM 的关键机制之一；KV Cache 是大模型推理的核心状态管理问题。它们不应该平铺到主栏目。

## 推荐学习路径

先理解 Transformer 推理中的 prefill 和 decode，再学习 KV Cache 和 batch 调度，最后进入 vLLM、PagedAttention 和 Speculative Decoding。

## 笔记模板

- 服务目标。
- 请求生命周期。
- 状态管理。
- 调度策略。
- 显存使用。
- 吞吐和延迟指标。

## 参考资料

vLLM 文档与论文、PagedAttention 论文、推理框架文档、LLM serving 系统论文。
