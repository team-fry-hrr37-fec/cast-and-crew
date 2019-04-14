import React from 'react';
import CarouselItem from './carouselItem.jsx';
import Popup from 'reactjs-popup';

// === STYLES === //

const Wrapper = window.styled.div`
  overflow: hidden;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  max-width: 950px;
  padding: 40px;
`;

const CarouselWrapper = window.styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 254px;
`;

const LeftButton = window.styled.button`
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

const RightButton = window.styled.button`
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

const CarouselContainer = window.styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 254px;
  overflow: hidden;
  margin: 0 0 20px 20 px;
  align-content: center;
`;

const ItemWrapper = window.styled.div`
  flex: 0 1 100%;
  flex-basis: 20%;
  margin-right: 8px;
  width: 126px;
  order: ${(props) => props.order};
`;


const Title = window.styled.h3`
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

const FullCast = window.styled.a`
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

const FullCastModal = window.styled.div`
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

// ===  COMPONENT DEFINITION ===  //

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      open: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openModal () {
    this.setState({ open: true });
  }
  closeModal () {
    this.setState({ open: false });
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
            <FullCast onClick={this.openModal}>see full cast + crew for {this.props.title}</FullCast>
            <Popup open={this.state.open} closeOnDocumentClick onClose={this.closeModal}>
              <FullCastModal className="modal">
                <a className="close" onClick={this.closeModal}>&times;</a>
                <div className="header" >CAST:</div>
                <div className="content" >
                  {this.props.castInfo.map((actor) => (<div key={actor.id}>{actor.role} - {actor.name}</div>))}
                </div>

              </FullCastModal>
            </Popup>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Carousel;
