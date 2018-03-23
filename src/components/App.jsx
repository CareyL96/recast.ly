class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchValue;
    this.state = {
      currentVideo: null,
      videoCollection: [],
    };
    this.handleSubmit = _.debounce(this.handleSubmit.bind(this), 500);
    this.handleClick = this.handleClick.bind(this);
    this.setVideos = this.setVideos.bind(this);
    this.searchYouTube = _.debounce(window.searchYouTube, 500);
    
    this.options = {
      key: window.YOUTUBE_API_KEY, 
      query: '', 
      max: 5
    };
  }
  
  setVideos(data) {
    this.setState({
      currentVideo: data[0],
      videoCollection: data
    });
  }
  
  handleClick(event) {
    this.setState({currentVideo: event});
  }
  
  handleSubmit(value) {
    this.options.query = value;
    this.searchYouTube(this.options, this.setVideos);
  }
  
  componentDidMount() {
    this.searchYouTube(this.options, this.setVideos);
  }
  
  render() {
    
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search handleSubmit={this.handleSubmit}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo}/></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList handleClick={this.handleClick} videos={this.state.videoCollection} /></em></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


