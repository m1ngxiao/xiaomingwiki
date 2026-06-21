---
title: Speculative Decoding
sidebar_position: 6
description: Speculative Decoding 笔记模板
---

# Speculative Decoding

Speculative Decoding 使用较小的 draft model 提前生成候选 token，再由目标模型验证，以减少 decode 阶段延迟。

## 核心问题

- draft model 的接受率如何影响收益？
- 验证过程如何保持分布一致？
- 这种方法对显存、调度和系统复杂度有什么影响？

## 笔记模板

- 方法动机。
- draft model。
- 验证算法。
- 接受率。
- 性能收益。
- 适用边界。
