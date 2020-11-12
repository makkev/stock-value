import React, { useEffect } from 'react';

function ROEPage({ setMenu }) {
  useEffect(() => {
    setMenu(2);
  }, []);

  return <div>ROE PAGE</div>;
}

export default ROEPage;
