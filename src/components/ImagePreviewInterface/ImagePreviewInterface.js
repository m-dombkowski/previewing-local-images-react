import { useDispatch, useSelector } from "react-redux";
import { imagesActions } from "../../features/Images/ImagesSlice";
import { useState } from "react";
import { errorActions } from "../../features/Errors/ErrorSlice";
import ImagesList from "../ImagesList/ImagesList";
import ImagePreview from "../ImagePreview/ImagePreview";
import styles from "./ImagePreviewInterface.module.css";
import ControlButtons from "../ControlButtons/ControlButtons";

const ImgPreviewInterface = () => {
  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.images);
  const { errorMessage } = useSelector((state) => state.errors);

  const [selectedImg, setSelectedImg] = useState();

  const fileChangeHandler = (event) => {
    dispatch(errorActions.setErrorMessage(""));
    setSelectedImg(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    try {
      const found = images.find((element) => element.name === selectedImg.name);

      if (found) {
        setSelectedImg(null);
        throw new Error("This image is already on your list.");
      }

      dispatch(imagesActions.addImg(selectedImg));
      setSelectedImg(null);
    } catch (err) {
      dispatch(errorActions.setErrorMessage(err.message));
    }
  };

  const showImgHandler = (event) => {
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
    dispatch(errorActions.clearMessage());
  };

  return (
    <div className={styles.container}>
      <div className={styles.interfaceContainer}>
        <div className={styles.listAndButtonsContainer}>
          <ImagesList showImg={showImgHandler} deleteImg={deleteImgHandler} />
          <ControlButtons
            onFileUpload={fileUploadHandler}
            selectedImg={selectedImg}
            onFileChange={fileChangeHandler}
          />
        </div>
        <ImagePreview selectedImg={selectedImg} />
      </div>
      {errorMessage && (
        <div className={styles.errorMessageContainer}>
          <p className={styles.errorMessage}>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ImgPreviewInterface;
