import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  width: 126px;
  height: 50px;
  padding: 8px;
  background-color: #FFF;
  overflow: hidden;
`;

const Name = styled.div`
  font-family: Alternate Gothic No1 D;
  font-size: 20px;
  color: #4c4c4c;
  text-transform: uppercase;
  :hover {
    cursor: pointer;
  }
`;

const Role = styled.div`
  color: #929292;
  display: block;
  font-family: "Times New Roman",serif;
  font-style: italic;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
`;

class ActorInfo extends React.Component {
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
      <InfoContainer>
        <Name onClick={() => this.onClick(this.props.actor.bio, this.props.actor.filmography) }>{this.props.actor.name}</Name>
        <Role>{this.props.actor.role}</Role>
      </InfoContainer>
    );
  }
}

export default ActorInfo;

