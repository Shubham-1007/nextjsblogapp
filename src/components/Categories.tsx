"use client"
import React, { useContext, useLayoutEffect } from "react";
import Categorycard from "./Categorycard";
import Categorycontext from "@/context/Categorycontext";

const Categories = ({ categories }: any) => {

  const {changeCategory} = useContext (Categorycontext);

  useLayoutEffect(() =>{
    changeCategory(categories?.data[0].attributes.Title)
  }, [])

  return (
    <div className="flex gap-6 mb-8 ">
      {categories?.data?.map((category: any) => (
        <div key={category.id}>
          <Categorycard cat={category} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
