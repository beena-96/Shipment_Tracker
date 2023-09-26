"use client"
import React from 'react'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Navbar from './Navbar';

function AdminPage() {

    const [UserName, setUserName] = useState("")
    const [Role, setRole] = useState("Admin")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    let data = { UserName, Role , Email, Password }

   const Savedata = () =>{
    fetch("/api/submitDataAdmin", {
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

<Navbar />

        <div class="flex justify-center items-center w-screen h-screen bg-white">
            <div class="container mx-auto my-4 px-4 lg:px-20">

                <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl" style={{ marginLeft: "16%", marginBottom:"9%" }}>
                    <div class="flex">
                        <h6 class="font-bold uppercase text-2xl">Admin Details</h6>
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

                    </div>
                    <div class="my-4">
                        <input placeholder="Password" class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg"
                            name="Password" type="password" value={Password} onChange={(e) => { setPassword(e.target.value) }} />
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
        </div>
    )
}

export default AdminPage