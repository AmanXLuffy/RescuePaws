import React, { useState, useEffect } from 'react'
// import { data } from 'react-router-dom';

const RescuersList = () => {
    const [rescuers, setRescuers] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch("http://localhost/fetch.php")
        .then((response) => response.json())
        .then((data) => {
            setRescuers(data);
            setLoading(false);
        })
        .catch((error) => {
            console.log("error fetching data: ", error);
            setLoading(false);
        });
    },[]);
    
    if(loading) return<p className='text-3xl font-semibold'>loading rescuers!!!Please wait....</p>;

    return(
        <div>
            {Object.keys(rescuers).length === 0 ? (
                <p className='text-2xl font-semibold'>No Rescuers Found.</p>) : (Object.entries(rescuers).map(([area, rescuersList]) => (
                    <div key={area} className='border-b-2 border-black border-solid p-4'>
                        <p className='text-2xl capitalize text-yellow-600 pb-4'>{area}</p>
                     
                        <table className='border-2 border-black border-solid w-[300px]'>
                            <thead>
                                <tr className='text-orange-500 align-items-center border-2 border-black'>
                                    <th className='border-2 border-black border-solid px-16'>Name</th>
                                    <th className='border-2 border-black border-solid'>Email</th>
                                    <th className='border-2 border-black border-solid'>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rescuersList.map((rescuer, index) =>(
                                    <tr key={index} className='{index % 2 === 0 ? "bg-gray-100" : "bg-white"} border-2 text-gray-800 border-black border-solid'>
                                        <td className='p-2 border-2 border-black border-solid'>{rescuer.name}</td>
                                        <td className='p-3 border-2 border-black border-solid'>{rescuer.email}</td>
                                        <td className='p-4 border-2 border-black border-solid'>{rescuer.phone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))
            )}
        </div>

   );
};

export default RescuersList