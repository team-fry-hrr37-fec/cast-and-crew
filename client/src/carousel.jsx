import React from 'react';
import styled from 'styled-components';
import CarouselItem from './carouselItem.jsx';

// === STYLES === //

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  max-width: 950px;
  padding: 40px;
`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 254px;
`;

const LeftButton = styled.button`
  border: none;
  background-color: #fff;
  position: relative;
  width: 43px;
  height: 254px;
  margin-right: 8px;
  ::before {
    color: #4c4c4c;
    content: '◀'
  }
`;

const RightButton = styled.button`
  border: none;
  background-color: #fff;
  position: relative;
  outline: 0;
  width: 43px;
  height: 254px;
  margin-left: 8px;
  ::before {
    color: #4c4c4c;
    content: '▶'
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 254px;
  overflow: hidden;
  margin: 0 0 20px 20 px;
  align-content: center;
`;

const ItemWrapper = styled.div`
  flex: 0 1 100%;
  flex-basis: 20%;
  margin-right: 8px;
  width: 126px;
  order: ${(props) => props.order};
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
  margin-top: 10px;
  float: right;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  color: #4AA7f6;
  cursor: pointer;
  :hover {
    cursor: pointer;
  }
  font-weight: 700;
  font-size: 14px;
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
    const numItems = this.props.castInfo.length || 1;
    if (itemIndex - position < 0) { //
      return numItems - Math.abs(itemIndex - position);
    }
    return itemIndex - position;
  }

  nextSlide() {
    const { position } = this.state;
    const numItems = this.props.castInfo.length || 1;
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1
    });
  }

  prevSlide() {
    const { position } = this.state;
    const numItems = this.props.castInfo.length || 1;
    this.setState({
      position: position === 0 ? numItems - 1 : position - 1
    });
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Title>Cast + Crew</Title>
          <CarouselWrapper>
            <LeftButton onClick={()=> { this.prevSlide(); } } />
            <CarouselContainer>
              {this.props.castInfo.map((actor, index) => (
                <ItemWrapper key={actor.id} order={this.getOrder(index)}>
                  <CarouselItem actor={actor} />
                </ItemWrapper>
              )
              )}
            </CarouselContainer>
            <RightButton onClick={()=> { this.nextSlide(); } } />
          </CarouselWrapper>
          <div>
            <FullCast onClick={() => { console.log('map out a list of cast and crew in popover'); }}>see full cast + crew for 2001: a space odyssey</FullCast>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Carousel;
