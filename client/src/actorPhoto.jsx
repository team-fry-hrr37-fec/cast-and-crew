import React from 'react';
// import styled from 'styled-components';
import Popup from 'reactjs-popup';


const PhotoWrapper = window.styled.div`
  position: relative;
  display: block;
  height: 189px;
  width: 126px;
  overflow: hidden;
`;

const ActorPhotoStyles = window.styled.img`
  position: relative;
  display: block;
  height: 189px;
  width: 126px;
  overflow: hidden;
  opacity: 1;
  transition: opacity .25s, transform .25s ease;
  :hover {
    transform: scale(1.09);
    opacity: 0.7;
    cursor: pointer;
`;

const BioModal = window.styled.div`
font-size: 20px;
font-weight: 700;
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
color: #4c4c4c;
padding: 20px;
.header {
  width: 100%;
  border-bottom: 1px solid gray;
  font-size: 24px;
  text-align: center;
  padding: 5px;
}
.content {
  width: 100%;
  padding: 20px 20px;
}
.close {
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #cfcece;
}
`;

class ActorPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  openModal () {
    this.setState({ open: true });
  }
  closeModal () {
    this.setState({ open: false });
  }

  render() {
    return (
      <PhotoWrapper>
        <ActorPhotoStyles src={this.props.actor.photo} onClick={this.openModal}/>
        <Popup open={this.state.open} closeOnDocumentClick onClose={this.closeModal}>
          <BioModal classname="bio-modal">
            <a className="close" onClick={this.closeModal}>&times;</a>
            <div className="header">Bio:</div>
            <div className="content">{this.props.actor.bio}</div>
            <div className="header">Filmography:</div>
            <div className="content">
              {this.props.actor.filmography.map((film, index) => (<div key={index}>{film.title}</div>))}
            </div>
          </BioModal>
        </Popup>
      </PhotoWrapper>
    );
  }
}

export default ActorPhoto;