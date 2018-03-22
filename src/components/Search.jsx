class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }
  
  handleChange(event) {
    this.setState({searchValue: event.target.value})
  }
  
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.handleChange.bind(this)} />
        <button className="btn hidden-sm-down" onClick={() => this.props.handleSubmit({key: window.YOUTUBE_API_KEY, query: this.state.searchValue, max: 5})}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

// onClick={() => handleSubmit(value)}
// ref={el => this.setState({searchValue: el.value})}
// onClick={() => }