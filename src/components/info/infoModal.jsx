import React from 'react';
import { useSelector } from 'react-redux';
import { IoMdClose } from "react-icons/io";

const InfoModal = ({ image, onClose }) => {
  const description = useSelector((state) => state.comments.comments[image.id] || "");

  return (
    <div className="modal__info">
      <div className="modal__info__content">
        <h3 className="modal__info__content__tittle">Información de la Imagen</h3>
        <p className="modal__info__content__p"><strong>Ancho:</strong> {image.width}px</p>
        <p className="modal__info__content__p"><strong>Alto:</strong> {image.height}px</p>
        <p className="modal__info__content__p"><strong>Likes:</strong> {image.likes}</p>
        <p className="modal__info__content__p"><strong>Fecha añadida:</strong> {new Date(image.created_at).toLocaleDateString()}</p>
        <p className="modal__info__content__p"><strong>Descripción:</strong> {description}</p>
        <button className="modal__info__content__button" onClick={onClose}><IoMdClose className='modal__info__content__button__close'/></button>
      </div>
    </div>
  );
};

export default InfoModal;