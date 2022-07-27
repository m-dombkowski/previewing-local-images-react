import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imagesActions } from "../../features/Images/ImagesSlice";
import styles from "./ImagesList.module.css";

const ImagesList = ({ showImg, deleteImg }) => {
  const { images } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  // Used this useEffect to update array if there are more than 5 images "followed" on the list. Basically new img replace one with the smallest index

  useEffect(() => {
    let arrToDisplay = [];
    if (images.length > 5) {
      for (let i = images.length - 5; i <= images.length; i++) {
        if (images[i]) {
          arrToDisplay.push(images[i]);
        }
      }
      dispatch(imagesActions.updateArrayIfMoreThan5(arrToDisplay));
    }
  }, [dispatch, images]);

  return (
    <div>
      {images.length > 0 && (
        <ul className={styles.list}>
          {images.map((element, index) => (
            <li key={index} className={styles.singleImage}>
              <button
                className={styles.previewImgButton}
                value={element.name}
                onClick={showImg}
              >
                {element.name}
              </button>
              <button
                className={styles.deleteImgButton}
                value={element.name}
                onClick={deleteImg}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImagesList;
