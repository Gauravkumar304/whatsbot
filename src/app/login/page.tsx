import React from 'react';
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" >
      <div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Side - Form Section */}
        <div className="w-full md:w-1/2 bg-white p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-pink-600">WhatsBot</h2>
            <p className="mt-2 text-xl font-semibold">Get more things done with Loggin platform.</p>
            <p className="mt-2 text-gray-600">Access the most powerful tool in the entire design and web industry.</p>
          </div>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="E-mail Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-200"
              >
                Login
              </button>
              <button
                className="ml-2 w-full bg-white border-2 border-pink-500 text-pink-500 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200"
              >  
              <Link href="/signup" className=""> {/* Update this link */}
              Create account 
                </Link>
               
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">Or login with</p>
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
        </div>

        {/* Right Side - Image Section */}
        <div className="hidden md:block md:w-1/2 bg-cover" style={{ backgroundImage: 'url("https://i.pinimg.com/736x/6b/99/63/6b996302beb3e127b246973ccd373d5f.jpg")' }}>
        </div>
      </div>
    </div>
  );
};

export default Login;
