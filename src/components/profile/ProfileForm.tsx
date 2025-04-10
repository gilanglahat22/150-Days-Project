import React, { useState } from 'react';

interface ProfileData {
  fullName: string;
  nickName: string;
  gender: string;
  country: string;
  language: string;
  timeZone: string;
  email: string;
}

interface ProfileFormProps {
  initialData?: Partial<ProfileData>;
  onSave?: (data: ProfileData) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  initialData = {},
  onSave
}) => {
  const [formData, setFormData] = useState<ProfileData>({
    fullName: initialData.fullName || '',
    nickName: initialData.nickName || '',
    gender: initialData.gender || '',
    country: initialData.country || '',
    language: initialData.language || '',
    timeZone: initialData.timeZone || '',
    email: initialData.email || 'delei@gmail.com',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave && onSave(formData);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="h-32 bg-gradient-to-r from-blue-200 to-blue-50 rounded-t-xl"></div>
      
      <div className="px-6 pb-6">
        <div className="flex justify-between items-center -mt-12 mb-6">
          <div className="flex items-center">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold border-4 border-white">
              {formData.fullName ? formData.fullName.charAt(0) : 'D'}
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{formData.fullName || 'Delista'}</h2>
              <p className="text-gray-500">{formData.email}</p>
            </div>
          </div>
          
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 transition"
            onClick={handleSubmit}
          >
            Edit
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your First Name"
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nick Name</label>
              <input
                type="text"
                name="nickName"
                value={formData.nickName}
                onChange={handleChange}
                placeholder="Your First Name"
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <div className="relative">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <div className="relative">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                >
                  <option value="">Select Country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
              <div className="relative">
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                >
                  <option value="">Select Language</option>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                  <option value="de">German</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
              <div className="relative">
                <select
                  name="timeZone"
                  value={formData.timeZone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                >
                  <option value="">Select Time Zone</option>
                  <option value="utc">UTC</option>
                  <option value="est">EST (UTC-5)</option>
                  <option value="cst">CST (UTC-6)</option>
                  <option value="pst">PST (UTC-8)</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">My email Address</h3>
            <div className="flex items-center p-3 border border-gray-200 rounded-lg mb-3">
              <input
                type="radio"
                checked={true}
                readOnly
                className="mr-3 h-4 w-4 text-primary focus:ring-primary"
              />
              <div className="flex-1">
                <div className="font-medium">{formData.email}</div>
                <div className="text-sm text-gray-500">1 month ago</div>
              </div>
            </div>
            
            <button 
              type="button" 
              className="mt-2 px-5 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-100 transition"
            >
              + Add Email Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm; 