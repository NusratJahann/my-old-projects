import React from "react";

function SingleGalleryImg(props) {
  // Destructuring data from props
  const [ Img, id ] = props;

  return (
    <div className="flex justify-center mb-10">
      <div className="rounded-lg w-6/12 bg-slate-100 my-2 p-5">
        <p className="rounded-lg block bg-white p-5 mb-3">{Img}</p>
      </div>
    </div>
  );
}

export default SingleGalleryImg;
