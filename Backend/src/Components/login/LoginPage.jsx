import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Here you can add your login logic. For example, you can make an API call to validate the user's credentials.
    // If successful, you can redirect the user to another page.

    // Example: Checking if the email and password match some predefined values
    if (email === '@gmail.com' && password === '123') {
      alert('Login successful! Redirecting...');
      // You can use react-router or any other routing library for navigation.
      // For now, we'll just simulate a redirect with window.location.href
      window.location.href = '/dashboard';
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 space-y-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-green-600 text-center">Login</h2>
        <form>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 px-3 py-2 block w-full border border-green-500 rounded-md bg-gray-100 text-gray-800 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 px-3 py-2 block w-full border border-green-500 rounded-md bg-gray-100 text-gray-800 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={handleLogin}
              className="px-4 py-2 text-white bg-green-600 rounded-md font-semibold hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-500">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
