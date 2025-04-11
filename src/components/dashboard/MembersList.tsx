import React from 'react';

interface Member {
  id: string;
  name: string;
  avatar?: string;
  color?: string;
}

interface MembersListProps {
  members: Member[];
}

const MembersList: React.FC<MembersListProps> = ({ members }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700 dark:text-white">Members</h3>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-center">
        {members.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            {member.avatar ? (
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="w-12 h-12 rounded-full mb-1"
              />
            ) : (
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white mb-1 ${member.color || 'bg-primary'}`}
              >
                {member.name.charAt(0)}
              </div>
            )}
            <span className="text-xs text-gray-600 dark:text-gray-300">{member.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersList; 