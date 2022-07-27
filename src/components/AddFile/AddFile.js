import { useDispatch, useSelector } from "react-redux";
import { imagesActions } from "../../features/Images/ImagesSlice";
import { useEffect, useState } from "react";
import { errorActions } from "../../features/Errors/ErrorSlice";

const AddFiles = () => {
  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.images);
  const { errorMessage } = useSelector((state) => state.errors);

  const [selectedImg, setSelectedImg] = useState();
  const toMany =
    "Can't add more than 5 images, please delete one of them before trying again.";

  const alreadyFound = "This image is already added.";

  const fileChangeHandler = (event) => {
    dispatch(errorActions.setErrorMessage(""));
    setSelectedImg(event.target.files[0]);
  };

  const onFileUpload = () => {
    try {
      const found = images.find((element) => element.name === selectedImg.name);

      if (images.length === 5) {
        setSelectedImg(null);
        throw new Error(toMany);
      }

      if (found) {
        setSelectedImg(null);
        throw new Error(alreadyFound);
      }

      dispatch(imagesActions.addImg(selectedImg));
      setSelectedImg(null);
    } catch (err) {
      dispatch(errorActions.setErrorMessage(err.message));
    }
  };

  const showImgHandler = (event) => {
    console.log(event.target.value);

    images.forEach((element) => {
      if (event.target.value === element.name) {
        setSelectedImg(element);
      }
    });
  };

  const deleteImgHandler = (event) => {
    const imgToDelete = images.filter((element) => {
      return element.name === event.target.value;
    });

    dispatch(imagesActions.deleteImg(imgToDelete));
    setSelectedImg(null);
    dispatch(errorActions.setErrorMessage(""));
  };

  useEffect(() => {
    console.log(images);
    console.log(typeof selectedImg);
  }, [images, selectedImg]);

  return (
    <div>
      <input type="file" onChange={fileChangeHandler} />

      <div>
        <button onClick={onFileUpload} disabled={!selectedImg}>
          Upload!
        </button>
      </div>

      {selectedImg && (
        <div>
          <img src={URL.createObjectURL(selectedImg)} alt="thumb" />
        </div>
      )}
      {images.length > 0 && (
        <ul>
          {images.map((element, index) => (
            <li key={index}>
              <button value={element.name} onClick={showImgHandler}>
                {element.name}
              </button>
              <button value={element.name} onClick={deleteImgHandler}>
                x
              </button>
            </li>
          ))}
        </ul>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default AddFiles;
