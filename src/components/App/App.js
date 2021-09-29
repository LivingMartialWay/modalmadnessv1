import React from 'react';
import youtube from '../../apis/youtube';
import VideoDetail from '../VideoDetail';
import Modal from '../Modal';
import './app.css';

const KEY = 'AIzaSyBjt4ct6iJ8oEUCJzE-7iYzw3YNuDCK6Ng';

class App extends React.Component {
  state = {
    selectedVideo: null,
    show: true,
    userAcceptedTC: false
   };

  componentDidMount() {
    this.onTermSubmit('mr sandman but with cat pop');
  }

  onTermSubmit =  async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        type: 'video',
        key: KEY
      }
    })
    this.setState({
      selectedVideo: response.data.items[0]
    });
  };

  toggleModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  acceptTC = e => {
    this.setState({
      userAcceptedTC: true,
      show: !this.state.show
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="App">
      <Modal onClose={this.toggleModal} show={this.state.show} acceptTC={this.acceptTC}>Lorem.</Modal>
        <div className="ui container">
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
