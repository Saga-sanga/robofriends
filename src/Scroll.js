import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'auto', border: '1px solid black', height: 'auto' }}>
      {props.children}
    </div>
  );
}

export default Scroll;
