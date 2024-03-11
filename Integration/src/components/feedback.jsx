// feedback.jsx

import { useState, useEffect } from 'react';
import Axios from 'axios';
import '../assets/css/feedback.css';
import AHome from './aHome';
const Feedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const token=localStorage.getItem('token');
  Axios.defaults.headers.common['Authorization'] =   ` Bearer ${token}`;
  console.log("Token:", token);
  console.log("Headers:", Axios.defaults.headers.common);
  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await Axios.get('http://localhost:8080/api/feedback');
      setFeedbackList(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  return (
    <div className="feedback-container">
        <div>
            <AHome/>
        </div>
      <h2>Feedback</h2>
      <div className="feedback-cards">
        {feedbackList.map((feedback) => (
          <div className="feedback-card" key={feedback.id}>
            <h3>{feedback.name}</h3>
            <p>Email: {feedback.email}</p>
            <p>Rating: {feedback.rating}</p>
            <p className='hj'>{feedback.feed}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
