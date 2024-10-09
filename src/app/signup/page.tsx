import React from 'react';


const Signup: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Side - Form Section */}
        <div className="w-full md:w-1/2 bg-white p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-600">WhatsBot</h2>
            <p className="mt-2 text-xl font-semibold">Join the platform and get started.</p>
            <p className="mt-2 text-gray-600">Access the most powerful tools in the entire design and web industry.</p>
          </div>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail Address
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="E-mail Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                required
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">Or sign up with</p>
            <div className="flex justify-center mt-2">
              <button className="mx-1 bg-blue-600 text-white px-4 py-2 rounded-lg">
                Facebook
              </button>
              <button className="mx-1 bg-red-600 text-white px-4 py-2 rounded-lg">
                Google
              </button>
              <button className="mx-1 bg-blue-400 text-white px-4 py-2 rounded-lg">
                LinkedIn
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">Already have an account? <a href="/login" className="text-blue-600 font-bold">Login</a></p>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="hidden md:block md:w-1/2 bg-cover" style={{ backgroundImage: 'url("https://i.pinimg.com/736x/6b/99/63/6b996302beb3e127b246973ccd373d5f.jpg")' }}>
        </div>
      </div>
    </div>
  );
};

export default Signup;
