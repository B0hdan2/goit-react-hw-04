import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import requestToServer from "../photo-API";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import toast, { Toaster } from "react-hot-toast";
import ImageModal from "./ImageModal/ImageModal";

const App = () => {
  const [photos, setPhoto] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [reachedLastPage, setReachedLastPage] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  useEffect(() => {
    const getPhoto = async () => {
      try {
        setError(false);
        setLoader(true);
        const { results, total_pages } =
          query !== ""
            ? await requestToServer({ page: page, query: query })
            : [];
        setPhoto((prev) => (query !== "" ? [...prev, ...results] : prev));

        if (page + 10 >= total_pages) {
          setReachedLastPage(false);
          toast("we showed everything we could", {
            icon: "🐼",
          });
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getPhoto();
  }, [page, query]);

  const handleSearch = (topic) => {
    if (query === topic) {
      return toast("you just found it", {
        icon: "🐼",
      });
    }
    setPhoto([]);
    setPage(0);
    setQuery("");
    setReachedLastPage(true);
    setQuery(topic);
  };

  const handleClick = () => {
    setPage((prev) => prev + 10);
  };

  const handleOpenModal = ({ images }) => {
    setContentModal(images);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {photos.length > 0 && (
        <ImageGallery images={photos} openModal={handleOpenModal} />
      )}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {!isOpen && reachedLastPage && photos.length > 0 && (
        <LoadMoreBtn photoMore={handleClick} />
      )}
      {isOpen && (
        <ImageModal content={contentModal} onClose={handleCloseModal} />
      )}
      <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{ style: { background: "aqua", color: "#000" } }}
      />
    </>
  );
};

export default App;
