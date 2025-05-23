import React, { useState, useEffect } from "react";
import Hamster from "../animation/hamster";

const RescuersList = () => {
  const [rescuers, setRescuers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/rescuers")
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
      <p className="text-3xl font-semibold">
        loading rescuers!!!Please wait.... <Hamster />
      </p>
    );

  return (
    <div>
      {Object.keys(rescuers).length === 0 ? (
        <p className="text-2xl font-semibold">No Rescuers Found.</p>
      ) : (
        // Group every 2 areas
        Array.from(
          { length: Math.ceil(Object.entries(rescuers).length / 2) },
          (_, rowIndex) => {
            const entries = Object.entries(rescuers).slice(
              rowIndex * 2,
              rowIndex * 2 + 2
            );
            return (
              <div key={rowIndex} className="flex max-md:flex-wrap gap-8 mb-8">
                {entries.map(([area, rescuersList]) => (
                  <div
                    key={area}
                    className="border-b-2 border-black p-4 w-full sm:w-1/2 md:w-1/2"
                  >
                    <p className="text-2xl capitalize text-yellow-600 pb-4">
                      {area}
                    </p>
                    <table className="border-2 border-black w-full">
                      <thead>
                        <tr className="text-orange-500 border-2 border-black">
                          <th className="border-2 border-black px-4">Name</th>
                          <th className="border-2 border-black">Email</th>
                          <th className="border-2 border-black">Phone</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rescuersList.map((rescuer, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-gray-100" : "bg-white"
                            } text-gray-800 border-2 border-black`}
                          >
                            <td className="p-2 border-2 border-black">
                              {rescuer.name}
                            </td>
                            <td className="p-2 border-2 border-black">
                              {rescuer.email}
                            </td>
                            {/* <td className='p-2 border-2 border-black'>{rescuer.phone}</td> */}

                            <td className="p-2 border-2 border-black">
                              {rescuer.phone}
                            </td>

                            {rescuer.phone && (
                              <a
                                href={`https://wa.me/${rescuer.phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 underline ml-2"
                              >
                                Chat
                              </a>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
