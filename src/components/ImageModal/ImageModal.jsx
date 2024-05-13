import { useEffect } from "react";
import s from "./ImageModal.module.css";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import ReactModal from "react-modal";

function ImageModal({ content, onClose, isOpen }) {
  const handleClose = (e) => {
    if (e.target.classList.contains(s.backdrop)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      overlayClassName={s.backdrop}
      className={s.modal}
      shouldCloseOnOverlayClick={true}
    >
      <div>
        <div>
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
    </ReactModal>
  );
}

export default ImageModal;
