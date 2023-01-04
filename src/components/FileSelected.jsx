import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/fotoReducer";
import fileToDataUrl from "../utils/fileToDataUrl";

function FileSelected() {
  const dispatch = useDispatch();

  const handleSelect = async (evt) => {
    const file = [...evt.target.files][0];
    const data = await fileToDataUrl(file);
    dispatch(add(data));
  };

  return (
    <div className="file-select">
      <span className="overlapped">Загрузить фото</span>
      <input
        className="input-select"
        type="file"
        accept="image/*"
        onChange={handleSelect}
      />
    </div>
  );
}

export default FileSelected;
