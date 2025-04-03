"use client";
import { useState, useEffect } from "react";
import DesktopComponent from "./TopPc";

const Top = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900); // 750px以下をモバイルとみなす
    };

    // 初期値の設定
    handleResize();

    // ウィンドウのリサイズイベントを監視
    window.addEventListener("resize", handleResize);

    // クリーンアップ関数
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <DesktopComponent isMobile={isMobile} />
    </div>
  );
};

export default Top;
