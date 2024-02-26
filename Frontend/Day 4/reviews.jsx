import '../assets/css/reviews.css';


const reviews = [
  {
    id: 1,
    name:'Harini',
    text: 'We recently engaged the home care services for my elderly parents, and I must say it has been a tremendous relief. The caregivers are compassionate, well-trained, and truly dedicated to providing exceptional care. Its reassuring to know that my parents are in good hands.',
  },
  {
    id: 2,
    name:'Harini',
    text: 'The team at Elderly Services has been a lifeline for our family. Their caregivers go above and beyond to ensure my grandmother is comfortable and happy. The personalized care plans and attention to detail make all the difference. Highly recommend for anyone seeking quality home care.',
  },
  {
    id: 3,
    name:'Harini',
    text: 'Exceptional service! The caregivers are not just professionals; theyve become like extended family members. Their genuine concern for my fathers well-being is evident in every interaction. The flexibility of their services has made it possible for us to tailor the care to my fathers specific needs',
  }
 
];

const Review = () => {
  return (
    <div className="review-list">
        <h1>Customer <span>Reviews</span></h1>
      {reviews.map(review => (
        <div key={review.id} className="review-box">
          <p className="review-text">{review.text}</p>
          <div className="review-author">{review.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Review;
