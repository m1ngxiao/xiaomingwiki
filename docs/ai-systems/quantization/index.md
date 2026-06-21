---
title: 模型压缩与量化
sidebar_position: 4
description: PTQ、QAT、SmoothQuant、GPTQ / AWQ、旋转量化和低精度格式
---

# 模型压缩与量化

量化是模型压缩与推理加速的一部分，不和 GPU、vLLM、KV Cache 平铺。它关注如何在更低精度下尽量保持模型质量，并获得显存和吞吐收益。

## 包含内容

- [PTQ](./ptq.md)
- [QAT](./qat.md)
- [SmoothQuant](./smoothquant.md)
- [GPTQ / AWQ](./gptq-awq.md)
- [QuaRot / FlatQuant / ResQ](./rotation-based-quantization.md)
- [FP8 / MXFP4 / INT4](./fp8-mxfp4-int4.md)

## 推荐学习路径

先理解量化误差、scale、zero point 和校准数据，再学习 PTQ / QAT，最后进入 SmoothQuant、GPTQ / AWQ、旋转量化和硬件低精度格式。

## 笔记模板

- 量化对象。
- 精度格式。
- 校准方法。
- 误差来源。
- 质量指标。
- 推理性能。

## 参考资料

量化论文、推理框架量化文档、硬件低精度格式说明和复现实验。
