import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const CarouselContainer = styled.div`
  display: flex;
  margin: 0 0 20px 20 px;
`;

const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
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


const Carousel = (props) => {
  return (
    <div>
      <Wrapper>
        <CarouselContainer>
          {props.castInfo.map(actor => (
            <CarouselSlot key={actor.id}>
              <img src={actor.photo}></img>
              <Title>{actor.name}</Title>
              <Role>{actor.role}</Role>
            </CarouselSlot>
          )
          )}
        </CarouselContainer>
      </Wrapper>
    </div>
  );
};

export default Carousel;