import s from "./ImageCard.module.css";

function ImageCard({ images, openModal }) {
  return (
    <div>
      <img
        className={s.card_img}
        onClick={() => openModal({ images })}
        src={images.urls.small}
        alt={images.alt_description}
      />
    </div>
  );
}

export default ImageCard;
