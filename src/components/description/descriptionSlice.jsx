import { createSlice } from "@reduxjs/toolkit";

//cargar datos desde localstorage
const loadCommentsFromLocalStorage = () => {
  const comments = localStorage.getItem('comments');
  return comments ? JSON.parse(comments) : {};
};

//guardar datos
const saveCommentsToLocalStorage = (comments) => {
  localStorage.setItem('comments', JSON.stringify(comments));
};

//cargar datos
const initialState = {
  comments: loadCommentsFromLocalStorage(),
  modal: {
    visible: false,
    imageId: null,
  },
};

const CommentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComment(state, action) {
      const { imageId, comment } = action.payload;
      state.comments[imageId] = comment;
      saveCommentsToLocalStorage(state.comments);
    },
    loadComments(state, action) {
      return { ...state, comments: { ...state.comments, ...action.payload }};
    },
    removeComment(state, action) {
      const { imageId } = action.payload;
      delete state.comments[imageId];
      saveCommentsToLocalStorage(state.comments);
    },
    openModal(state, action) {
      console.log("ahh");
      state.modal = {
        visible: true,
        imageId: action.payload,
      };
    },
    closeModal(state) {
      state.modal = {
        visible: false,
        imageId: null,
      };
    },
  },
});

export const {
  setComment,
  loadComments,
  removeComment,
  openModal,
  closeModal,
} = CommentSlice.actions;
export default CommentSlice.reducer;