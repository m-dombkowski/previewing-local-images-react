import styles from "./ControlButtons.module.css";

const ControlButtons = ({ onFileUpload, selectedImg, onFileChange }) => {
  return (
    <div className={styles.buttonsContainer}>
      <label htmlFor="files" className={styles.filesButton}>
        Search for your image
      </label>
      <button
        className={styles.uploadButton}
        onClick={onFileUpload}
        disabled={!selectedImg}
      >
        Upload!
      </button>
      <input
        id="files"
        className={styles.files}
        type="file"
        accept="image/*"
        onChange={onFileChange}
      ></input>
    </div>
  );
};

export default ControlButtons;
