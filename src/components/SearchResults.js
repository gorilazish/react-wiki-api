import React, {PropTypes} from 'react';
require('../app.css');

const SearchResults = ({data}) => {

  function renderResults() {
    return data.map((dataObj, index) =>
      <div key={index} className="col-xs-4">
        <div className="thumbnail">
          <img style={{ width: '300px', height: '200px'}} src={dataObj.imageUrl} alt=""/>
          <h4>{dataObj.title}</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {renderResults()}
      </div>
    </div>
  );

};

SearchResults.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    imageUrl: PropTypes.string,
    titles: PropTypes.number
  })).isRequired
};

export default SearchResults;