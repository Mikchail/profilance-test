import {useEffect} from 'react';
import ReactDOM from 'react-dom';

const body = document.querySelector('body');
const Modal = ({children}) => {
  const el = document.createElement('div');

  useEffect(() => {
    body.appendChild(el);
    return () => body.removeChild(el);
  },[el]);

  return ReactDOM.createPortal(
    children,
    el
  )
};

export default Modal;
