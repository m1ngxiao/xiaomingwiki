---
title: QAT
sidebar_position: 2
description: Quantization-Aware Training 笔记模板
---

# QAT

QAT 在训练过程中模拟量化误差，让模型适应低精度约束。

## 核心问题

- fake quantization 如何插入训练图？
- 训练稳定性和成本如何变化？
- QAT 相比 PTQ 的收益是否值得？

## 笔记模板

- 训练设置。
- 量化配置。
- 损失曲线。
- 精度对比。
- 部署格式。
- 成本评估。
