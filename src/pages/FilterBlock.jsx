import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { useProducts } from "../context/ProductContextProvider";
import classFilter from "../style/FilterBlock.module.css";

const FilterBlock = () => {
  const { getSongfilter } = useProducts();
  const [block, setBlock] = useState("");
  console.log(block);

  return (
    <div className={classFilter.filterCont}>
      <button
        className={classFilter.filterBtn}
        onClick={(e) => {
          getSongfilter("rock");
        }}
      >
        Rock
      </button>
      <button
        className={classFilter.filterBtn}
        onClick={(e) => {
          getSongfilter("city_pop");
        }}
      >
        City pop
      </button>
      <button
        className={classFilter.filterBtn}
        onClick={(e) => {
          getSongfilter("pop");
        }}
      >
        {" "}
        Pop
      </button>
      <button
        className={classFilter.filterBtn}
        onClick={(e) => {
          getSongfilter("rap");
        }}
      >
        {" "}
        Rap
      </button>
    </div>
  );
};

export default FilterBlock;
