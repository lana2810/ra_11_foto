import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../redux/fotoReducer";

function FotoList() {
  const dispatch = useDispatch();
  const foto = useSelector((state) => state.foto.items);

  const handleDelete = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="foto-block">
      {foto.map((it) => (
        <div key={it.id} className="image-block">
          <img className="image" src={it.url} alt=""></img>
          <i className="icon" onClick={() => handleDelete(it.id)}>
            &#10008;
          </i>
        </div>
      ))}
    </div>
  );
}

export default FotoList;
