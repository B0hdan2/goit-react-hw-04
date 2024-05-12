import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import requestToServer from "../photo-API";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [photos, setPhoto] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = (topic) => {
    const getPhoto = async () => {
      try {
        setPhoto([]);
        setError(false);
        setLoader(true);
console.log(topic);
        const data = await requestToServer(topic);
        setPhoto(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getPhoto();
  };

  // const handleClick = () => {
  //   const data = requestToServer()
  //   setPhoto((priv) => [...priv]);
  //   photoMore={handleClick}
  // };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery images={photos} />}
      {photos.length > 0 && <LoadMoreBtn />}
    </>
  );
};

export default App;
