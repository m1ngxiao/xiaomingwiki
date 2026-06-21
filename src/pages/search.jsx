import React, {useEffect, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function SearchInner() {
  const [query, setQuery] = useState('');
  const [pagefind, setPagefind] = useState(null);
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    if (window.__pagefind) {
      setPagefind(window.__pagefind);
      return;
    }

    let cancelled = false;

    async function loadPagefind() {
      try {
        const runtimeImport = new Function(
          'modulePath',
          'return import(modulePath)',
        );
        const pagefindModule = await runtimeImport('/pagefind/pagefind.js');

        await pagefindModule.options({excerptLength: 32});
        window.__pagefind = pagefindModule;

        if (!cancelled) {
          setPagefind(pagefindModule);
        }
      } catch {
        if (!cancelled) {
          setUnavailable(true);
        }
      }
    }

    loadPagefind();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const trimmed = query.trim();
    let cancelled = false;

    if (!trimmed || !pagefind) {
      setResults([]);
      setIsSearching(false);
      return undefined;
    }

    async function runSearch() {
      setIsSearching(true);
      const search = await pagefind.search(trimmed);
      const items = await Promise.all(
        search.results.slice(0, 20).map((result) => result.data()),
      );

      if (!cancelled) {
        setResults(items);
        setIsSearching(false);
      }
    }

    runSearch().catch(() => {
      if (!cancelled) {
        setResults([]);
        setIsSearching(false);
        setUnavailable(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [query, pagefind]);

  const trimmed = query.trim();

  return (
    <div className="search-page">
      <div className="search-header">
        <p className="home-eyebrow">Pagefind</p>
        <h1>站内搜索</h1>
        <p>搜索文档、学习日志和长期积累的技术笔记。</p>
      </div>

      <label className="search-box">
        <span>关键词</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="例如：KV Cache、极限、CUDA、量化"
          autoComplete="off"
        />
      </label>

      {unavailable && (
        <div className="search-notice">
          搜索索引尚未生成或暂不可用。本地开发时请先运行 <code>npm run build</code>。
        </div>
      )}

      {trimmed && isSearching && <p className="search-state">搜索中...</p>}

      {trimmed && !isSearching && !unavailable && results.length === 0 && (
        <p className="search-state">没有找到结果</p>
      )}

      {trimmed && results.length > 0 && (
        <div className="search-results">
          {results.map((result) => (
            <article className="search-result" key={result.url}>
              <h2>
                <Link to={result.url}>
                  {result.meta?.title || result.title || result.url}
                </Link>
              </h2>
              {result.excerpt && (
                <p dangerouslySetInnerHTML={{__html: result.excerpt}} />
              )}
              <Link className="search-url" to={result.url}>
                {result.url}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Layout title="搜索" description="Xiaoming Wiki 站内搜索">
      <BrowserOnly fallback={<div className="container margin-vert--lg">搜索组件加载中...</div>}>
        {() => <SearchInner />}
      </BrowserOnly>
    </Layout>
  );
}
