import React, { PropTypes } from 'react';

// props.children is where router renders child routes
const MainLayout = ({ children }) => {

  return (
    <div>
      {children}
    </div>
  );
};

MainLayout.propTypes = {

};

export default MainLayout;