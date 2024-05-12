import s from "./LoadMoreBtn.module.css";
function LoadMoreBtn({ photoMore }) {
  return (
    <div className={s.box}>
      <button type='button' onClick={photoMore}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
