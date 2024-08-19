import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: {},
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
      //state[imageId] = comment;
      state.comments[imageId] = comment;
    },
    loadComments(state, action) {
      //return { ...state, ...action.payload };
      return { ...state, comments: { ...state.comments, ...action.payload }};
    },
    removeComment(state, action) {
      const { imageId } = action.payload;
      //delete state[imageId];
      delete state.comments[imageId];
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