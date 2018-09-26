import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <Fragment>
    <div>Hello World</div>
    <Link to="/pagetwo">
      <button type="button">To Page Two</button>
    </Link>
  </Fragment>
);
