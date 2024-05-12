import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import requestToServer from "../photo-API";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [photos, setPhoto] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

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
        if (page >= total_pages) {
          return;
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getPhoto();
  }, [page, query]);

  const search = (topic) => {
    setPhoto([]);
    setPage(0);
    setQuery("");
    setQuery(topic);
  };

  const handleClick = () => {
    setPage((prev) => prev + 10);
  };

  return (
    <>
      <SearchBar onSubmit={search} />
      {photos.length > 0 && <ImageGallery images={photos} />}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && <LoadMoreBtn photoMore={handleClick} />}
    </>
  );
};

export default App;
