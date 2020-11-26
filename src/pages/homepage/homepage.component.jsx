import React from 'react';
import Watchlist from '../watchlist/watchlist.component';

const HomePage = ({ setMenu }) => {
  return (
    <div>
      <Watchlist setMenu={setMenu} />
    </div>
  );
};

export default HomePage;
