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
        value={"rock"}
        onClick={(e) => {
          getSongfilter(e.target.value);
          setBlock((e) => {
            setBlock(e.target.value);
          });
        }}
      >
        rock
      </button>
      <button
        className={classFilter.filterBtn}
        onClick={(e) => {
          getSongfilter(e.target.value);
        }}
      >
        city pop
      </button>
      <button
        className={classFilter.filterBtn}
        onClick={(e) => {
          getSongfilter(e.target.value);
        }}
      >
        {" "}
        pop
      </button>
      <button
        className={classFilter.filterBtn}
        onClick={(e) => {
          getSongfilter(e.target.value);
        }}
      >
        {" "}
        rap
      </button>
    </div>
  );
};

export default FilterBlock;
