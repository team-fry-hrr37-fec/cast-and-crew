import React from 'react';
import styled from 'styled-components';

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

// flex: 0 (flex-grow off) 1 (flex shrink on )
const CarouselSlot = styled.div`
  flex: 0 1 100%;
  flex-basis: 80%;
  margin-right: 20px;
  order: ${(props) => props.order};
`;

const Title = styled.div`
  font-family: Alternate Gothic No1 D;
  font-size: 20px;
  color: #4c4c4c;
`;

const Role = styled.div`
  font-family: "Times New Roman";
  font-style: italic;
  color: #4c4c4c;
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
  }

  // this still needs work //

  nextSlide() {
    const { position } = this.state;
    const numItems = this.props.length || 1;
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
              <CarouselSlot key={actor.id} order={this.getOrder(index)}>
                <img src={actor.photo} height={'189px'}></img>
                <Title>{actor.name}</Title>
                <Role>{actor.role}</Role>
              </CarouselSlot>
            )
            )}
          </CarouselContainer>
        </Wrapper>
        <Title>see full cast + crew for 2001: a space odyssey</Title>
        <button onClick={this.nextSlide.bind(this)}>Next</button>
      </div>
    );
  }
}


export default Carousel;