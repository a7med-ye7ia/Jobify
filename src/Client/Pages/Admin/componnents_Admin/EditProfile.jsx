const EditProfile = () => {
  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Edit Profile</h2>
        </div>

        {/* إضافة margin-top لتحديد المسافة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {" "}
          {/* أضف mt-6 أو mt-8 حسب الحاجة */}
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-4">Personal</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of birth
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Birth Date"
                    className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Education level
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Master"
                    className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-4">Contact</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter e-mail"
                  className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="+20"
                    className="focus:outline-[#309689] w-16 p-2.5 rounded-lg border border-gray-300"
                  />
                  <input
                    type="tel"
                    placeholder="1555193171"
                    className="focus:outline-[#309689] flex-1 min-w-0 p-2.5 rounded-lg border border-gray-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Country"
                    className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="City"
                    className="focus:outline-[#309689] w-full p-2.5 rounded-lg border border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

            <button className="w-full sm:w-auto px-6 py-2.5 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors">
          Save
        </button>
      </div>
    </div>
  );
};
export default EditProfile;
