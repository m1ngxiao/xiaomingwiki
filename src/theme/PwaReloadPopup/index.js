import React, {useState} from 'react';

export default function PwaReloadPopup({onReload}) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="pwa-reload-popup" role="status">
      <span>站点已有新版本</span>
      <button type="button" onClick={onReload}>
        刷新
      </button>
      <button
        type="button"
        aria-label="关闭更新提示"
        onClick={() => setIsVisible(false)}>
        ×
      </button>
    </div>
  );
}
