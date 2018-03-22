class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  handleChange(event) {
    this.setState({searchValue: event.target.value})
  }
  
  handleSearch() {
    this.props.handleSubmit(this.state.searchValue);
    this.setState({searchValue: ''});
  }
  
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.searchValue} onChange={this.handleChange} />
        <button className="btn hidden-sm-down" onClick={this.handleSearch}>
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
