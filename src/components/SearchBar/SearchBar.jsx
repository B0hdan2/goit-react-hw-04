import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const topic = form.elements.topic.value;

    if (!topic.trim()) {
      return toast("Please enter something", {
        icon: "⚠️",
      });
    }

    onSubmit(topic);
    
    form.reset();
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          type='text'
          name='topic'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
        />
        <button className={s.button} type='submit'>
          Search
        </button>
      </form>
      <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{ style: { background: "#363636", color: "#fff" } }}
      />
    </header>
  );
}

export default SearchBar;
