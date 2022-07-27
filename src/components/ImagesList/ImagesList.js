import { useSelector } from "react-redux";
import styles from "./ImagesList.module.css";

const ImagesList = ({ showImg, deleteImg }) => {
  const { images } = useSelector((state) => state.images);

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
