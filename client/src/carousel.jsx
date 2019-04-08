import React from 'react';
import styled from 'styled-components';
import CarouselItem from './carouselItem.jsx';

// === STYLES === //

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  max-width: 850px;
`;

const CarouselContainer = styled.div`
  height: 254px;
  overflow: hidden;
  display: flex;
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

const Left = styled.button`
  ::before: content {
    img;
  }
  box-sizing: border-box;
  border: 5px solid #ebebeb;
  background-color: #fff;
  position: absolute;
  outline: 0;
  width: 43px;
  height: 100%;
  top: 0;
  bottom: 0
`;

const FullCast = styled.a`
  margin-top: 10px;
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
    const numItems = this.props.castInfo.length || 1;
    if (itemIndex - position < 0) { //
      return numItems - Math.abs(itemIndex - position);
    }
    console.log(`inside getOrder position=${position}`);
    return itemIndex - position;
  }

  nextSlide() {
    const { position } = this.state;
    const numItems = this.props.castInfo.length || 1;
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1
    });
    console.log(`inside nextSlide func`);
  }

  prevSlide() {
    const { position } = this.state;
    const numItems = this.props.castInfo.length || 1;
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1
    });
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Title>Cast + Crew</Title>
          <CarouselContainer>
            {/* <Left /> */}
            {this.props.castInfo.map((actor, index) => (
              <ItemWrapper key={actor.id} order={this.getOrder(index)}>
                <CarouselItem actor={actor} />
              </ItemWrapper>
            )
            )}
          </CarouselContainer>
          <div>
            <button onClick={()=> { this.nextSlide(); } }>Next</button>
            <FullCast onClick={() => { console.log('map out a list of the names and roles of the cast members'); }}>see full cast + crew for 2001: a space odyssey</FullCast>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Carousel;
