import { useState } from 'react';
import '../assets/css/uManage.css';
import AHome from './aHome';
const UManage = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const [newItem, setNewItem] = useState({ name: '', email: '' });
  const [editItem, setEditItem] = useState({ id: null, name: '', email: '' });

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'add') {
      setNewItem((prevItem) => ({
        ...prevItem,
        [name]: value
      }));
    } else {
      setEditItem((prevItem) => ({
        ...prevItem,
        [name]: value
      }));
    }
  };

  const handleAdd = () => {
    setData((prevData) => [...prevData, { id: Date.now(), ...newItem }]);
    setNewItem({ name: '', email: '' });
  };

  const handleEdit = (id, name, email) => {
    setEditItem({ id, name, email });
  };

  const handleSaveEdit = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === editItem.id ? { ...editItem } : item
      )
    );
    setEditItem({ id: null, name: '', email: '' });
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div>
        <AHome/>
    <div className="container">
      <h1 className="tt">User Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                {editItem.id === item.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editItem.name}
                    onChange={(e) => handleChange(e, 'edit')}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editItem.id === item.id ? (
                  <input
                    type="email"
                    name="email"
                    value={editItem.email}
                    onChange={(e) => handleChange(e, 'edit')}
                  />
                ) : (
                  item.email
                )}
              </td>
              <td>
                {editItem.id === item.id ? (
                  <>
                    <button className='edit-btn' onClick={handleSaveEdit}>Save</button>
                    <button className='delete-btn'  onClick={() => setEditItem({ id: null, name: '', email: '' })}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button className='edit-btn'onClick={() => handleEdit(item.id, item.name, item.email)}>
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
      <div className="add-form">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newItem.name}
          onChange={(e) => handleChange(e, 'add')}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={newItem.email}
          onChange={(e) => handleChange(e, 'add')}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
    </div>
  );
};

export default UManage;
