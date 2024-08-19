import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, setComment } from '../components/description/descriptionSlice';

const CommentModal = () => {
    const dispatch = useDispatch();
    const modalState = useSelector((state) => state.comments.modal);
    const currentComment = useSelector((state) => state.comments.comments[modalState.imageId] || "");
    const [comment, setCommentText] = useState(currentComment);
    //const [comment, setCommentText] = useState("");

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
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Comment on Photo</h3>
                <textarea
                    value={comment}
                    onChange={(e) => setCommentText(e.target.value)}
                    rows="4"
                    cols="50"
                />
                <div className="modal-buttons">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CommentModal;