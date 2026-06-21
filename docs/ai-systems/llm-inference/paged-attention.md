---
title: PagedAttention
sidebar_position: 3
description: PagedAttention 笔记模板
---

# PagedAttention

PagedAttention 借鉴虚拟内存分页思想，把 KV Cache 拆成 block 进行管理，减少显存碎片并支持灵活调度。

## 核心问题

- 为什么连续 KV Cache 管理会浪费显存？
- block table 如何映射逻辑 token 和物理 cache block？
- 这种设计如何影响 batch、swap 和调度？

## 笔记模板

- 问题背景。
- 数据结构。
- 访问流程。
- 显存收益。
- 性能开销。
- 边界情况。
