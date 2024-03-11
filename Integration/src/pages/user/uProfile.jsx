// import { useState,useEffect } from 'react';
// import './../../assets/css/uProfile.css';
// import Axios from 'axios';
// const Uprofile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [name, setName] = useState('John Doe');
//   const [bio, setBio] = useState('Web Developer');
//   const [age, setAge] = useState('30');
//   const [gender, setGender] = useState('Male');
//   const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
//   const [servicesRequired, setServicesRequired] = useState('Full Stack Development');
//   const [profileImage, setProfileImage] = useState('https://placekitten.com/200/200'); // Initial profile image URL
//   useEffect(()=>{
//     Axios.get("http://localhost:8080/api/userinfo/"+localStorage.getItem('id'),{
//       headers:{
//         Authorization:"Bearer "+localStorage.getItem('token')
//       }
//     }).then((r)=>{
//       setUserData(r.data);
//     })
//   },[])
//   const handleEditClick = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSaveClick = () => {
//     setIsEditing(false);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result); 
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="background-image-container">
//     <div className="profile-container">
//       <div className="profile-image">
//         <img src={profileImage} alt="Profile" />
//         {isEditing && (
//           <div className="edit-overlay">
//             <label htmlFor="imageInput" className="edit-icon">
//               📷
//             </label>
//             <input
//               type="file"
//               id="imageInput"
//               accept="image/*"
//               onChange={handleImageChange}
//               style={{ display: 'none' }}
//             />
//           </div>
//         )}
//       </div>

//       <div className="profile-details">
//         <div className="detail">
//           <span className="label">Name:</span>
//           <span className="value">{name}</span>
//         </div>
//         <div className="detail">
//           <span className="label">Age:</span>
//           <span className="value">{age}</span>
//         </div>
//         <div className="detail">
//           <span className="label">Gender:</span>
//           <span className="value">{gender}</span>
//         </div>
//         <div className="detail">
//           <span className="label">Phone Number:</span>
//           <span className="value">{phoneNumber}</span>
//         </div>
//         <div className="detail">
//           <span className="label">Bio:</span>
//           <span className="value">{bio}</span>
//         </div>
//         <div className="detail">
//           <span className="label">Services Required:</span>
//           <span className="value">{servicesRequired}</span>
//         </div>
//       </div>

//       <div className="edit-button">
//         {!isEditing && <button onClick={handleEditClick}>Edit Profile</button>}
//       </div>

//       {isEditing && (
//         <div className="popup">
//           <div className="profile-form">
//             <>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />

//               <label htmlFor="age">Age:</label>
//               <input
//                 type="text"
//                 id="age"
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//               />

//               <label htmlFor="gender">Gender:</label>
//               <input
//                 type="text"
//                 id="gender"
//                 value={gender}
//                 onChange={(e) => setGender(e.target.value)}
//               />

//               <label htmlFor="phoneNumber">Phone Number:</label>
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />

//               <label htmlFor="bio">Bio:</label>
//               <textarea
//                 id="bio"
//                 value={bio}
//                 onChange={(e) => setBio(e.target.value)}
//               />

//               <label htmlFor="servicesRequired">Services Required:</label>
//               <input
//                 type="text"
//                 id="servicesRequired"
//                 value={servicesRequired}
//                 onChange={(e) => setServicesRequired(e.target.value)}
//               />

//               <label htmlFor="imageInput">Change Profile Photo:</label>
//               <input
//                 type="file"
//                 id="imageInput"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />

//               <button onClick={handleSaveClick}>Save</button>
//             </>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Uprofile;
// ... (import statements)
import { useState,useEffect } from 'react';
import './../../assets/css/uProfile.css';
import Axios from 'axios';
const Uprofile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [, setUserData] = useState({});
  const [name, setName] = useState('John Doe');
  const [bio, setBio] = useState('Web Developer');
  const [age, setAge] = useState('30');
  const [gender, setGender] = useState('Male');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [servicesRequired, setServicesRequired] = useState('Full Stack Development');
  const [profileImage, setProfileImage] = useState('https://placekitten.com/200/200'); // Initial profile image URL
  const [email, setEmail] = useState('john.doe@example.com'); // Add email state

  useEffect(() => {
    Axios.get(`http://localhost:8080/api/userinfo/${localStorage.getItem('id')}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((response) => {
      setUserData(response.data);
      // Set the user data to the corresponding state variables
      setName(response.data.name);
      setBio(response.data.bio);
      setAge(response.data.age);
      setGender(response.data.gender);
      setPhoneNumber(response.data.phoneNumber);
      setServicesRequired(response.data.servicesRequired);
      setProfileImage(response.data.profileImage);
      setEmail(response.data.email);
    });
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Include logic to update user data on the server if needed
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="background-image-container">
      <div className="profile-container">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
          {isEditing && (
            <div className="edit-overlay">
              <label htmlFor="imageInput" className="edit-icon">
                📷
              </label>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </div>
          )}
        </div>

        <div className="profile-details">
          <div className="detail">
            <span className="label">Name:</span>
            <span className="value">{name}</span>
          </div>
          <div className="detail">
            <span className="label">Email:</span>
            <span className="value">{email}</span>
          </div>
          <div className="detail">
            <span className="label">Age:</span>
            <span className="value">{age}</span>
          </div>
          <div className="detail">
            <span className="label">Gender:</span>
            <span className="value">{gender}</span>
          </div>
          <div className="detail">
            <span className="label">Phone Number:</span>
            <span className="value">{phoneNumber}</span>
          </div>
          <div className="detail">
            <span className="label">Bio:</span>
            <span className="value">{bio}</span>
          </div>
          <div className="detail">
            <span className="label">Services Required:</span>
            <span className="value">{servicesRequired}</span>
          </div>
        </div>

        <div className="edit-button">
          {!isEditing && <button onClick={handleEditClick}>Edit Profile</button>}
        </div>

        {isEditing && (
          <div className="popup">
            <div className="profile-form">
              <>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled
                />

                <label htmlFor="age">Age:</label>
                <input
                  type="text"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />

                <label htmlFor="gender">Gender:</label>
                <input
                  type="text"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <label htmlFor="bio">Bio:</label>
                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />

                <label htmlFor="servicesRequired">Services Required:</label>
                <input
                  type="text"
                  id="servicesRequired"
                  value={servicesRequired}
                  onChange={(e) => setServicesRequired(e.target.value)}
                />

                <label htmlFor="imageInput">Change Profile Photo:</label>
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  onChange={handleImageChange}
                />

                <button onClick={handleSaveClick}>Save</button>
              </>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Uprofile;
