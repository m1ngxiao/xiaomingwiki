import React, {useEffect, useRef} from 'react';

export default function GiscusComments() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const hasGiscus =
      container.querySelector('script[data-giscus-script="true"]') ||
      container.querySelector('iframe.giscus-frame');

    if (hasGiscus) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-giscus-script', 'true');
    script.setAttribute('data-repo', 'm1ngxiao/<YOUR_COMMENTS_REPO>');
    script.setAttribute('data-repo-id', '<YOUR_REPO_ID>');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', '<YOUR_CATEGORY_ID>');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '1');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'zh-CN');
    script.setAttribute('data-loading', 'lazy');

    container.appendChild(script);
  }, []);

  return (
    <section className="giscus-comments" ref={containerRef} aria-label="评论" />
  );
}
