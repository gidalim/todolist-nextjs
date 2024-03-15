import React from "react";

const about = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/companyInfo`
  );
  const company = await response.json();

  return (
    <div className="md:container md:mx-auto flex flex-col items-center mt-8 gap-8">
      <div className="bg-white rounded-xl shadow-lg h-auto w-10/12 flex flex-row gap-8 justify-between">
        <figure>
          <img
            className="rounded-xl"
            src={company.image}
            width="400"
            height="350"
            alt={`회사이미지`}
          />
        </figure>
        <div className="h-auto w-8/12 flex flex-col justify-center items-center mr-36 gap-8">
          <p className="text-xl font-bold">{company.name}</p>
          <p className="text-lg font-medium">{company.description}</p>
        </div>
      </div>
    </div>
  );
};

export default about;
