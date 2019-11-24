import React, { useState, useEffect } from "react";

export const Details = ({ id }) => {
  const [details, setDetails] = useState(null);

  useEffect(
    function fetchDetails() {
      setDetails(null);
      fetch(`https://swapi.co/api/people/${id}/`)
        .then(res => res.json())
        .then(details => setDetails(details));
    },
    [id]
  );

  return details ? (
    <div>
      <div>height: {details.height}</div>
      <div>mass: {details.mass}</div>
      <div>hair color: {details.hair_color}</div>
      <div>skin color: {details.skin_color}</div>
      <div>eye color: {details.eye_color}</div>
    </div>
  ) : (
      <div>loading...</div>
    );
}
