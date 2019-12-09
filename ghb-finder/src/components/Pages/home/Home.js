import React, { Fragment } from 'react';
import Search from '../../search/Search';
import Users from '../../allUsers/users/Users';

export default function Home() {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
}
