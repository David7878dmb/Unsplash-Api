import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, setComment } from '../components/description/descriptionSlice';
import { IoMdClose } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";



const CommentModal = () => {
    const dispatch = useDispatch();
    const modalState = useSelector((state) => state.comments.modal);
    const currentComment = useSelector((state) => state.comments.comments[modalState.imageId] || "");
    const [comment, setCommentText] = useState(currentComment);

    useEffect(() => {
        setCommentText(currentComment);
    }, [currentComment]);

    const handleClose = () => {
        dispatch(closeModal());
    };

    const handleSave = () => {
        dispatch(setComment({ imageId: modalState.imageId, comment }));
        handleClose();
    };

    if (!modalState.visible) return null;

    return (
        <div className="comment__modal">
            <div className="comment__modal__content">
                <h3 className="comment__modal__content__tittle">Description on Photo</h3>
                <textarea
                    className="comment__modal__content__box"
                    value={comment}
                    onChange={(e) => setCommentText(e.target.value)}
                    rows="4"
                    cols="50"
                />
                <div className="comment__modal__content__buttons">
                    <button className="comment__modal__content__buttons__save" onClick={handleSave}><IoMdCheckmark className='comment__modal__content__buttons__save'/></button>
                    <button className="comment__modal__content__buttons__close" onClick={handleClose}><IoMdClose className='comment__modal__content__buttons__close'/></button>
                </div>
            </div>
        </div>
    );
};

export default CommentModal;