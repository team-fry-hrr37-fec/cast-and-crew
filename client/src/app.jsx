import React from 'react';

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
      <div>
        {this.state.cast.map(actor => (
          <div key={actor.id}>movie: {actor.title}, name: {actor.name}, role: {actor.role}, photo: {actor.photo} </div>
        )
        )}
      </div>
    );
  }
}

export default App;