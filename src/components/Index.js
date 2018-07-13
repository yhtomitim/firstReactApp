import React from 'react';

const Index = (props) => {
  return (
    <div className="App-intro">
      <p>{props.welcome} {props.name}</p>
    </div>
  );
};

export default Index;