import React from "react";
import ImageViewer from "react-image-viewer-zoom";
import "react-image-viewer-zoom/dist/style.css";

const ImageViewerHandle = () => {
  const images = [
    {
      src: "https://unsplash.it/800/300?image=1",
      title: "title",
      content: "content",
    },
    {
      src: "https://unsplash.it/300/800?image=2",
      title: "title",
      content: "content",
    },
    {
      src: "https://unsplash.it/1800/300?image=3",
      title: "title",
      content: "content",
    },
    {
      src: "https://unsplash.it/800/1800?image=4",
      title: "title",
      content: "content",
    },
  ];
  return (
    <ImageViewer
      showPreview={true}
      showIndex={true}
      prefixCls="mycomponent"
      activeIndex={0}
      images={images}
    />
  );
};

export default ImageViewerHandle;
