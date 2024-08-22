'use client';
import React, { useContext } from 'react';
import {Categorycontext} from "@/context/Categorycontext";

const Categorycard = ({cat}:any) => {
  const {category, changeCategory} = useContext(Categorycontext);
  return (
    <div onClick={() => changeCategory(cat.attributes.Title) }  
    className={`${
      cat.attributes.Title === category ? "bg-[#ffffff] text-black" : "bg-[#af8533]"} p-4 rounded-lg shadow-md cursor-pointer`}>
        {cat.attributes.Title}
    </div>
  );
};

export default Categorycard;