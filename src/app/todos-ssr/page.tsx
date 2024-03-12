// SSR 렌더링 방식
// CUD 안 함
// Link태그를 통한 report페이지 이동 '할 일 정보 통계 보러가기' 페이지

import Link from "next/link";
import React from "react";

const todosSSR = () => {
  return (
    <div>
      <Link href={"/report"}>할 일 통계 보러가기</Link>
      todosSSR
    </div>
  );
};

export default todosSSR;
