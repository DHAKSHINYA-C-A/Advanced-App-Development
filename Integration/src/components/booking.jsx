

import{ useState, useEffect } from 'react';
import Axios from 'axios';
import '../assets/css/booking.css';
import AHome from "./aHome";
const Booking = () => {
  const [bookings, setBookings] = useState([]);

  const token=localStorage.getItem('token');
  Axios.defaults.headers.common['Authorization'] =   ` Bearer ${token}`;
  console.log("Token:", token);
  console.log("Headers:", Axios.defaults.headers.common);
  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await Axios.get('http://localhost:8080/api/booking');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };
  return (
    <div className="booking-table-container">
        <div>
            <AHome/>
        </div>
      <h2 className='zxc'>BOOKING DETAILS</h2>
      <table className="booking-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>START DATE</th>
            <th>END DATE</th>
            <th>WORKING HOURS</th>
            <th>SERVICE</th>
            <th>COST</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.name}</td>
              <td>{booking.startDate}</td>
              <td>{booking.endDate}</td>
              <td>{booking.workingHours}</td>
              <td>{booking.selectedService}</td>
              <td>{booking.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
