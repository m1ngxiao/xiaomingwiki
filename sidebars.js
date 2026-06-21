// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  wikiSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Xiaoming Wiki',
    },
    {
      type: 'category',
      label: '数学基础',
      link: {type: 'doc', id: 'math/index'},
      items: [
        {
          type: 'category',
          label: '微积分',
          link: {type: 'doc', id: 'math/calculus/index'},
          items: [
            {
              type: 'category',
              label: '斯图尔特微积分',
              items: [
                {
                  type: 'doc',
                  id: 'math/calculus/斯图尔特微积分/第一章笔记/斯图尔特微积分-第一章',
                  label: '第一章：函数与模型',
                },
                {
                  type: 'doc',
                  id: 'math/calculus/斯图尔特微积分/第二章笔记/斯图尔特微积分-第2章',
                  label: '第二章：极限与导数',
                },
                {
                  type: 'doc',
                  id: 'math/calculus/斯图尔特微积分/第三章笔记/斯图尔特微积分-第3章',
                  label: '第三章：求导法则',
                },
                {
                  type: 'doc',
                  id: 'math/calculus/斯图尔特微积分/第四章笔记/斯图尔特微积分-第4章',
                  label: '第四章：导数的应用',
                },
                {
                  type: 'doc',
                  id: 'math/calculus/斯图尔特微积分/第五章笔记/斯图尔特微积分-第5章',
                  label: '第五章：积分',
                },
                {
                  type: 'doc',
                  id: 'math/calculus/斯图尔特微积分/第六章笔记/斯图尔特微积分-第6章',
                  label: '第六章：积分的应用',
                },
                {
                  type: 'doc',
                  id: 'math/calculus/斯图尔特微积分/第七章笔记/斯图尔特微积分-第7章',
                  label: '第七章：积分技巧',
                },
                {
                  type: 'doc',
                  id: 'math/calculus/斯图尔特微积分/第八章笔记/斯图尔特微积分-第8章',
                  label: '第八章：积分的进一步应用',
                },
                {
                  type: 'doc',
                  id: 'math/calculus/斯图尔特微积分/第九章笔记/斯图尔特微积分-第9章',
                  label: '第九章：微分方程',
                },
                {
                  type: 'doc',
                  id: 'math/calculus/斯图尔特微积分/第十章笔记/斯图尔特微积分-第10章',
                  label: '第十章：参数方程与极坐标',
                },
                {
                  type: 'category',
                  label: '第二章补充阅读',
                  collapsed: true,
                  items: [
                    {
                      type: 'doc',
                      id: 'math/calculus/斯图尔特微积分/第二章笔记/牛顿小传',
                      label: '牛顿小传',
                    },
                    {
                      type: 'doc',
                      id: 'math/calculus/斯图尔特微积分/第二章笔记/莱布尼茨小传',
                      label: '莱布尼茨小传',
                    },
                    {
                      type: 'doc',
                      id: 'math/calculus/斯图尔特微积分/第二章笔记/柯西小传',
                      label: '柯西小传',
                    },
                    {
                      type: 'doc',
                      id: 'math/calculus/斯图尔特微积分/第二章笔记/牛顿与巴罗',
                      label: '牛顿与巴罗',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {type: 'doc', id: 'math/linear-algebra/index', label: '线性代数'},
        {type: 'doc', id: 'math/probability/index', label: '概率论'},
        {type: 'doc', id: 'math/statistics/index', label: '统计方法'},
      ],
    },
    {
      type: 'category',
      label: '编程语言',
      link: {type: 'doc', id: 'programming/index'},
      items: [
        {type: 'doc', id: 'programming/python/index', label: 'Python'},
        {type: 'doc', id: 'programming/cpp/index', label: 'C++'},
      ],
    },
    {
      type: 'category',
      label: '计算机基础',
      link: {type: 'doc', id: 'cs/index'},
      items: [
        {type: 'doc', id: 'cs/algorithms/index', label: '数据结构与算法'},
        {
          type: 'doc',
          id: 'cs/computer-organization/index',
          label: '计算机组成原理',
        },
        {type: 'doc', id: 'cs/operating-systems/index', label: '操作系统'},
        {type: 'doc', id: 'cs/networking/index', label: '计算机网络'},
      ],
    },
    {
      type: 'category',
      label: 'AI 基础与模型',
      link: {type: 'doc', id: 'ai-models/index'},
      items: [
        {
          type: 'doc',
          id: 'ai-models/machine-learning/index',
          label: '机器学习',
        },
        {
          type: 'doc',
          id: 'ai-models/deep-learning/index',
          label: '深度学习',
        },
        {
          type: 'doc',
          id: 'ai-models/computer-vision/index',
          label: '计算机视觉',
        },
        {type: 'doc', id: 'ai-models/nlp/index', label: '自然语言处理'},
        {type: 'doc', id: 'ai-models/llm/index', label: '大语言模型'},
        {type: 'doc', id: 'ai-models/diffusion/index', label: '扩散模型'},
      ],
    },
    {
      type: 'category',
      label: 'AI 系统与性能',
      link: {type: 'doc', id: 'ai-systems/index'},
      items: [
        {
          type: 'category',
          label: 'GPU 与并行计算',
          link: {
            type: 'doc',
            id: 'ai-systems/gpu-and-parallel-computing/index',
          },
          items: [
            'ai-systems/gpu-and-parallel-computing/gpu-architecture',
            'ai-systems/gpu-and-parallel-computing/cuda-programming',
            'ai-systems/gpu-and-parallel-computing/parallel-computing-model',
            'ai-systems/gpu-and-parallel-computing/gpu-mode-notes',
          ],
        },
        {
          type: 'category',
          label: '算子与内核优化',
          link: {type: 'doc', id: 'ai-systems/kernels-and-operators/index'},
          items: [
            'ai-systems/kernels-and-operators/gemm',
            'ai-systems/kernels-and-operators/attention-kernel',
            'ai-systems/kernels-and-operators/flash-attention',
            'ai-systems/kernels-and-operators/kernel-fusion',
            'ai-systems/kernels-and-operators/performance-analysis',
          ],
        },
        {
          type: 'category',
          label: '大模型推理系统',
          link: {type: 'doc', id: 'ai-systems/llm-inference/index'},
          items: [
            'ai-systems/llm-inference/inference-frameworks',
            'ai-systems/llm-inference/vllm',
            'ai-systems/llm-inference/paged-attention',
            'ai-systems/llm-inference/kv-cache',
            'ai-systems/llm-inference/continuous-batching',
            'ai-systems/llm-inference/speculative-decoding',
          ],
        },
        {
          type: 'category',
          label: '模型压缩与量化',
          link: {type: 'doc', id: 'ai-systems/quantization/index'},
          items: [
            'ai-systems/quantization/ptq',
            'ai-systems/quantization/qat',
            'ai-systems/quantization/smoothquant',
            'ai-systems/quantization/gptq-awq',
            'ai-systems/quantization/rotation-based-quantization',
            'ai-systems/quantization/fp8-mxfp4-int4',
          ],
        },
        {
          type: 'category',
          label: '大模型系统优化',
          link: {type: 'doc', id: 'ai-systems/system-optimization/index'},
          items: [
            'ai-systems/system-optimization/parallelism',
            'ai-systems/system-optimization/moe-systems',
            'ai-systems/system-optimization/memory-management',
            'ai-systems/system-optimization/communication-optimization',
            'ai-systems/system-optimization/scheduling',
            'ai-systems/system-optimization/end-to-end-performance',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
