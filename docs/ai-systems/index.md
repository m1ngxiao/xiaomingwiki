---
title: AI 系统与性能
sidebar_position: 5
description: GPU、算子、推理系统、量化和大模型系统优化
---

# AI 系统与性能

AI 系统与性能是本站最重要的工程栏目之一。这里关注模型如何在真实硬件和系统中高效训练、部署和推理。

```text
AI 系统与性能
├─ GPU 与并行计算
├─ 算子与内核优化
├─ 大模型推理系统
├─ 模型压缩与量化
└─ 大模型系统优化
```

## 包含关系

- [GPU 与并行计算](./gpu-and-parallel-computing/index.md)：GPU 架构、CUDA 编程、并行计算模型、GPU Mode 学习笔记。
- [算子与内核优化](./kernels-and-operators/index.md)：GEMM、Attention Kernel、FlashAttention、算子融合、性能分析。
- [大模型推理系统](./llm-inference/index.md)：推理框架、vLLM、PagedAttention、KV Cache、Continuous Batching、Speculative Decoding。
- [模型压缩与量化](./quantization/index.md)：PTQ、QAT、SmoothQuant、GPTQ / AWQ、旋转量化、FP8 / MXFP4 / INT4。
- [大模型系统优化](./system-optimization/index.md)：并行策略、MoE 系统、显存管理、通信优化、调度系统、端到端性能优化。

## 推荐学习路径

先理解 GPU 与并行计算，再进入算子与内核优化；随后学习推理系统中的状态管理、调度和框架机制；最后把量化、并行、显存、通信和端到端性能放到系统级视角中分析。

## 笔记模板

- 问题：瓶颈来自计算、访存、通信、调度还是显存？
- 层级：这是硬件层、Kernel 层、框架层还是系统层问题？
- 指标：吞吐、延迟、显存、带宽、利用率如何变化？
- 工具：使用什么 profiler 或 benchmark？
- 结论：优化收益是否稳定，是否有边界条件？

## 参考资料

可参考 CUDA 文档、GPU Mode、vLLM、FlashAttention、量化论文和大模型系统论文。资料来源可以多样，但本站目录保持工程层级清晰。
