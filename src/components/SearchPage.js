import React, {PropTypes} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import _ from 'lodash';
import $ from 'jquery';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataLoading: false,
      noData: false,
      data: []
    }
  }

  componentDidMount() {
    const query = this.props.location.query;
    if (query) {
      console.log(query);
      this.setState({ searchInput: query.titles });
      this.fetchImages(query);
    }

  }

  componentWillReceiveProps(nextProps) {
    const query = nextProps.location.query;
    console.log(query);
    if (query) {
      this.setState({ searchInput: query.titles });
      this.fetchImages(query);
    }
  }

  renderNoData = () => {
    return <p>No data</p>;
  }

  //MediaWiki API call for images & update list array
  fetchImages = (query) => {

    //this.props.history.pushState(null, "search?=" + input);
    this.setState({ dataLoading: true });
    const apiUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&maxlag=3&origin=*&prop=imageinfo&titles=' + query.titles + '&generator=images&iiprop=timestamp%7Cuser%7Curl&gimlimit=6'

    $.ajax({
      dataType: "json",
      url: apiUrl,
      success: data => {

        if (data.query) {
          const images = data.query.pages;
          const imgObjects = _.map(images, value => {
            return {
              title: value.title.slice(5, value.title.length - 4),
              imageUrl: value.imageinfo[0].url
            }
          });
          this.setState({ data: imgObjects, dataLoading: false, noData: false });
        } else {
          this.setState({ noData: true, dataLoading: false });
        }

      }
    });
  };

  render() {
    const {dataLoading, noData, data} = this.state;
    const searchInput = this.props.location.query.titles;
    const loading = <p>Loading...</p>;

    return (
      <div>
        <SearchBar value={searchInput}/>
        <h1>Results for: {searchInput}</h1>
        {noData ? this.renderNoData() : <SearchResults data={data}/>}
        {dataLoading ? loading : null}
      </div>
    );
  }
}

SearchPage.propTypes = {};

export default SearchPage;