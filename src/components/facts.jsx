import Hamster from "animation/hamster";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

function Facts() {
  const [animalData, setAnimalData] = useState([]);
  const apiKey = "ywWI6oVY/DoNhcUKRCFkGg==MH51uIDfLJjKmjF4";

  const animalsArray = [
    "Tiger", "Elephant", "Dog", "Cow", "Cat", "Lion", "Buffalo", "Deer", 
    "Fox", "Wolf", "Bear", "Panda", "Koala", "Kangaroo", "Monkey", 
    "Gorilla", "Chimpanzee", "Sloth", "Penguin", "Ostrich", "Flamingo", 
    "Peacock", "Parrot", "Eagle", "Owl", "Hawk", "Vulture", "Crow", 
    "Raven", "Swan", "Duck", "Pelican", "Crane", "Pigeon", "Dove", 
    "Sparrow", "Bluebird"
  ];

  
  const getRandomAnimals = () => {
    return animalsArray.sort(() => 0.5 - Math.random()).slice(0, 4);
  };

  
  const fetchAnimalData = async (animal) => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animal}`, {
        method: "GET",
        headers: { "X-Api-Key": apiKey },
      });
      const data = await response.json();
      return data[0]; 
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  
  const updateAnimalData = async () => {
    const randomAnimals = getRandomAnimals();
    const dataPromises = randomAnimals.map(fetchAnimalData);
    const data = await Promise.all(dataPromises);
    setAnimalData(data.filter(Boolean)); 
  };

  useEffect(() => {
    updateAnimalData(); 
    const interval = setInterval(updateAnimalData, 10000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="px-4 ">
      <p className="text-center font-semibold text-2xl">Animal Facts:</p>
      {animalData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
          {animalData.map((animal, index) => (
         <a href="https://api-ninjas.com/api/animals" target="blank">  <Card key={index} className="w-full max-w-[300px] md:h-[250px] mx-auto p-10 border-2 border-black rounded-xl shadow-md">
             <Card.Body>
                <Card.Title className="text-center text-xl font-bold">
                  {animal.name}
                </Card.Title>
                <Card.Text className="text-sm mt-3">
                  <p><strong>Weight:</strong> {animal.characteristics?.weight || "N/A"}</p>
                  <p><strong>Diet:</strong> {animal.characteristics?.diet || "N/A"}</p>
                  <p><strong>Habitat:</strong> {animal.characteristics?.habitat || "N/A"}</p>
                  <p><strong>Lifespan:</strong> {animal.characteristics?.lifespan || "N/A"}</p>
                </Card.Text>
              </Card.Body> 
            </Card></a>
          ))}
        </div>
      ) : (
        <p className="text-center mt-5">Loading data... <Hamster /></p>
      )}
    </div>
  );
}

export default Facts;
