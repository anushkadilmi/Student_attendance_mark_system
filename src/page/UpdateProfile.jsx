
import React, { useState, useEffect } from 'react';

const UpdateUserForm = () => {
  const [formData, setFormData] = useState({
    registerId: '', 
    fullName: '',
    gender: '',
    email: '',
    contactNumber: '',
    parentsContact: '',
    address: '',
    grade: '',
    profileImage: null,
  });

  const [error, setError] = useState('');

 
  useEffect(() => {
    
    const fetchedUserData = {
        registerId: '',
        fullName: '',
        gender: '',
        email: '',
        contactNumber: '',
        parentsContact: '',
        address: '',
        grade: '',
        profileImage: null, 
      };
    
    setFormData(fetchedUserData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profileImage: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (
      !formData.fullName ||
      !formData.gender ||
      !formData.email ||
      !formData.contactNumber|| 
      !formData.parentsContact ||
      !formData.address ||
      !formData.grade
    ) {
      setError('Please fill in all fields');
      return;
    }

    
    console.log('Updated form data:', formData);

   
    setError('');
  };

  const handleClear = () => {
    
    setFormData({
      registerId: '', 
      fullName: '',
      gender: '',
      email: '',
      contactNumber: '',
      parentsContact: '',
      address: '',
      grade: '',
      profileImage: null,
    });
    setError(''); 
  };


return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Update User Profile</h2>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Register ID:</label>
          <input
            type="text"
            name="registerId"
            value={formData.registerId}
            readOnly
            style={{ width: '100%', padding: '8px', margin: '5px 0', backgroundColor: '#f0f0f0' }}
          />
        </div>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
            style={{ marginLeft: '20px' }}
          /> Female
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>
        <div>
          <label>Parent's Contact:</label>
          <input
            type="text"
            name="parentsContact"
            value={formData.parentsContact}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>
        <div>
          <label>Grade:</label>
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>
        <div>
          <label>Profile Image:</label>
          <input
            type="file"
            onChange={handleFileChange}
            style={{ padding: '8px', margin: '10px 0' }}
          />
          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="Profile"
              style={{ width: '100px', height: '100px', marginTop: '10px' }}
            />
          )}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
            }}
          >
            Update
          </button>
          <button
            type="button"
            onClick={handleClear}
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserForm;