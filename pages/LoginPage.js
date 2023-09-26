import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as yup from 'yup';

const LoginPage = () => {

    const [UserName, setUserName] = useState("")
    const [Password, setPassword] = useState("")

    const router = useRouter();

    const validationSchema = yup.object({
        UserName: yup.string().required('Username is required'),
        Password: yup.string().required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            UserName: UserName,
            Password: Password,
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            let data = { UserName, Password };
        
            fetch("/api/selectData", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    Accept: "application/json",
                    'Content-type': "application/json"
                }
            })
            .then((response) => {
                response.json().then((data) => {
                    console.log(data);
        
                    if (data.error === false) {
                        // Check the user's role and redirect accordingly
                        if (data.role === 'Admin') {
                            router.push('/AdminDashboard');
                        } else if (data.role === 'Manager') {
                            router.push('/ManagerDashboard');
                        } else {
                            router.push('/DriverDashboard');
                        }
                    } else {
                        toast("Some Error");
                    }
                });
            });
            console.log(data);
        },        
    });


  return (
    <div>
         <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Login</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input id="UserName" name="UserName" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" 
                                    value={UserName} onChange={(e) => {
                                        setUserName(e.target.value);
                                        formik.handleChange(e);
                                    }}
                                        onBlur={formik.handleBlur}/>
                                         {formik.touched.UserName && formik.errors.UserName ? (
                                            <div className="text-red-500 rounded text-xs font-medium uppercase leading-normal">{formik.errors.UserName}</div>
                                        ) : null}
                                    
                                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                                </div>
                                <div className="relative">
                                    <input id="Password" name="Password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password"
                                    value={Password} onChange={(e) => {
                                        setPassword(e.target.value);
                                        formik.handleChange(e);
                                    }}
                                    onBlur={formik.handleBlur} />
{formik.touched.Password && formik.errors.Password ? (
                                            <div className="text-red-500 rounded text-xs font-medium uppercase leading-normal">{formik.errors.Password}</div>
                                        ) : null}
                                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                </div>
                                <div className="relative">
                                    <button type="button" className="bg-blue-500 text-white rounded-md px-10 py-1"
                                     onClick={formik.handleSubmit}
                                    >Submit</button><ToastContainer />
                                </div>
                                <div>
                                <lable className="rounded text-xs font-medium uppercase leading-normal">If You Are New:</lable><Link href="/RegisterPage"
  className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue-500 hover:text-blue-700">Register First</Link>
  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage