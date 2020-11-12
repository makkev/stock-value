import React, { useEffect } from 'react';

function DCFPage({ setMenu }) {
  useEffect(() => {
    setMenu(1);
  }, []);

  return <div>DCF Page</div>;
}

export default DCFPage;
