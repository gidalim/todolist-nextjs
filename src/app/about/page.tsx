import Image from "next/image";
import React from "react";
// export const dynamic = "force-static";

const about = async () => {
  const response = await fetch(`http://localhost:4000/companyInfo`);
  const company = await response.json();
  console.log(company);

  return (
    <div>
      <div>{company.name}</div>
      <p>{company.description}</p>
      <figure>
        <Image
          src={company.image}
          width={500}
          height={500}
          alt={`회사이미지`}
        />
      </figure>
    </div>
  );
};

export default about;
