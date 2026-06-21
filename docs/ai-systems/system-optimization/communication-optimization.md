---
title: 通信优化
sidebar_position: 4
description: 通信优化笔记模板
---

# 通信优化

通信优化关注多 GPU / 多节点系统中的带宽、延迟、collective 操作和通信计算重叠。

## 核心问题

- AllReduce、AllGather、ReduceScatter 分别出现在什么场景？
- 通信是否成为系统瓶颈？
- 如何通过 overlap、拓扑感知和分片降低通信成本？

## 笔记模板

- 拓扑结构。
- 通信算子。
- 数据规模。
- 带宽和延迟。
- overlap 策略。
- 优化收益。
