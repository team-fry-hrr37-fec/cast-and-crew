import React from 'react';
// import styled from 'styled-components';

import ActorInfo from './actorInfo.jsx';
import ActorPhoto from './actorPhoto.jsx';


const CarouselItemSlot = window.styled.div`
  overflow: hidden;
  background-color: #000;
  width: 126px;
  height: 254px;
`;

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CarouselItemSlot>
        <ActorPhoto actor={this.props.actor}/>
        <ActorInfo actor={this.props.actor}/>
      </CarouselItemSlot>
    );
  }
}

export default CarouselItem;

