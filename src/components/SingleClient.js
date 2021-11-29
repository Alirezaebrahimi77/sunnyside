import React from "react";

function SingleClient({imageSrc, authorReview, authorName, authorRole}) {
  return (
    <div className="singleClient">
      <div className="clientImage">
        <img src={imageSrc} alt="" />
      </div>
      <p className="authorReview">
        {authorReview}
      </p>
      <p className="authorName">{authorName}</p>
      <p className="authorRole">{authorRole}</p>
    </div>
  );
}

export default SingleClient;
