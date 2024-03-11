
// import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// import '../assets/css/avail.css';

// const Avail = () => {
//   const [services, setServices] = useState([]);
//   const [, setBooking] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     startDate: '',
//     endDate: '',
//     workingHours: '',
//   });

//   const token = localStorage.getItem('token');
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   console.log('Token:', token);
//   console.log('Headers:', axios.defaults.headers.common);

//   useEffect(() => {
//     fetchServices();
//   }, []);
//   useEffect(() => {
//     fetchBooking();
//   }, []);
//   const fetchServices = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/services');
//       console.log('Response:', response.data);
//       setServices(response.data);
//     } catch (error) {
//       console.error('Error fetching services:', error);
//     }
//   };
//   const fetchBooking = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/booking');
//       console.log('Response:', response.data);
//       setBooking(response.data);
//     } catch (error) {
//       console.error('Error fetching services:', error);
//     }
//   };
//   const handleAddService = (service) => {
//     console.log(`Service added with ID: ${service.id}`);
//     setShowForm(true);
//     setSelectedService(service);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8080/api/booking', {
//         ...formData,
//         selectedService: selectedService.sname,
//         cost: selectedService.cost,
//       });
//       console.log('Submit Response:', response.data);

//       // Clear the form data after successful submission
//       setFormData({
//         name: '',
//         startDate: '',
//         endDate: '',
//         workingHours: '',
//       });

//       // Hide the form after submission
//       setShowForm(false);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div className='available1' id='Available1'>
//       <div className='av_box1'>
//         {services.map((service) => (
//           <div key={service.id} className='av_card1'>
//             <div className='av-image1'>
//               <img src={service.image} alt={service.name} />
//             </div>
//             <div className='av_info1'>
//               <h2>{service.sname}</h2>
//               <p>{service.details}</p>
//               <h3>${service.cost}</h3>
//               <div className='av_icon1'>
//                 {service.rating &&
//                   [...Array(Math.floor(service.rating))].map((_, index) => (
//                     <FontAwesomeIcon key={index} icon={faStar} />
//                   ))}
//                 {service.rating && service.rating % 1 !== 0 && (
//                   <FontAwesomeIcon icon={faStarHalf} />
//                 )}
//               </div>
//               <button onClick={() => handleAddService(service)} className='av_btn1'>
//                 Add
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Form */}
//       {showForm && selectedService && (
//         <div className='form-overlay'>
//           <div className='form-container'>
//             <form onSubmit={handleSubmit}>
//               <label htmlFor='name'>Name:</label>
//               <input
//                 type='text'
//                 id='name'
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               />

//               <label htmlFor='startDate'>Start Date:</label>
//               <input
//                 type='date'
//                 id='startDate'
//                 value={formData.startDate}
//                 onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
//               />

//               <label htmlFor='endDate'>End Date:</label>
//               <input
//                 type='date'
//                 id='endDate'
//                 value={formData.endDate}
//                 onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
//               />

//               <label htmlFor='workingHours'>Working Hours:</label>
//               <input
//                 type='text'
//                 id='workingHours'
//                 value={formData.workingHours}
//                 onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
//               />

//               <label htmlFor='selectedService'>Selected Service:</label>
//               <input
//                 type='text'
//                 id='selectedService'
//                 value={selectedService.sname}
//                 readOnly
//               />
//               <label htmlFor='cost'>Cost:</label>
//               <input type='text' id='cost' value={selectedService.cost} readOnly />

//               <button type='submit'>Submit</button>
//               <button type='button' onClick={handleCloseForm}>
//                 Close
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Avail;


import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import '../assets/css/avail.css';

const Avail = () => {
  const [services, setServices] = useState([]);
  const [, setBooking] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    workingHours: '',
  });

  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  console.log('Token:', token);
  console.log('Headers:', axios.defaults.headers.common);

  useEffect(() => {
    fetchServices();
  }, []);
  useEffect(() => {
    fetchBooking();
  }, []);
  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/services');
      console.log('Response:', response.data);
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };
  const fetchBooking = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/booking');
      console.log('Response:', response.data);
      setBooking(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };
  const handleAddService = (service) => {
    console.log(`Service added with ID: ${service.id}`);
    setShowForm(true);
    setSelectedService(service);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handleRecharge = () => {
    try {
      const amountx = 250;
      var options = {
        key: "rzp_test_i1tLowNKXmrrLX",
        key_secret: "AC5ZHrWpt0uurpR7eXt9yUEQ",
        amount: amountx * 100,
        currency: "INR",
        name: "D-Portal",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "DEEPAK",
          email: "deepakprabu1234@gmail.com",
          contact: "8754988838",
        },
        notes: {
          address: "Sri krishna college of Engineering and Technology",
        },
        theme: {
          color: "#3399cc",
        },
      };

      var pay = new window.Razorpay(options);
      pay.open();
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Assuming that the Razorpay payment is successful
      // Perform the Razorpay payment here
      handleRecharge();
  
      // Now, proceed with the booking submission
      const response = await axios.post('http://localhost:8080/api/booking', {
        ...formData,
        selectedService: selectedService.sname,
        cost: selectedService.cost,
      });
      console.log('Submit Response:', response.data);
  
      // Clear the form data after successful submission
      setFormData({
        name: '',
        startDate: '',
        endDate: '',
        workingHours: '',
      });
  
      // Hide the form after submission
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <div className='available1' id='Available1'>
      <div className='av_box1'>
        {services.map((service) => (
          <div key={service.id} className='av_card1'>
            <div className='av-image1'>
              <img src={service.image} alt={service.name} />
            </div>
            <div className='av_info1'>
              <h2>{service.sname}</h2>
              <p>{service.details}</p>
              <h3>${service.cost}</h3>
              <div className='av_icon1'>
                {service.rating &&
                  [...Array(Math.floor(service.rating))].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} />
                  ))}
                {service.rating && service.rating % 1 !== 0 && (
                  <FontAwesomeIcon icon={faStarHalf} />
                )}
              </div>
              <button onClick={() => handleAddService(service)} className='av_btn1'>
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      {showForm && selectedService && (
        <div className='form-overlay'>
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <label htmlFor='startDate'>Start Date:</label>
              <input
                type='date'
                id='startDate'
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              />

              <label htmlFor='endDate'>End Date:</label>
              <input
                type='date'
                id='endDate'
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              />

              <label htmlFor='workingHours'>Working Hours:</label>
              <input
                type='text'
                id='workingHours'
                value={formData.workingHours}
                onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
              />

              <label htmlFor='selectedService'>Selected Service:</label>
              <input
                type='text'
                id='selectedService'
                value={selectedService.sname}
                readOnly
              />
              <label htmlFor='cost'>Cost:</label>
              <input type='text' id='cost' value={selectedService.cost} readOnly />

              <button type='submit'>Submit</button>
              <button type='button' onClick={handleCloseForm}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avail;

