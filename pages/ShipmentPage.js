import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Navbar from './Navbar';
import { format } from 'date-fns';
import ShipmentTable from './ShipmentTable';

function ShipmentPage() {
  const [CustomerName, setCustomerName] = useState('');
  const [ShipmentStatus, setShipmentStatus] = useState('');
  const [DestinationAddress, setDestinationAddress] = useState('');
  const [PlannedDeliveryDate, setPlannedDeliveryDate] = useState('');
  const [ActualDeliveryDate, setActualDeliveryDate] = useState('');
  const [searchInput, setSearchInput] = useState(''); // State variable for search input

  function convertIsoToDdMmYyyy(isoDate) {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const buttonDisabled =
    CustomerName === '' &&
    ShipmentStatus === '' &&
    DestinationAddress === '' &&
    PlannedDeliveryDate === '' &&
    ActualDeliveryDate === '';

  const savedata = (e) => {
    e.preventDefault();
    const formattedPlannedDeliveryDate = convertIsoToDdMmYyyy(PlannedDeliveryDate);
    const formattedActualDeliveryDate = convertIsoToDdMmYyyy(ActualDeliveryDate);

    const data = {
      CustomerName,
      ShipmentStatus,
      DestinationAddress,
      PlannedDeliveryDate: formattedPlannedDeliveryDate, // Use the formatted date
      ActualDeliveryDate: formattedActualDeliveryDate, // Use the formatted date
    };

    fetch('/api/submitDataShipment', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false) {
          toast('Data Saved Successfully');
        } else {
          toast('Error saving data');
        }
      })
      .catch((error) => {
        console.error('Error saving data:', error);
        toast('Error saving data');
      });
  };

  const handleSearch = () => {
  // Fetch data based on the shipment ID
  fetch(`/api/SearchShipment?shipmentid=${searchInput}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('API Response Data:', data);

      if (data.error === false && data.data) {
        // Update the form fields with the retrieved data
        setCustomerName(data.data.customername);
        setDestinationAddress(data.data.destinationaddress);
        setShipmentStatus(data.data.shipmentstatus);

        // Format the dates from "yyyy-mm-dd" to "dd-mm-yyyy" before setting them
        const formattedPlannedDeliveryDate = formatDateFromDbToDdMmYyyy(data.data.planneddeliverydate);
        const formattedActualDeliveryDate = formatDateFromDbToDdMmYyyy(data.data.actualdeliverydate);

        setPlannedDeliveryDate(formattedPlannedDeliveryDate);
        setActualDeliveryDate(formattedActualDeliveryDate);
      } else {
        toast('No data found for the provided shipment ID');
        console.log('No data found for the provided shipment ID');
      }
    })
    .catch((error) => {
      console.error('Error during search:', error);
      toast('Error during search');
    });
};

// Helper function to format a date from "yyyy-mm-dd" to "dd-mm-yyyy"
function formatDateFromDbToDdMmYyyy(yyyyMmDdDate) {
  const parts = yyyyMmDdDate.split('-');
  if (parts.length === 3) {
    const [year, month, day] = parts;
    return `${day}-${month}-${year}`;
  }
  return yyyyMmDdDate; // Return as is if the format is already correct
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
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </div>
      </nav>

      <div style={{ float: "right" }}>
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 mr-2 rounded-md border focus:outline-none"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      <div className="flex justify-center items-center w-screen h-screen bg-white">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl" style={{ marginLeft: "16%", marginBottom: "9%" }}>
            <div className="flex">
              <h6 className="font-bold uppercase text-2xl">Shipment Details</h6>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-200 text-black-900 mt-2 p-3 rounded-lg"
                type="text"
                placeholder="Customer Name"
                value={CustomerName}
                name="CustomerName"
                onChange={(e) => { setCustomerName(e.target.value) }}
              />

              <select
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg"
                name="ShipmentStatus"
                value={ShipmentStatus}
                onChange={(e) => { setShipmentStatus(e.target.value) }}
              >
                <option>Choose..</option>
                <option value="Transit">Transit</option>
                <option value="Delivered">Delivered</option>
                <option value="Pending">Pending</option>
              </select>
              <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg"
                type="date"
                placeholder="Planned Delivery Date"
                name="PlannedDeliveryDate"
                value={PlannedDeliveryDate}
                onChange={(e) => { setPlannedDeliveryDate(e.target.value) }}
              />

              <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg"
                type="date"
                placeholder="Actual Delivery Date"
                name="ActualDeliveryDate"
                value={ActualDeliveryDate}
                onChange={(e) => { setActualDeliveryDate(e.target.value) }}
              />
            </div>
            <div className="my-4">
              <input
                placeholder="Destination Address"
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg"
                name="DestinationAddress"
                type="text"
                value={DestinationAddress}
                onChange={(e) => { setDestinationAddress(e.target.value) }}
              />
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                  onClick={savedata}
                  disabled={buttonDisabled}
                >
                  Submit
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShipmentTable />
    </div>
  )
}

export default ShipmentPage;
