import React from 'react';
import { connect } from 'react-redux';

import SignIn from '../../components/signin/signin.component';
import Watchlist from '../watchlist/watchlist.component';

const HomePage = ({ setMenu, currentUser }) => {
  console.log('currentUser: ', currentUser);
  return (
    <div>{currentUser ? <Watchlist setMenu={setMenu} /> : <SignIn />}</div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HomePage);
