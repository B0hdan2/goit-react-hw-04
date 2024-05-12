import { SiFoodpanda } from "react-icons/si";
import s from "./ErrorMessage.module.css"

function ErrorMessage() {
  return (
    <div className={s.error}>
      <p className={s.text}>Oops something is wrong</p>
      <SiFoodpanda className={s.svg}/>
    </div>
  );
}

export default ErrorMessage;
