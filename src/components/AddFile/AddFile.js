import { useDispatch, useSelector } from "react-redux";
import { imagesActions } from "../../features/Images/ImagesSlice";
import { useState } from "react";

const AddFiles = () => {
  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.images);
  const [upload, setUpload] = useState(false);
  const [selectedImg, setSelectedImg] = useState();

  const fileChangeHandler = (event) => {
    setSelectedImg(event.target.files[0]);
    setUpload(true);
  };

  const onFileUpload = () => {
    dispatch(imagesActions.addImg(selectedImg));
    console.log(images);
    setSelectedImg(null);
    setUpload(false);
  };

  const showImgHandler = (event) => {
    console.log(event.target.value);

    images.forEach((element) => {
      if (event.target.value === element.name) {
        setSelectedImg(element);
      }
    });
  };

  return (
    <div>
      <input type="file" onChange={fileChangeHandler} />
      {upload && (
        <div>
          <button onClick={onFileUpload}>Upload!</button>
        </div>
      )}
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddFiles;
