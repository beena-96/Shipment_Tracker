import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShipmentTable = () => {

    const [tablemap, settablemap] = useState([])
  useEffect(() => {
    // Fetch data when the component mounts
    fetch('/api/selectDataAdminTable')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            if (data.error === false) {
                // Update the tableMap state with fetched data
                settablemap(data.data);
            } else {
                toast('Error');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}, []);

  return (
    <div>
 <div class="flex">
                        <h6 class="font-bold uppercase text-2xl" style={{marginLeft:"20%",marginTop:"2%" }}>Admin Details</h6>
                    </div>
      <div class="container flex justify-center mx-auto" style={{marginLeft:"20%",width:"58%",marginTop:"2%"}}>
     <div class="flex flex-col">
        <div class="w-full">
            <div class="border-b border-gray-200 shadow">
               <table class="divide-y divide-gray-300 ">
                   <thead class="bg-gray-50">
                         <tr>
                         <th class="px-6 py-2 text-xs text-gray-500">
                            User Id
                            </th>
                         <th class="px-6 py-2 text-xs text-gray-500">
                            User Name
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                            Email 
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                            Password
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                            Role
                            </th>
                            {/* <th class="px-6 py-2 text-xs text-gray-500">
                                Edit
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Delete
                            </th> */}
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-300">
                    {tablemap.map((item, index) => (
                        <tr class="whitespace-nowrap" key={index}>
                            <td class="px-6 py-4 text-sm text-gray-500">
                            {item.userid}
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">
                            {item.username}
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span
                                class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">{item.email}</span>
                        </td>                          
                            <td class="px-6 py-4 text-sm text-gray-500">
                                {item.password}
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">
                                {item.role}
                            </td>
                            {/* <td class="px-6 py-4">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </a>
                            </td>
                            <td class="px-6 py-4">
                              <button>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </a>
                                </button>
                            </td> */}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
    </div>
  );
};

export default ShipmentTable;
