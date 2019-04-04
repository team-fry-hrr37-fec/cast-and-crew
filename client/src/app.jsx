import React from 'react';
import styled from 'styled-components';

// === STYLES === //

const Wrapper = styled.section`
  padding: 4em;
  background: #eaeaea;
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
              <div className="actor-name">{actor.name}</div>
              <div className="actor-role">{actor.role}</div>
            </div>
          )
          )}
        </div>
      </Wrapper>
    );
  }
}

export default App;