import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function TeamManagement() {
  const { token } = useContext(AuthContext);
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    bio: '',
    image: '',
  });
  const [error, setError] = useState('');
  const [editingMemberId, setEditingMemberId] = useState(null);
  const [editingMemberData, setEditingMemberData] = useState({
    name: '',
    role: '',
    bio: '',
    image: '',
  });

  // Function to fetch team members from the backend
  const fetchTeamMembers = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/teams`)
      .then((response) => {
        setTeamMembers(response.data);
      })
      .catch((err) => {
        console.error('Error fetching team members:', err);
        setError('Failed to fetch team members.');
      });
  };

  // Fetch team members on component mount
  useEffect(() => {
    fetchTeamMembers();
  }, []);

  // Function to create a new team member
  const handleCreate = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/teams`, newMember, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setNewMember({ name: '', role: '', bio: '', image: '' });
        fetchTeamMembers();
      })
      .catch((err) => {
        console.error('Error creating team member:', err);
        setError('Failed to create team member.');
      });
  };

  // Function to delete a team member
  const handleDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/teams/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        fetchTeamMembers();
      })
      .catch((err) => {
        console.error('Error deleting team member:', err);
        setError('Failed to delete team member.');
      });
  };

  // Function to start editing a team member
  const startEditing = (member) => {
    setEditingMemberId(member._id);
    setEditingMemberData({
      name: member.name,
      role: member.role,
      bio: member.bio,
      image: member.image,
    });
  };

  // Function to cancel editing
  const cancelEditing = () => {
    setEditingMemberId(null);
    setEditingMemberData({ name: '', role: '', bio: '', image: '' });
  };

  // Function to update a team member
  const handleUpdate = () => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/teams/${editingMemberId}`,
        editingMemberData,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        fetchTeamMembers();
        cancelEditing();
      })
      .catch((err) => {
        console.error('Error updating team member:', err);
        setError('Failed to update team member.');
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Team Members</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {/* Form to create a new team member */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Add New Team Member</h3>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border mb-2"
          value={newMember.name}
          onChange={(e) =>
            setNewMember({ ...newMember, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Role"
          className="w-full p-2 border mb-2"
          value={newMember.role}
          onChange={(e) =>
            setNewMember({ ...newMember, role: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-2 border mb-2"
          value={newMember.image}
          onChange={(e) =>
            setNewMember({ ...newMember, image: e.target.value })
          }
        />
        <textarea
          placeholder="Bio"
          className="w-full p-2 border mb-2"
          value={newMember.bio}
          onChange={(e) =>
            setNewMember({ ...newMember, bio: e.target.value })
          }
        ></textarea>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleCreate}
        >
          Add Member
        </button>
      </div>
      {/* List of existing team members */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Current Team Members</h3>
        {teamMembers.map((member) => (
          <div key={member._id} className="border-b mb-4 pb-4">
            {editingMemberId === member._id ? (
              // Edit form for the selected team member
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border mb-2"
                  value={editingMemberData.name}
                  onChange={(e) =>
                    setEditingMemberData({
                      ...editingMemberData,
                      name: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Role"
                  className="w-full p-2 border mb-2"
                  value={editingMemberData.role}
                  onChange={(e) =>
                    setEditingMemberData({
                      ...editingMemberData,
                      role: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  className="w-full p-2 border mb-2"
                  value={editingMemberData.image}
                  onChange={(e) =>
                    setEditingMemberData({
                      ...editingMemberData,
                      image: e.target.value,
                    })
                  }
                />
                <textarea
                  placeholder="Bio"
                  className="w-full p-2 border mb-2"
                  value={editingMemberData.bio}
                  onChange={(e) =>
                    setEditingMemberData({
                      ...editingMemberData,
                      bio: e.target.value,
                    })
                  }
                ></textarea>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                  onClick={handleUpdate}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={cancelEditing}
                >
                  Cancel
                </button>
              </div>
            ) : (
              // Display team member information
              <div>
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="text-blue-500">{member.role}</p>
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full mt-2"
                  />
                )}
                <p>{member.bio}</p>
                <div className="mt-2">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => startEditing(member)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(member._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamManagement;
