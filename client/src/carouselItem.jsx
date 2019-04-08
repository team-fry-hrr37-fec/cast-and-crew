import React from 'react';
import styled from 'styled-components';

import ActorInfo from './actorInfo.jsx';
import ActorPhoto from './actorPhoto.jsx';

// refactor into static component? maybe hold the onclick method of the children

// do I need this?
const ItemWrapper = styled.div`

  `;

// flex: 0 (flex-grow off) 1 (flex shrink on )
const CarouselSlot = styled.div`
  overflow: hidden;
  background-color: #000;
  width: 126px;
  height: 254px;
  flex: 1 0 100%;
  flex-basis: 20%;
  margin-right: 8px;
  order: ${(props) => props.order};
`;

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ItemWrapper>
        <CarouselSlot>
          <ActorPhoto actor={this.props.actor}/>
          <ActorInfo actor={this.props.actor}/>
        </CarouselSlot>
      </ItemWrapper>
    );
  }
}

export default CarouselItem;

