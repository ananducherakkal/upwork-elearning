import React, { useState } from "react";

function useImageLoad() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return {
    loadClass: `${
      imageLoaded ? "" : "opacity-0"
    } transition-opacity duration-700`,
    handleImageLoad,
  };
}

export default useImageLoad;
