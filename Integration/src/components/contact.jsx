


// import Axios from 'axios';
// import { useState, useEffect } from 'react';
// import '../assets/css/contact.css';

// const Contact = () => {
//   const [, setFeedBack] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     number: '',
//     address: '',
//     rating: '',
//     feed: '',
//   });
// //   const [feedbackMessage, setFeedbackMessage] = useState('');

//   const token = localStorage.getItem('token');
//   Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   console.log('Token:', token);
//   console.log('Headers:', Axios.defaults.headers.common);

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const response = await Axios.get('http://localhost:8080/api/feedback');
//       console.log('Response:', response.data);
//       setFeedBack(response.data);
//     } catch (error) {
//       console.error('Error fetching services:', error);
//     }
//   };
  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
  
//     try {
//       const response = await Axios.post('http://localhost:8080/api/feedback', formData);
//       console.log('Submit Response:', response.data);
//       setFeedBack((prevData) => [...prevData, response.data]);
//       // Clear the form data after successful submission
//       setFormData({
//         name: '',
//         email: '',
//         number: '',
//         address: '',
//         rating: '',
//         feed: '',
//       });
//     } catch (error) {
//       console.error('Error adding service:', error);
//     }
//   };

//   return (
//     <div className="order" id="Order">
//       <h1>
//         Order<span>Now</span>
//       </h1>
//       <div className="order_main">
//         <div className="order_image">
//           <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1708700852/240_F_376661672_OUk4ws66zUuVkOsb9hnbC5Mcg1NjrCI6_nafv2z.jpg" />
//         </div>
        // <form onSubmit={handleSubmit}>
        //   <div className="input">
        //     <p className="pa">Name</p>
        //     <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
        //   </div>
        //   <div className="input">
        //     <p className="pa">Email</p>
        //     <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
        //   </div>
        //   <div className="input">
        //     <p className="pa">Number</p>
        //     <input type="text" name="number" value={formData.number} onChange={handleChange} placeholder="Your Number" />
        //   </div>
        //   <div className="input">
        //     <p className="pa">Address</p>
        //     <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Your Address" />
        //   </div>
        //   <div className="input">
        //     <p className="pa">Your Ratings</p>
        //     <input type="text" name="rating" value={formData.rating} onChange={handleChange} placeholder="Your Ratings" />
        //   </div>
        //   <div className="input">
        //     <p className="pa">FeedBack</p>
        //     <input type="text" name="feed" value={formData.feed} onChange={handleChange} placeholder="Your FeedBack" />
        //   </div>
        //   <button type="submit" className="order_btn1">
        //     Send
        //   </button>
        // </form>
//       </div>
//       <div className="feedback-popup">
//         <p>Your feedback has been submitted successfully! ✔</p>
//       </div>
    
//     </div>
//   );
// };

// export default Contact;




import Axios from 'axios';
import { useState, useEffect } from 'react';
import '../assets/css/contact.css';

const Contact = () => {
  const [feedbackPopup, setFeedbackPopup] = useState(false);
  const [, setFeedBack] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    rating: '',
    feed: '',
  });

  const token = localStorage.getItem('token');
  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await Axios.get('http://localhost:8080/api/feedback');
      console.log('Response:', response.data);
      setFeedBack(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:8080/api/feedback', formData);
      console.log('Submit Response:', response.data);
      setFeedBack((prevData) => [...prevData, response.data]);
      // Clear the form data after successful submission
      setFormData({
        name: '',
        email: '',
        number: '',
        address: '',
        rating: '',
        feed: '',
      });
      // Show the feedback pop-up
      setFeedbackPopup(true);
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  return (
    <div className="order" id="Order">
      <h1>
        Order<span>Now</span>
      </h1>
      <div className="order_main">
        <div className="order_image">
          <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1708700852/240_F_376661672_OUk4ws66zUuVkOsb9hnbC5Mcg1NjrCI6_nafv2z.jpg" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <p className="pa">Name</p>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
          </div>
          <div className="input">
            <p className="pa">Email</p>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
          </div>
          <div className="input">
            <p className="pa">Number</p>
            <input type="text" name="number" value={formData.number} onChange={handleChange} placeholder="Your Number" />
          </div>
          <div className="input">
            <p className="pa">Address</p>
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Your Address" />
          </div>
          <div className="input">
            <p className="pa">Your Ratings</p>
            <input type="text" name="rating" value={formData.rating} onChange={handleChange} placeholder="Your Ratings" />
          </div>
          <div className="input">
            <p className="pa">FeedBack</p>
            <input type="text" name="feed" value={formData.feed} onChange={handleChange} placeholder="Your FeedBack" />
          </div>
          <button type="submit" className="order_btn1">
            Send
          </button>
        </form>
      </div>

      {/* Feedback Pop-up */}
      {feedbackPopup && (
        <div className="feedback-popup">
          <p>FeedBack Submitted ✔</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
