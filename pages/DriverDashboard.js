"use client"
import Link from 'next/link';
import ShipmentTable from './ShipmentTable';
import DriverTable from './DriverTable';
import Navbar from './Navbar'
import ManagerTable from './ManagerTable'
import AdminTable from './AdminTable'
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function DriverDashboard() {

    
    const [tablemap, settablemap] = useState([])
  useEffect(() => {
    // Fetch data when the component mounts
    fetch('/api/selectDataDriverTable')
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
           <nav className="flex px-4 border-b md:shadow-lg items-center relative">
        <div className="text-lg font-bold md:py-0 py-4">
            Logo
        </div>
        <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
        </ul>
        <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </div>
    </nav>
<button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
  <span className="sr-only">Toggle Navigation</span>
  <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
</button>

<div id="docs-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
  <div className="px-6">
    <a className="flex-none text-xl font-semibold dark:text-white" href="javascript:;" aria-label="Brand">Brand</a>
  </div>
  <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
    <ul className="space-y-1.5">
      <li>
        <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white" href="javascript:;">
          <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
          Dashboard
        </a>
      </li>
    </ul>
  </nav>
</div>

<div class="flex">
                        <h6 class="font-bold uppercase text-2xl" style={{marginLeft:"21%" , marginTop:"3%" }}>Driver Details</h6>
                    </div>
<div class="container flex justify-center mx-auto" style={{marginLeft:"13%", width:"80%" , marginTop:"2%"}}>
     <div class="flex flex-col">
        <div class="w-full">
            <div class="border-b border-gray-200 shadow">
               <table class="divide-y divide-gray-300 ">
                   <thead class="bg-gray-50">
                         <tr>
                         <th class="px-6 py-2 text-xs text-gray-500">
                         Driver ID
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
                            <th class="px-6 py-2 text-xs text-gray-500">
                            Vehicle Number
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                            License Number
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                            Contact Number
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Edit
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-300">
                    {tablemap.map((item, index) => (
                        <tr class="whitespace-nowrap" key={index}>
                            <td class="px-6 py-4 text-sm text-gray-500">
                            {item.driverid }
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">
                            {item.username}
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">
                            {item.email}
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">
                            {item.password}
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">
                            {item.role}
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">
                            {item.vehiclenumber}
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span
                                class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">{item.licensenumber}</span>
                        </td>                          
                            <td class="px-6 py-4 text-sm text-gray-500">
                                {item.contactnumber}
                            </td>
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
}



