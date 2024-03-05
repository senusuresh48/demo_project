import React, { useState, useEffect, useRef } from "react";

function Apconfig() {
  const [photos, setPhotos] = useState([]);
  const id=useRef(0)
  const url = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          return Error("Oh no");
        } 
        return res.json();
      })
      .then(data => setPhotos(data));
  });

  return (
    <div className="App">
      <h1>photos</h1>
      <h2>...are here</h2>

      {photos.map(photo => (
        <div key={id.current++}>{photo.title}</div>
      ))}
    </div>
  )
}

export default Apconfig