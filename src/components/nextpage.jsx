import React, { useState, useEffect} from "react";

function Apconfig() {
  const [photos, setPhotos] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/photos"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Oh no! Fetch failed");
        }
        const data = await res.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="App">
      <h1>Photos</h1>
      <h2>...are here</h2>

      {photos.map(photo => (
        <div key={photo.id}>{photo.title}</div>
      ))}
    </div>
  );
}

export default Apconfig;
