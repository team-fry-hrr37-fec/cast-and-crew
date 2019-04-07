import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  width: 126px;
  padding-right: 8px;
  `;

// flex: 0 (flex-grow off) 1 (flex shrink on )
const CarouselSlot = styled.div`
  overflow: hidden;
  background-color: #FFF;
  width: 126px;
  height: 254px;
  flex: 0 1 100%;
  flex-basis: 20%;
  margin-right: 20px;
  order: ${(props) => props.order};
`;

const ActorPhoto = styled.img`
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

const Name = styled.div`
  font-family: Alternate Gothic No1 D;
  font-size: 20px;
  color: #4c4c4c;
  text-transform: uppercase;
  padding: 4px 8px 0px 8px;
`;

const Role = styled.div`
  color: #929292;
  display: block;
  font-family: "Times New Roman",serif;
  font-style: italic;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
  padding: 0px 8px 8px 8px;
}
`;
class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ItemWrapper>
        <CarouselSlot>
          <ActorPhoto src={this.props.actor.photo}></ActorPhoto>
          <Name>{this.props.actor.name}</Name>
          <Role>{this.props.actor.role}</Role>
        </CarouselSlot>
      </ItemWrapper>
    );
  }
}

export default CarouselItem;

