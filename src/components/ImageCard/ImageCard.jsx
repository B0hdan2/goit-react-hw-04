import s from "./ImageCard.module.css";

function ImageCard({ src, alt }) {
  return (
    <div>
      <img className={s.card_img} src={src.small} alt={alt} />
    </div>
  );
}

export default ImageCard;
