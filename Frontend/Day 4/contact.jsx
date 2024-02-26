
import '../assets/css/contact.css';
const Contact = () => {
  return (
    <div className="order" id="Order">
        <h1>Order<span>Now</span></h1>
        <div className="order_main">
            <div className='order_image'>
                <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1708700852/240_F_376661672_OUk4ws66zUuVkOsb9hnbC5Mcg1NjrCI6_nafv2z.jpg"/>
            </div>
            <form action="#">
                <div className='input'>
                    <p className='pa'>Name</p>
                    <input type="text" placeholder='Your Name'/>
                </div>
                <div className='input'>
                    <p className='pa'>Email</p>
                    <input type="email" placeholder='Your Email'/>
                </div>
                <div className='input'>
                    <p className='pa'>Number</p>
                    <input placeholder='Your NUmber'/>
                </div>
                <div className='input'>
                    <p className='pa'>Address</p>
                    <input placeholder='Your Address'/>
                </div>
                <div className='input'>
                    <p className='pa'>Your Ratings</p>
                    <input placeholder='Your Ratings'/>
                </div>
                <div className='input'>
                    <p className='pa'>FeedBack</p>
                    <input placeholder='Your FeedBack'/>
                </div>
                <a href="#Order" className='order_btn'>Send</a>
            </form>
        </div>
    </div>
  );
};

export default Contact;
