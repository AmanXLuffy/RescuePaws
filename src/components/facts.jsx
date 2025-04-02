// import React, { useEffect, useState } from "react";
// import Card from "react-bootstrap/Card";

// function Facts() {
//   const [animalData, setAnimalData] = useState([]);
//   const apiKey = "ywWI6oVY/DoNhcUKRCFkGg==MH51uIDfLJjKmjF4";

//   const animalsArray = [
//     "Tiger", "Elephant", "Dog", "Cow", "Cat", "Lion", "Buffalo", "Deer", 
//     "Fox", "Wolf", "Bear", "Panda", "Koala", "Kangaroo", "Monkey", 
//     "Gorilla", "Chimpanzee", "Sloth", "Penguin", "Ostrich", "Flamingo", 
//     "Peacock", "Parrot", "Eagle", "Owl", "Hawk", "Vulture", "Crow", 
//     "Raven", "Swan", "Duck", "Pelican", "Crane", "Pigeon", "Dove", 
//     "Sparrow", "Bluebird"
//   ];

//   // Function to get three random animals
//   const getRandomAnimals = () => {
//     const shuffled = animalsArray.sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, 4); // Get 4 random animals
//   };

//   // Function to fetch animal data
//   const fetchAnimalData = async (animal) => {
//     try {
//       const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animal}`, {
//         method: "GET",
//         headers: { "X-Api-Key": apiKey },
//       });
//       const data = await response.json();
//       return data[0]; // Assuming the API returns an array
//     } catch (error) {
//       console.error("Error:", error);
//       return null;
//     }
//   };

//   // Function to update animal data
//   const updateAnimalData = async () => {
//     const randomAnimals = getRandomAnimals();
//     const dataPromises = randomAnimals.map(animal => fetchAnimalData(animal));
//     const data = await Promise.all(dataPromises);
//     setAnimalData(data.filter(item => item)); // Filter out any null responses
//   };

//   useEffect(() => {
//     updateAnimalData(); // Initial fetch
//     const interval = setInterval(updateAnimalData, 5000); // Update every 5 seconds
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div>
//       <p className="flex justify-center font-semibold text-2xl">Animal Info</p>
//       {animalData.length > 0 ? (
//         <div className="flex justify-evenly my-5">
//           {animalData.map((animal, index) => (
//             <Card key={index} className="w-[350px] h-[250px] flex flex-col justify-around items-center rounded-xl border-2 border-black border-solid mx-10 ">
//               <Card.Body>
//                 <Card.Title className="text-center pb-10 text-2xl">
//                   <b>{animal.name}</b>
//                 </Card.Title>
                
//                 <Card.Text>
//                   <p><strong>Weight:</strong> {animal.characteristics.weight || "N/A"}</p>
//                   <p><strong>Diet:</strong> {animal.characteristics.diet || "N/A"}</p>
//                   <p><strong>Habitat:</strong> {animal.characteristics.habitat || "N/A"}</p>
//                   <p><strong>Lifespan:</strong> {animal.characteristics.lifespan || "N/A"}</p>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// }

// export default Facts;







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
      <p className="text-center font-semibold text-2xl">Animal Info:</p>
      {animalData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
          {animalData.map((animal, index) => (
         <a href="https://api-ninjas.com/api/animals">  <Card key={index} className="w-full max-w-[300px] md:h-[250px] mx-auto p-10 border-2 border-black rounded-xl shadow-md">
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
        <p className="text-center mt-5">Loading data...</p>
      )}
    </div>
  );
}

export default Facts;
