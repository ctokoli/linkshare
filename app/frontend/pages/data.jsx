import React from 'react';

const ChildComponent = ({ links }) => {
  return (
    <div>
      <h2>Child Component</h2>
      {Object.entries(links).map(([key, value]) => (
        value ? (
          <p key={key}>
            <strong>{key}:</strong> {value}
          </p>
        ) : null
      ))}
    </div>
  );
};

export default ChildComponent;