import React from 'react'
import { useState } from 'react'

const test = () => {
    const [name, setname] = useState("")
    const [passsword, setpassword] = useState("")

    const SubmitForm = (e) => {
    e.preventDefault()
    console.log({name, passsword})   

          let data = {name, passsword}
          fetch("/api/submitData", {
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
                  alert('Done');   
              }
              else {
                alert('Not Done');
              }
            })
          })
    }

  return (
    <div>
       <form class="w-full max-w-sm">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Full Name
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={name} onChange={ (e) => setname(e.target.value)} />
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Password
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" value = {passsword} onChange={ (e) => setpassword(e.target.value)} />
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={SubmitForm}>
        Sign Up
      </button>
    </div>
  </div>
</form>
    </div>
  )
}

export default test