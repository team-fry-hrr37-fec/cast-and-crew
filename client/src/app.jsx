import React from 'react';
import styled from 'styled-components';

// === STYLES === //

const Wrapper = styled.section`
  padding: 4em;
  background: #eaeaea;
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: 1,
      cast: []
    };
  }

  // === GET CAST MEMBERS BASED ON MOVIE ID === //

  getCast(movieId) {
    fetch(`/actors?movieId=${movieId}`)
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
  }

  // === RENDER LIST OF CAST MEMBERS (for testing purposes) === //

  render() {
    return (
      <Wrapper>
        <div>
          {this.state.cast.map(actor => (
            <div key={actor.id}>
              <img src={actor.photo}></img>
              <Title>{actor.name}</Title>
              <Role>{actor.role}</Role>
            </div>
          )
          )}
        </div>
      </Wrapper>
    );
  }
}

export default App;