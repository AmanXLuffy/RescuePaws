// import React, { useState, useEffect } from "react";
// import Hamster from "../animation/hamster";

// const RescuersList = () => {
//   const [rescuers, setRescuers] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // fetch("http://localhost:5000/api/rescuers")
//     fetch("https://rescue-paws.onrender.com/api/rescuers")
//       .then((response) => response.json())
//       .then((data) => {
//         setRescuers(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log("error fetching data: ", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading)
//     return (
//       <p className="text-3xl font-semibold">
//         loading rescuers!!!Please wait.... <Hamster />
//       </p>
//     );

//   return (
//     <div>
//       {Object.keys(rescuers).length === 0 ? (
//         <p className="text-2xl font-semibold">No Rescuers Found.</p>
//       ) : (
//         // Group every 2 areas
//         Array.from(
//           { length: Math.ceil(Object.entries(rescuers).length / 2) },
//           (_, rowIndex) => {
//             const entries = Object.entries(rescuers).slice(
//               rowIndex * 2,
//               rowIndex * 2 + 2
//             );
//             return (
//               <div key={rowIndex} className="flex max-md:flex-wrap gap-8 mb-8">
//                 {entries.map(([area, rescuersList]) => (
//                   <div
//                     key={area}
//                     className="border-b-2 border-black p-4 w-full sm:w-1/2 md:w-1/2"
//                   >
//                     <p className="text-2xl capitalize text-yellow-600 pb-4">
//                       {area}
//                     </p>
//                     <table className="border-2 border-black w-full">
//                       <thead>
//                         <tr className="text-orange-500 border-2 border-black">
//                           <th className="border-2 border-black px-4">Name</th>
//                           <th className="border-2 border-black">Email</th>
//                           <th className="border-2 border-black">Phone</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {rescuersList.map((rescuer, index) => (
//                           <tr
//                             key={index}
//                             className={`${
//                               index % 2 === 0 ? "bg-gray-100" : "bg-white"
//                             } text-gray-800 border-2 border-black`}
//                           >
//                             <td className="p-2 border-2 border-black">
//                               {rescuer.name}
//                             </td>
//                             <td className="p-2 border-2 border-black">
//                               {rescuer.email}
//                             </td>
//                             {/* <td className='p-2 border-2 border-black'>{rescuer.phone}</td> */}

//                             <td className="p-2 border-2 border-black">
//                               {rescuer.phone}
//                             </td>

//                             {rescuer.phone && (
//                               <a
//                                 href={`https://wa.me/${rescuer.phone}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-green-600 underline ml-2"
//                               >
//                                 Chat
//                               </a>
//                             )}
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ))}
//               </div>
//             );
//           }
//         )
//       )}
//     </div>
//   );
// };

// export default RescuersList;




import React, { useState, useEffect } from "react";
import Hamster from "../animation/hamster";

const RescuersList = () => {
  const [rescuers, setRescuers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rescue-paws.onrender.com/api/rescuers")
      .then((response) => response.json())
      .then((data) => {
        setRescuers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="text-2xl font-semibold flex items-center gap-2">
        loading rescuers!!! Please wait... <Hamster />
      </p>
    );

  return (
    <div>
      {Object.keys(rescuers).length === 0 ? (
        <p className="text-xl font-semibold">No Rescuers Found.</p>
      ) : (
        Array.from(
          { length: Math.ceil(Object.entries(rescuers).length / 2) },
          (_, rowIndex) => {
            const entries = Object.entries(rescuers).slice(
              rowIndex * 2,
              rowIndex * 2 + 2
            );
            return (
              <div
                key={rowIndex}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
              >
                {entries.map(([area, rescuersList]) => (
                  <div
                    key={area}
                    className="border-b-2 border-black p-3 sm:p-4"
                  >
                    <p className="text-xl sm:text-2xl capitalize text-yellow-600 pb-3">
                      {area}
                    </p>
                    <div className="overflow-x-auto">
                      <table className="border-2 border-black w-full min-w-[300px]">
                        <thead>
                          <tr className="text-orange-500 border-2 border-black text-sm sm:text-base">
                            <th className="border-2 border-black px-3 py-1">
                              Name
                            </th>
                            <th className="border-2 border-black px-3 py-1">
                              Email
                            </th>
                            <th className="border-2 border-black px-3 py-1">
                              Phone
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {rescuersList.map((rescuer, index) => (
                            <tr
                              key={index}
                              className={`${
                                index % 2 === 0 ? "bg-gray-100" : "bg-white"
                              } text-gray-800 border-2 border-black text-sm sm:text-base`}
                            >
                              <td className="p-2 border-2 border-black">
                                {rescuer.name}
                              </td>
                              <td className="p-2 border-2 border-black break-words max-w-xs">
                                {rescuer.email}
                              </td>
                              <td className="p-2 border-2 border-black whitespace-nowrap flex items-center gap-2">
                                <span>{rescuer.phone}</span>
                                {rescuer.phone && (
                                  <a
                                    href={`https://wa.me/${rescuer.phone}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 underline"
                                  >
                                    Chat
                                  </a>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            );
          }
        )
      )}
    </div>
  );
};

export default RescuersList;
