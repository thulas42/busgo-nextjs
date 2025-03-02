"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function SignIn() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would call an authentication API
    console.log('Form submitted:', { email, password, isLogin });
    alert(`${isLogin ? 'Login' : 'Registration'} successful!`);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-[#4F46E5] inline-block">
            BusGo
          </Link>
          <h1 className="text-2xl font-bold mt-6 mb-2">
            {isLogin ? 'Sign in to your account' : 'Create a new account'}
          </h1>
          <p className="text-gray-600">
            {isLogin 
              ? 'Enter your credentials to access your account' 
              : 'Fill in your details to get started'}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              required
            />
          </div>
          
          {isLogin && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-600">Remember me</label>
              </div>
              <Link href="/forgot-password" className="text-blue-600 hover:text-blue-800">
                Forgot password?
              </Link>
            </div>
          )}
          
          <button 
            type="submit" 
            className="w-full bg-[#4F46E5] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#3730a3] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="ml-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
        
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-3 gap-3">
            <button className="flex justify-center items-center py-2 px-4 border rounded-md shadow-sm bg-white hover:bg-gray-50">
              <i className="fab fa-google text-red-500"></i>
            </button>
            <button className="flex justify-center items-center py-2 px-4 border rounded-md shadow-sm bg-white hover:bg-gray-50">
              <i className="fab fa-facebook text-blue-600"></i>
            </button>
            <button className="flex justify-center items-center py-2 px-4 border rounded-md shadow-sm bg-white hover:bg-gray-50">
              <i className="fab fa-apple text-gray-800"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 