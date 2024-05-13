import { useEffect } from "react";
import s from "./ImageModal.module.css";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdInfo } from "react-icons/md";

function ImageModal({ content, onClose }) {
  const handleClose = (e) => {
    if (e.target.classList.contains(s.backdrop)) {
      onClose();
    }
  };

  useEffect(() => {
    const handleOnEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleOnEsc);

    return () => {
      document.removeEventListener("keydown", handleOnEsc);
    };
  }, [onClose]);

  return (
    <div className={s.backdrop} onClick={handleClose}>
      <div className={s.modal}>
        <img src={content.urls.regular} alt={content.alt_description} />
        <div className={s.info_text}>
          <span>
            <FaHeart className={s.icon} /> {content.likes}
          </span>
          <p>
            <FaUser className={s.icon} /> {content.user.name}
          </p>
          <p>
            <MdInfo className={s.icon} /> {content.alt_description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
