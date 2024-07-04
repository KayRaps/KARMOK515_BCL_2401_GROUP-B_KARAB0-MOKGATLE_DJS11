import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/user'); // Adjust the API endpoint as needed
        setUser(response.data);
        setFormData({
          name: response.data.name,
          email: response.data.email,
          bio: response.data.bio
        });
      } catch (error) {
        setError('Error fetching user data');
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put('/api/user', formData); // Adjust the API endpoint as needed
      setUser(response.data);
      setEditMode(false);
    } catch (error) {
      setError('Error updating profile');
      console.error('Error updating profile:', error);
    }
  };

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="profile">
      <h1>Profile</h1>
      {editMode ? (
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Bio:
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
          <button onClick={() => setEditMode(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
