import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

export const Modal = ({ children }) => {
  const elRef = useRef(null);

  // elRef is a container for state. So it allows you to keep the reference,
  // which is convinient, because the createElement isn't cheap.
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);

    // Preventing memory leaks. Clean up.
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
