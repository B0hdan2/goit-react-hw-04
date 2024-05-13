import s from "./ImageCard.module.css";

function ImageCard({ image, openModal }) {
  return (
    <div>
      <img
        className={s.card_img}
        onClick={() => openModal({ image })}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageCard;
