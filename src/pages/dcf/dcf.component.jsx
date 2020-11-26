import React, { useEffect } from 'react';

function DCFPage({ setMenu }) {
  useEffect(() => {
    setMenu(2);
  }, []);

  return <div>DCF Page</div>;
}

export default DCFPage;
