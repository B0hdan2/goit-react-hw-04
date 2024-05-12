import { InfinitySpin } from "react-loader-spinner";
import s from "./Loader.module.css";

function Loader() {
  return (
    <div className={s.loader}>
      <InfinitySpin
        visible={true}
        width='200'
        color='aqua'
        ariaLabel='infinity-spin-loading'
      />
    </div>
  );
}

export default Loader;
