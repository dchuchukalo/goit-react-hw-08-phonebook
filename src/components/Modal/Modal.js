import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  return createPortal(
    <div className={styles.Overlay}>
      <div>{children}</div>
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
