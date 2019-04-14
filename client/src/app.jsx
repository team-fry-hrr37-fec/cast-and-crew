import React from 'react';
// import styled from 'styled-components';
import Carousel from './carousel.jsx';

// === STYLES === //

const Wrapper = window.styled.section`
background: #eaeaea;
`;

// === DEFINE APP === //

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: 1,
      title: '2001: A SPACE ODYSSEY',
      cast: []
    };
  }


  // === GET CAST MEMBERS BASED ON MOVIE ID === //

  getCast(movieId) {
    fetch(`http://localhost:2002/actors?movieId=${movieId}`)
      .then(res => res.json())
      .then(castInfo =>
        this.setState({
          cast: castInfo
        })
      )
      .catch(err=> {
        console.log(`getCast error=${err}`);
      });
  }

  // === GET CAST MEMBERS BASED ON COMPONENT MOUNT === //

  componentDidMount() {
    this.getCast(this.state.movieId);
    // console.log(this.state);
  }

  // === RENDER LIST OF CAST MEMBERS (for testing purposes) === //

  render() {
    return (
      <Wrapper>
        <Carousel castInfo={this.state.cast} title={this.state.title}/>
      </Wrapper>
    );
  }
}

export default App;
