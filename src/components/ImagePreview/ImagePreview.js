import styles from "./ImagePreview.module.css";

const ImagePreview = ({ selectedImg }) => {
  return (
    <div>
      <div className={styles.imagePreviewContainer}>
        {selectedImg && (
          <img
            src={URL.createObjectURL(selectedImg)}
            alt="thumb"
            className={styles.imagePreview}
          />
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
