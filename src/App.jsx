import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.search.photos);
  const status = useSelector(state => state.search.status);
  const error = useSelector(state => state.search.error);

  useEffect(() => {
    dispatch(fetchPhotos(''));
  }, [dispatch]);

  return (
    a
  )
}

export default App
