import React, { useEffect } from 'react';

function ROEPage({ setMenu }) {
  useEffect(() => {
    setMenu(3);
  }, []);

  return <div>ROE PAGE</div>;
}

export default ROEPage;
