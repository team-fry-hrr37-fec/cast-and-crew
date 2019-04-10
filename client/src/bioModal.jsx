import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalBG = styled.div`
  background: rgba(0,0,0,0.3)
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.DOMcreatePortal(
      <div>
        <ModalBG />
      </div>
    );
  }
}

export default Modal;

