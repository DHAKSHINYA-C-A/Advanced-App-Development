import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/aservice.css';
import AHome from './aHome';
const Aservice = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    imageUrl: '',
    name: '',
    description: '',
    cost: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [blurBackground, setBlurBackground] = useState(false);

  const handleAddService = () => {
    if (editIndex !== null) {

      const updatedServices = [...services];
      updatedServices[editIndex] = formData;
      setServices(updatedServices);
      setEditIndex(null);
    } else {
    
      setServices([...services, formData]);
    }

   
    setFormData({ imageUrl: '', name: '', description: '', cost: '' });
    setShowModal(false);
    setBlurBackground(false);
  };


  const handleEditService = (index) => {
  
    setFormData({ ...services[index] });
    setEditIndex(index);
    setShowModal(true);
   
  };
  const handleDeleteService = (index) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    setServices(updatedServices);
    setEditIndex(null);
  };

  return (
    <div>
      <AHome />
    <div className={`admin-services-container ${blurBackground ? 'blur-background' : ''}`}>
      <button className='add-service-button' onClick={() => setShowModal(true)}>
        Add Service
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <form className="form-container">
              <div className="form-group">
                <label htmlFor="imageUrl">Image URL:</label>
                <input
                  type="text"
                  placeholder="Image URL"
                  id="imageUrl"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  placeholder="Service Name"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  placeholder="Service Description"
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="cost">Cost:</label>
                <input
                  type="number"
                  placeholder="Service Cost"
                  id="cost"
                  value={formData.cost}
                  onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                />
              </div>
              <button type="button" onClick={handleAddService}>
                {editIndex !== null ? 'Update Service' : 'Add Service'}
              </button>            </form>
            <button className="close-modal-button" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {services.map((service, index) => (
        <div className='admin-service-card' key={index}>
          <div className='av-image'>
            <img src={service.imageUrl} alt={`Service ${index + 1}`} />
          </div>
          <div className='av_info'>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <h3>{`$${service.cost}`}</h3>
            <div className='av_icon'> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStarHalf} /> </div>
            <div className='admin-service-actions'>
              <button onClick={() => handleEditService(index)}>Edit</button>
              <button onClick={() => handleDeleteService(index)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Aservice;