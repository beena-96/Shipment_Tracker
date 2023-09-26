"use client"
import React from 'react'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Navbar from './Navbar';
import DriverTable from './DriverTable'

function DriverPage() {

    const [UserName, setUserName] = useState("")
    const [Role, setRole] = useState("Driver")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [VehicleNumber, setVehicleNumber] = useState("")
    const [LicenseNumber, setLicenseNumber] = useState("")
    const [ContactNumber, setContactNumber] = useState("")


    let data = { UserName, Role , Email, Password, VehicleNumber, LicenseNumber, ContactNumber }

   const Savedata = () =>{
    fetch("/api/submitDataDriver", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            'Content-type': "application/json"
        }
    }).
        then((response) => {
            response.json().
                then((data) => {
                    console.log(data)


                    if (data.error === false) {
                        toast("Data saved successfully")
                    }
                    else {
                        toast("Something wrong", { type: 'error' })
                    }
                })
        })
    console.log(data);
    }
    return (

        <div>

<nav className="flex px-4 border-b md:shadow-lg items-center relative">
<Link href="/ManagerDashboard" className="text-lg font-bold md:py-0 py-4">
                    <span>Go Back</span>
                </Link>
        <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
            <li>
                <Link href="/AdminDashboard" className="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <span>Home</span>
                </Link>
            </li>
        </ul>
        <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </div>
    </nav>


        <div class="flex justify-center items-center w-screen h-screen bg-white">
            <div class="container mx-auto my-4 px-4 lg:px-20">

                <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl" style={{ marginLeft: "16%", marginBottom:"9%" }}>
                    <div class="flex">
                        <h6 class="font-bold uppercase text-2xl">Driver Details</h6>
                    </div>
                    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input class="w-full bg-gray-200 text-black-900 mt-2 p-3 rounded-lg"
                            type="text" placeholder="User Name"
                            value={UserName} name="UserName" onChange={(e) => { setUserName(e.target.value) }} />

                           <input class="w-full bg-gray-200 text-black-900 mt-2 p-3 rounded-lg"
                            type="text" placeholder="Role"
                            value={Role} name="Role" onChange={(e) => { setRole(e.target.value) }} />

                        <input class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg"
                            type="email" placeholder="Email"
                            name="Email" value={Email} onChange={(e) => { setEmail(e.target.value) }} />

                        <input class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg"
                            type="password" placeholder="Password"
                            name="Password" value={Password} onChange={(e) => { setPassword(e.target.value) }} />

<input class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg"
                            type="email" placeholder="Vehicle Number"
                            name="VehicleNumber" value={VehicleNumber} onChange={(e) => { setVehicleNumber(e.target.value) }} />

                        <input class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg"
                            type="password" placeholder="License Number"
                            name="LicenseNumber" value={LicenseNumber} onChange={(e) => { setLicenseNumber(e.target.value) }} />
                    </div>
                    <div class="my-4">
                        <input placeholder="Contact Number" class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg"
                            name="ContactNumber" type="text" value={ContactNumber} onChange={(e) => { setContactNumber(e.target.value) }} />
                        <div class="my-2 w-1/2 lg:w-1/4">
                            <button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline" onClick={Savedata} >
                                Submit
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DriverTable />
        </div>
    )
}

export default DriverPage