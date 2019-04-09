import React from 'react';
import styled from 'styled-components';


const PhotoWrapper = styled.div`
  position: relative;
  display: block;
  height: 189px;
  width: 126px;
  overflow: hidden;
`;

const ActorPhotoStyles = styled.img`
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

class ActorPhoto extends React.Component {
  constructor(props) {
    super(props);

  }

  onClick(bio, filmography) {
    // ADD ONCLICK METHOD THAT CREATES POP-UP WITH BIO AND FILMOGRAPHY
    // filmography is an array of objects {title: string (needs to be uppercase), cast: [string, string, etc.]}
    console.log(`Bio:\n${bio}\n\nFilmography:\n${JSON.stringify(filmography)}`);
  }

  render() {
    return (
      <PhotoWrapper>
        <ActorPhotoStyles src={this.props.actor.photo} onClick={() => this.onClick(this.props.actor.bio, this.props.actor.filmography) }/>
      </PhotoWrapper>
    );
  }
}

export default ActorPhoto;