import React from 'react';
import Link from '@docusaurus/Link';

const features = [
  {
    index: '01',
    title: '数学基础',
    description: '微积分、线性代数、概率论和统计方法，作为长期稳定的理论底座。',
    topics: ['微积分', '线性代数', '概率论'],
    to: '/docs/math',
    accent: '#2563eb',
  },
  {
    index: '02',
    title: '编程语言',
    description: 'Python 与 C++ 的语言能力、工程实践、调试工具链和性能意识。',
    topics: ['Python', 'C++', '工程实践'],
    to: '/docs/programming',
    accent: '#0f766e',
  },
  {
    index: '03',
    title: '计算机基础',
    description: '数据结构与算法、组成原理、操作系统、计算机网络等系统基础。',
    topics: ['算法', 'OS', '网络'],
    to: '/docs/cs',
    accent: '#b45309',
  },
  {
    index: '04',
    title: 'AI 基础与模型',
    description: '机器学习、深度学习、CV、NLP、LLM 与扩散模型的原理和论文。',
    topics: ['NLP', 'LLM', 'Diffusion'],
    to: '/docs/ai-models',
    accent: '#7c3aed',
  },
  {
    index: '05',
    title: 'AI 系统与性能',
    description: 'GPU、CUDA、算子优化、推理系统、量化和大模型系统优化。',
    topics: ['GPU', 'vLLM', 'Quant'],
    to: '/docs/ai-systems',
    accent: '#be123c',
  },
];

export default function HomepageFeatures() {
  return (
    <section className="home-section">
      <div className="home-section__header home-section__header--split">
        <div>
          <p className="home-eyebrow">Knowledge Map</p>
          <h2>五个知识方向</h2>
        </div>
        <p>
          目录按长期可复用的知识体系组织，课程、论文和项目作为具体页面中的资料来源。
        </p>
      </div>
      <div className="knowledge-grid">
        {features.map((feature) => (
          <Link
            className="knowledge-card"
            to={feature.to}
            key={feature.title}
            style={{'--card-accent': feature.accent}}>
            <div className="knowledge-card__top">
              <span>{feature.index}</span>
              <i aria-hidden="true" />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <div className="knowledge-card__topics">
              {feature.topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
            <strong>进入栏目</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
