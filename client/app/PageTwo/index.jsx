import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <Fragment>
    <div>Welcome to Page Two</div>
    <Link to="/">
      <button type="button">Back to Home Page</button>
    </Link>
  </Fragment>
);
