// src/components/TeamList.jsx
import React from 'react';

function TeamList({ members }) {
  // Use dummy data if no props are provided
  const dummyMembers = [
    {
      _id: '1',
      name: 'Jane Doe',
      role: 'Founder & CEO',
      bio: 'Jane leads the team with a vision for innovation and excellence.',
      image: 'https://via.placeholder.com/150',
    },
    {
      _id: '2',
      name: 'John Smith',
      role: 'Lead Developer',
      bio: 'John is passionate about building scalable software solutions.',
      image: 'https://via.placeholder.com/150',
    },
    {
      _id: '3',
      name: 'Emily Johnson',
      role: 'Designer',
      bio: 'Emily crafts user experiences that are both functional and beautiful.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const teamData = members && members.length > 0 ? members : dummyMembers;

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {teamData.map((member) => (
        <div key={member._id} className="w-full sm:w-60 bg-white rounded-lg shadow-md p-6">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src={member.image}
            alt={member.name}
          />
          <h3 className="text-xl font-bold text-center mt-4">{member.name}</h3>
          <p className="text-center text-blue-500">{member.role}</p>
          <p className="text-gray-700 mt-2 text-center">{member.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamList;
