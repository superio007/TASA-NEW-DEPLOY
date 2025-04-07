import { IKImage } from "imagekitio-react";

const Image = ({ index, image, project }) => {
  return (
    <IKImage
      key={index}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_BASE_URL}
      path={image.url
        .split("https://ik.imagekit.io/2cdga3aqf/TasaUploads/")
        .join("/")}
      loading="lazy"
      className="w-full h-auto object-cover shadow-md"
      transformation={[{ progressive: true, quality: "auto" }]}
      alt={project.name}
    />
  );
};

export default Image;
