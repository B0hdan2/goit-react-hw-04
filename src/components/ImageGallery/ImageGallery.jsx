import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

function ImageGallery({ images }) {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li className={s.item} key={image.id}>
          <ImageCard src={image.urls} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
