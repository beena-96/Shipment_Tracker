// import React, { useState, useEffect } from 'react';shipmentid
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ShipmentTable = () => {

//     const [tablemap, settablemap] = useState([])
//   useEffect(() => {
//     // Fetch data when the component mounts
//     fetch('/api/selectDataShipmentTable')
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);

//             if (data.error === false) {
//                 // Update the tableMap state with fetched data
//                 settablemap(data.data);
//             } else {
//                 toast('Error');
//             }
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// }, []);

//   return (
//     <div>
//  <div class="flex">
//                         <h6 class="font-bold uppercase text-2xl" style={{marginLeft:"20%",marginTop:"1%" }}>Shipment Details</h6>
//                     </div>
//       <div class="container flex justify-center mx-auto" style={{marginLeft:"28%",width:"58%",marginTop:"2%"}}>
//      <div class="flex flex-col">
//         <div class="w-full">
//             <div class="border-b border-gray-200 shadow">
//                <table class="divide-y divide-gray-300 ">
//                    <thead class="bg-gray-50">
//                          <tr>
//                          <th class="px-6 py-2 text-xs text-gray-500">
//                             Shipment Id
//                             </th>
//                             <th class="px-6 py-2 text-xs text-gray-500">
//                             Customer Name
//                             </th>
//                             <th class="px-6 py-2 text-xs text-gray-500">
//                             Shipment Status 
//                             </th>
//                             <th class="px-6 py-2 text-xs text-gray-500">
//                             Planned Delivery Date
//                             </th>
//                             <th class="px-6 py-2 text-xs text-gray-500">
//                             Actual Delivery Date
//                              </th>
//                             <th class="px-6 py-2 text-xs text-gray-500">
//                             Destination Address
//                              </th>
//                             <th class="px-6 py-2 text-xs text-gray-500">
//                                 Edit
//                             </th>
//                             <th class="px-6 py-2 text-xs text-gray-500">
//                                 Delete
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody class="bg-white divide-y divide-gray-300">
//                     {tablemap.map((item, index) => (
//                         <tr class="whitespace-nowrap" key={index}>
//                             <td class="px-6 py-4 text-sm text-gray-500">
//                             {item.shipmentid}
//                             </td>
//                             <td class="px-6 py-4 text-sm text-gray-500">
//                             {item.customername}
//                             </td>
//                             <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                             <span
//                                 class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">{item.shipmentstatus}</span>
//                         </td>                          
//                             <td class="px-6 py-4 text-sm text-gray-500">
//                                 {item.planneddeliverydate}
//                             </td>
//                             <td class="px-6 py-4 text-sm text-gray-500">
//                                 {item.actualdeliverydate}
//                             </td>
//                             <td class="px-6 py-4">
//                                 <div class="text-sm text-gray-500">{item.destinationaddress}</div>
//                             </td>
//                             <td class="px-6 py-4">
//                                 <a href="#">
//                                     <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none"
//                                         viewBox="0 0 24 24" stroke="currentColor">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                                             d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                                     </svg>
//                                 </a>
//                             </td>
//                             <td class="px-6 py-4">
//                               <button>
//                                 <a href="#">
//                                     <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none"
//                                         viewBox="0 0 24 24" stroke="currentColor">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                                             d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                                     </svg>
//                                 </a>
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </div>
// </div>
//     </div>
//   );
// };

// export default ShipmentTable;





// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ShipmentTable = () => {

//     const [tablemap, settablemap] = useState([])

//     const handleAddRow = () => {
//         // Create a new row with default values or user input
//         const newRow = {
//             shipmentid: '',
//             customername: '',
//             shipmentstatus: '',
//             planneddeliverydate: '',
//             actualdeliverydate: '',
//             destinationaddress: '',
//         };

//         // Update the tablemap state by adding the new row
//         settablemap([...tablemap, newRow]);
//     };

//     const handleDeleteRow = (index) => {
//         // Create a new array excluding the row to be deleted
//         const updatedTableMap = tablemap.filter((_, i) => i !== index);

//         // Update the tablemap state with the updated array
//         settablemap(updatedTableMap);

//         fetch('/api/UpdateDataShipment')
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);

//             if (data.error === false) {
//                 // Update the tableMap state with fetched data
//                 settablemap(data.data);
//             } else {
//                 toast('Error');
//             }
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     };

//     useEffect(() => {
//         // Fetch data when the component mounts
//         fetch('/api/selectDataShipmentTable')
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data);

//                 if (data.error === false) {
//                     // Update the tableMap state with fetched data
//                     settablemap(data.data);
//                 } else {
//                     toast('Error');
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     }, []);

//     return (
//         <div>
//             {/* <div class="flex">
//                 <h6 class="font-bold uppercase text-2xl" style={{ marginLeft: "10%"}}>Shipment Details</h6>
//             </div> */}
//             <div style={{width:"50%"}}>
//                 <div class="flex flex-col">
//                     <div class="w-full">
//                         <div class="border-b border-gray-200 shadow">
//                             <table class="divide-y divide-gray-300 ">
//                                 <thead class="bg-gray-50">
//                                     <tr>
//                                         <th class="px-6 py-2 text-xs text-gray-500">
//                                             Shipment Id
//                                         </th>
//                                         <th class="px-6 py-2 text-xs text-gray-500">
//                                             Customer Name
//                                         </th>
//                                         <th class="px-6 py-2 text-xs text-gray-500">
//                                             Shipment Status
//                                         </th>
//                                         <th class="px-6 py-2 text-xs text-gray-500">
//                                             Planned Delivery Date
//                                         </th>
//                                         <th class="px-6 py-2 text-xs text-gray-500">
//                                             Actual Delivery Date
//                                         </th>
//                                         <th class="px-6 py-2 text-xs text-gray-500">
//                                             Destination Address
//                                         </th>
//                                         <th class="px-6 py-2 text-xs text-gray-500">
//                                             Edit
//                                         </th>
//                                         <th class="px-6 py-2 text-xs text-gray-500">
//                                             Delete
//                                         </th>
//                                     </tr>
//                                 </thead>
//                                 <tbody class="bg-white divide-y divide-gray-300">
//                                     {tablemap.map((item, index) => (
//                                         <tr class="whitespace-nowrap" key={index}>
//                                             <td >
//                                                 <input class="px-6 py-4 text-sm text-gray-500" value={item.shipmentid} />
//                                             </td>
//                                             <td >
//                                                 <input class="px-6 py-4 text-sm text-gray-500" value={item.customername} />
//                                             </td>
//                                             <td >
//                                                 <input class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full" value={item.shipmentstatus} />
//                                             </td>
//                                             <td >
//                                                 <input class="px-6 py-4 text-sm text-gray-500" value={item.planneddeliverydate} />
//                                             </td>
//                                             <td >
//                                                 <input class="px-6 py-4 text-sm text-gray-500" value={item.actualdeliverydate} />
//                                             </td>
//                                             <td >
//                                                 <input class="px-6 py-4 text-sm text-gray-500" value={item.destinationaddress} />
//                                             </td>
//                                             <td class="px-6 py-4">
//                                                 <button onClick={() => handleAddRow(index)}>
//                                                     <a href="#">
//                                                         <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none"
//                                                             viewBox="0 0 24 24" stroke="currentColor">
//                                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                                                                 d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                                                         </svg>
//                                                     </a>
//                                                 </button>
//                                             </td>
//                                             <td class="px-6 py-4">
//                                                 <button onClick={() => handleDeleteRow(index)}>
//                                                     <a href="#">
//                                                         <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none"
//                                                             viewBox="0 0 24 24" stroke="currentColor">
//                                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                                                                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                                                         </svg>
//                                                     </a>
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ShipmentTable;








import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShipmentTable = () => {
  const [tablemap, setTablemap] = useState([]);

  const fetchShipmentData = () => {
    fetch('/api/selectDataShipmentTable')
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false) {
          setTablemap(data.data);
        } else {
          toast('Error');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchShipmentData();
  }, []);

  const editdata = (index) => {
    // Check if tablemap[index] exists
    if (tablemap[index]) {
      // Get the row data that you want to edit
      const editedRow = tablemap[index];
  
      // Ensure that the editedRow object includes all required fields
      editedRow.shipmentid = editedRow.shipmentid; // Assuming shipmentid is not editable
      editedRow.customername = editedRow.customername;
      editedRow.shipmentstatus = editedRow.shipmentstatus;
      editedRow.destinationaddress = editedRow.destinationaddress;
      editedRow.planneddeliverydate = editedRow.planneddeliverydate;
      editedRow.actualdeliverydate = editedRow.actualdeliverydate;
  
      // Send the editedRow data to the server for updating
      fetch('/api/UpdateDataShipment', {
        method: 'PUT', // Use PUT method for updating
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedRow),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error === false) {
            // If the update was successful, fetch fresh data
            fetchShipmentData();
          } else {
            toast('Error');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      console.error('Tablemap element at index', index, 'is undefined.');
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };
  
  

//   const handleDeleteRow = (index) => {
//     // Get the row data that you want to delete
//     const deletedRow = tablemap[index];

//     // Send the deletedRow data to the server for deletion
//     fetch('/api/DeleteDataShipment', {
//       method: 'DELETE', // Use DELETE method for deletion
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(deletedRow),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.error === false) {
//           // If the deletion was successful, fetch fresh data
//           fetchShipmentData();
//         } else {
//           toast('Error');
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

  const handleInputChange = (index, shipmentid, value) => {
    // Create a copy of the current tablemap
    const updatedTableMap = [...tablemap];

    // Update the specific cell value based on index and column name
    updatedTableMap[index][shipmentid] = value;

    // Update the state with the modified tablemap
    setTablemap(updatedTableMap);
  };

    return (
        <div>
            {/* <div class="flex">
                <h6 class="font-bold uppercase text-2xl" style={{ marginLeft: "10%"}}>Shipment Details</h6>
            </div> */}
            <div style={{width:"50%"}}>
                <div class="flex flex-col">
                    <div class="w-full">
                        <div class="border-b border-gray-200 shadow">
                            <table class="divide-y divide-gray-300 ">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th class="px-6 py-2 text-xs text-gray-500">
                                            Shipment Id
                                        </th>
                                        <th class="px-6 py-2 text-xs text-gray-500">
                                            Customer Name
                                        </th>
                                        <th class="px-6 py-2 text-xs text-gray-500">
                                            Shipment Status
                                        </th>
                                        <th class="px-6 py-2 text-xs text-gray-500">
                                            Planned Delivery Date
                                        </th>
                                        <th class="px-6 py-2 text-xs text-gray-500">
                                            Actual Delivery Date
                                        </th>
                                        <th class="px-6 py-2 text-xs text-gray-500">
                                            Destination Address
                                        </th>
                                        <th class="px-6 py-2 text-xs text-gray-500">
                                            Edit
                                        </th>
                                        {/* <th class="px-6 py-2 text-xs text-gray-500">
                                            Delete
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-300">
                                    {tablemap.map((item, index) => (
                                        <tr class="whitespace-nowrap" key={index}>
                                            <td >
                                                <input class="px-6 py-4 text-sm text-gray-500" value={item.shipmentid}  onChange={(e) =>
                                                    handleInputChange(index, 'shipmentid', e.target.value)
                                                  }/>
                                            </td>
                                            <td >
                                                <input class="px-6 py-4 text-sm text-gray-500" value={item.customername} 
                                                 onChange={(e) =>
                                                    handleInputChange(index, 'customername', e.target.value)
                                                  }/>
                                            </td>
                                            <td >
                                                <input class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full" value={item.shipmentstatus} 
                                                 onChange={(e) =>
                                                    handleInputChange(index, 'shipmentstatus', e.target.value)
                                                  }
                                                  />
                                            </td>
                                            <td >
                                                <input class="px-6 py-4 text-sm text-gray-500" value={item.planneddeliverydate} 
                                                 onChange={(e) =>
                                                    handleInputChange(index, 'planneddeliverydate', e.target.value)
                                                  }/>
                                            </td>
                                            <td >
                                                <input class="px-6 py-4 text-sm text-gray-500" value={item.actualdeliverydate} 
                                                 onChange={(e) =>
                                                    handleInputChange(index, 'actualdeliverydate', e.target.value)
                                                  }/>
                                            </td>
                                            <td >
                                                <input class="px-6 py-4 text-sm text-gray-500" value={item.destinationaddress}
                                                 onChange={(e) =>
                                                    handleInputChange(index, 'destinationaddress', e.target.value)
                                                  }
                                                   />
                                            </td>
                                            <td class="px-6 py-4">
                                                <button  onClick={handleOpen}>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none"
                                                            viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </a>
                                                </button>
                                            </td>                                          
                                            {/* <td class="px-6 py-4">
                                                <button onClick={() => handleDeleteRow(index)}>
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

                            {isOpen && (
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
                placeholder="Id"
                name=""
              />
               <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
)}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShipmentTable;




