import React from 'react';
import Modal from '../Modal';

import RotateLoader from 'react-spinners/RotateLoader';
import { css } from '@emotion/core';

const whichPosition = () => {
  return css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
};

const Spinner = () => (
  <>
    <Modal>
      <RotateLoader css={whichPosition()} size={20} color={'olive'} />
    </Modal>
  </>
);

export default Spinner;
