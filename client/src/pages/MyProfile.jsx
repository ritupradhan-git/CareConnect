import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "email@gmail.com",
    phone: "+1 234 567 8904",
    address: {
      line1: "57th cross road",
      line2: "London"
    },
    gender: "Male",
    dob: "2000-01-20"
  });

  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({ ...userData });

  const handleSave = () => {
    setUserData(formData);
    setIsEdit(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-10 flex flex-col gap-6 bg-gray-50 min-h-screen relative">
      
      {/* --- Profile Header Section --- */}
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 transition-all">
        <img 
          className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md" 
          src={userData.image || assets.profile_pic} 
          alt="Profile" 
        />

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">{userData.name}</h1>
          <p className="text-[#5f6fff] font-medium mb-4">{userData.email}</p>
          
          <div className="text-gray-600 text-sm">
            <p><span className="font-semibold text-gray-400">Phone:</span> {userData.phone}</p>
          </div>

          <button 
            onClick={() => { setFormData(userData); setIsEdit(true); }}
            className="mt-6 px-8 py-2 bg-[#5f6fff] text-white rounded-full text-sm font-medium hover:bg-[#4b58db] transition-all active:scale-95"
          >
            Edit Profile
          </button>
        </div>
      </div>

      <hr className="border-none h-[1px] bg-gray-200" />

      {/* --- Personal Information Display --- */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
          Personal Information
          <span className="h-[2px] w-12 bg-[#5f6fff] inline-block"></span>
        </h2>

        <div className="grid grid-auto-fit-200 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Gender</p>
            <p className="text-gray-800 font-medium">{userData.gender}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Date of Birth</p>
            <p className="text-gray-800 font-medium">{userData.dob}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Address</p>
            <p className="text-gray-800">{userData.address.line1}, {userData.address.line2}</p>
          </div>
        </div>
      </div>

      {/* --- EDIT MODAL POPUP --- */}
      {isEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-800">Edit Profile</h3>
              <p className="text-sm text-gray-500">Update your personal information below.</p>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5f6fff] outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Phone & Gender Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="text" 
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5f6fff] outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <select 
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5f6fff] outline-none"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* DOB */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input 
                  type="date" 
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5f6fff] outline-none"
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input 
                  type="text" 
                  placeholder="Address Line 1"
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5f6fff] outline-none"
                  value={formData.address.line1}
                  onChange={(e) => setFormData({ ...formData, address: { ...formData.address, line1: e.target.value } })}
                />
                <input 
                  type="text" 
                  placeholder="Address Line 2"
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5f6fff] outline-none"
                  value={formData.address.line2}
                  onChange={(e) => setFormData({ ...formData, address: { ...formData.address, line2: e.target.value } })}
                />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-6 border-t border-gray-100 flex items-center justify-end gap-3 bg-gray-50">
              <button 
                onClick={() => setIsEdit(false)}
                className="px-6 py-2 text-gray-600 font-medium hover:bg-gray-200 rounded-lg transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary shadow-md transition-all active:scale-95"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;