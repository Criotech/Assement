import React from 'react';

const PersonComponent = ({ person }) => {
  return (
    <div>
      <p><b>Name:</b> {person?.name}</p>
      <p><b>gender:</b> {person?.gender}</p>
      <p><b>Height:</b> {person?.height}</p>
      <p><b>Mass:</b> {person?.mass}</p>
      <p><b>eye Color:</b> {person?.eye_color}</p>
    </div>
  );
};

export default PersonComponent;
