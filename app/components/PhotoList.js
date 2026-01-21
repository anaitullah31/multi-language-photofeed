import React from "react";
import PhotoCard from "./PhotoCard";

const PhotoList = ({ photos }) => {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 space-y-4 mt-7">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
