class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    
    if (event.type === 'click') {
      this.props.handleSubmit(this.state.searchValue);
      this.setState({searchValue: ''});
    } else { 
      this.setState({searchValue: event.target.value}, function() {
        this.props.handleSubmit(this.state.searchValue);
      });
    }
  }
  
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.searchValue} onChange={this.handleChange} />
        <button className="btn hidden-sm-down" onClick={this.handleChange}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

