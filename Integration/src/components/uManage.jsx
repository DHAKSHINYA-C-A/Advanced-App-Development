import { useState ,useEffect} from 'react';
import '../assets/css/uManage.css';
import AHome from './aHome';
import axios from 'axios';
const UManage = () => {
  const [data, setData] = useState([
    { id: 1, sname: 'Service 1', details: 'Details 1', cost: 100, image: 'image1.jpg' },
    { id: 2, sname: 'Service 2', details: 'Details 2', cost: 150, image: 'image2.jpg' }
  ]);
  
  const [newItem, setNewItem] = useState({ sname: '', details: '', cost: 0, image: '' });
  const [editItemId, setEditItemId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const token=localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] =   ` Bearer ${token}`;
  console.log("Token:", token);
  console.log("Headers:", axios.defaults.headers.common);
  useEffect(() => {
    fetchServices();
  }, []);
  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/services');
      setData(response.data); 
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  };

  const handleAdd = async () =>{
   
    try {

      const response = await axios.post('http://localhost:8080/api/services', newItem);
  
      
      setData((prevData) => [...prevData, response.data]);
  
     
      setNewItem({ sname: '', details: '', cost: 0, image: '' });
      setShowForm(false);
    } catch (error) {
      console.error('Error adding service:', error);
    }
  

  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setEditItemId(id);
    setNewItem({ ...itemToEdit });
    setShowForm(true);
    setIsEditing(true);
  };


  const handleSaveEdit = () => {
    if (isEditing) {
      axios
        .put(`http://localhost:8080/api/services/${editItemId}`, newItem)
        .then(() => {
          // Handle successful edit
          // Update the state locally to reflect the changes immediately
          setData((prevData) =>
            prevData.map((item) =>
              item.id === editItemId ? { ...item, ...newItem } : item
            )
          );
        })
        .catch((error) => {
          // Handle errors, log or show an error message
          console.error('Error editing service:', error);
        })
        .finally(() => {
          setEditItemId(null);
          setNewItem({ sname: '', details: '', cost: 0, image: '' });
          setShowForm(false);
          setIsEditing(false);
        });
    } else {
      // Add logic for adding new item
    }
  };
  

  const handleDelete = async (id) =>  {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    axios
    .delete(`http://localhost:8080/api/services/${id}`)
    .then(() => {
      // Handle successful deletion
      fetchServices(); // Optionally, refresh the data after deletion
    })
    .catch((error) => {
      if (error.response.status === 403) {
        // Handle 403 error (e.g., redirect to login page)
        console.error('User is not authorized.');
      } else {
        // Handle other errors
        console.error('Error deleting service:', error);
      }
    });
  };

  return (
    <div>
      <AHome />
      
        <div>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>DETAILS</th>
              <th>COST</th>
              <th>IMAGE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  {editItemId === item.id ? (
                    <input
                      type="text"
                      name="sname"
                      value={newItem.sname}
                      onChange={handleChange}
                    />
                  ) : (
                    item.sname
                  )}
                </td>
                {/* <td>
                  {editItemId === item.id ? (
                    <input
                      type="text"
                      name="details"
                      value={newItem.image}
                      onChange={handleChange}
                    />
                  ) : (
                    item.details
                  )}
                </td> */}
                <td className="details">
  {editItemId === item.id ? (
    <input
      type="text"
      name="details"
      value={newItem.details}
      onChange={handleChange}
    />
  ) : (
    item.details
  )}
</td>
                <td>
                  {editItemId === item.id ? (
                    <input
                      type="number"
                      name="cost"
                      value={newItem.cost}
                      onChange={handleChange}
                    />
                  ) : (
                    item.cost
                  )}
                </td>
                <td>
                  {editItemId === item.id ? (
                    <input
                      type="text"
                      name="image"
                      value={newItem.image}
                      onChange={handleChange}
                    />
                  ) : (
                    item.image
                  )}
                </td>
                <td>
                  {editItemId === item.id ? (
                    <>
                      <button className='edit-btn' onClick={handleSaveEdit}>Save</button>
                      <button className='delete-btn' onClick={() => setEditItemId(null)}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button className='edit-btn' onClick={() => handleEdit(item.id)}>
                        Edit
                      </button>
                      <button className='delete-btn' onClick={() => handleDelete(item.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className="add-form">
          <button  onClick={() => setShowForm(true)}>Add New</button>
        </div>

        {showForm && (
          <div className="form-overlay">
            <div className="form-container">
              <h2>{isEditing ? 'Edit Item' : 'Add New Item'}</h2>
              <form>
                <label htmlFor="sname">Name:</label>
                <input
                  type="text"
                  id="sname"
                  name="sname"
                  value={newItem.sname}
                  onChange={handleChange}
                />

                <label htmlFor="details">Details:</label>
                <input
                  type="text"
                  id="details"
                  name="details"
                  value={newItem.details}
                  onChange={handleChange}
                />

                <label htmlFor="cost">Cost:</label>
                <input
                  type="number"
                  id="cost"
                  name="cost"
                  value={newItem.cost}
                  onChange={handleChange}
                />

                <label htmlFor="image">Image URL:</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={newItem.image}
                  onChange={handleChange}
                />

                <button type="button" onClick={isEditing ? handleSaveEdit : handleAdd}>
                  {isEditing ? 'Save' : 'Submit'}
                </button>
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
              </form>
            </div>
          </div>
        )}
      </div>
    
  );
};

export default UManage;


