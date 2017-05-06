import React, { Component, PropTypes } from 'react';

class GItem extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
        <p></p>
    );
  }
}

GItem.propTypes = {
  modified: PropTypes.datetime,
  created: PropTypes.datetime.isRequired,
  counter: PropTypes.number.isRequired,
};

GItem.defaultProps = {
  modified: null,
  created: new Date(),
  counter: 3,
};

export default GItem;