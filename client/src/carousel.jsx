import React from 'react';
import styled from 'styled-components';

import CarouselItem from './carouselItem.jsx';

// === STYLES === //

const Wrapper = styled.div`
  width: 1280px;
  overflow: hidden;
`;

const CarouselContainer = styled.div`
  display: flex;
  margin: 0 0 20px 20 px;
  align-content: center;
`;

const Title = styled.h3`
  display: inline-block;
  font-family: Alternate Gothic No1 D;
  font-size: 38px;
  font-weight: 400;
  line-height: 35px;
  color: #4c4c4c;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  margin: 0 0 15px;
  padding: 0 30px;
  border-bottom: 10px solid #4c4c4c;
`;

const FullCast = styled.a`
  float: right;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  color: #4AA7f6;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  :hover {
    cursor: pointer;
  }
`;


// ===  COMPONENT DEFINITION ===  //

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    };
  }

  getOrder(itemIndex) {
    const { position } = this.state;
    const numItems = this.props.length || 1;
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }
    return itemIndex - position;
  }

  nextSlide() {
    const { position } = this.state;
    const numItems = this.props.length || 1;
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1
    });
  }

  prevSlide() {
    const { position } = this.state;
    const { actorInfo } = this.props;
    const numItems = actorInfo.length || 1;
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1
    });
  }

  render() {
    return (
      <div>
        <Title>Cast + Crew</Title>
        <Wrapper>
          <CarouselContainer>
            {this.props.castInfo.map((actor, index) => (
              <CarouselItem key={actor.id} actor={actor} order={this.getOrder(index)}>

              </CarouselItem>
            )
            )}
          </CarouselContainer>
          <button onClick={()=> { this.nextSlide(); } }>Next</button>
          <FullCast>see full cast + crew for 2001: a space odyssey</FullCast>
        </Wrapper>
      </div>
    );
  }
}

export default Carousel;
