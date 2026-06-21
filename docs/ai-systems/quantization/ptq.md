---
title: PTQ
sidebar_position: 1
description: Post-Training Quantization 笔记模板
---

# PTQ

PTQ 在不重新训练或少量校准的情况下量化模型，是部署阶段常用方法。

## 核心问题

- 校准数据如何选择？
- 权重和激活分别如何量化？
- 哪些层对量化误差更敏感？

## 笔记模板

- 模型和任务。
- 校准数据。
- 量化粒度。
- 精度变化。
- 性能收益。
- 失败样例。
