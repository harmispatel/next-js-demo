"use client"

import React from "react";

const page = ({params}) => {
  return (
    <>
      <div>
        <h3>Lecture 1 :- Maths</h3>
        <div>
            <h1>
                {params.lecture[0]}
            </h1>
            <h1>
                {params.lecture[1]}
            </h1>
            <h1>
                {params.lecture[2]}
            </h1>
        </div>
      </div>
    </>
  );
};

export default page;
