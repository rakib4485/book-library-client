import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleBook from "../../../components/SingleBook/SingleBook";
import CategoryModal from "../CattegoryModal/CategoryModal";
import ChategoriesOffer from "../ChategoriesOffer/ChategoriesOffer";

const SingleCategory = () => {
  const category = useLoaderData();
  const [bookName, setBookName] = useState(null);

  return (
    <section>
      <div className="my-14 w-[90%] mx-auto">
        <h1 className="text-center text-2xl font-semibold mt-14">{category[0].name}</h1>
        <div className="divider w-96 mx-auto mb-12 rounded-md h-1 bg-orange-400"></div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {category.map((product, idx) => (
            <SingleBook
              key={idx}
              product={product}
              setBookName={setBookName}
            ></SingleBook>
          ))}
        </div>
      </div>
      <ChategoriesOffer></ChategoriesOffer>

      {bookName && (
        <CategoryModal
          bookName={bookName}
          setBookName={setBookName}
        ></CategoryModal>
      )}
    </section>
  );
};

export default SingleCategory;
