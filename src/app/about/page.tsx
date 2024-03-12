//SSG로 작성
//companyinfo 를 받는 페이지

import React from "react";

const about = async () => {
  const response = await fetch("http://localhost:3000/api/company");
  const { company } = await response.json();

  return (
    <div>
      <div>{company.name}</div>
      <p>{company.description}</p>
      <figure>
        <img src={company.image} width="500" height="500" alt="회사이미지" />
      </figure>
    </div>
  );
};

export default about;
