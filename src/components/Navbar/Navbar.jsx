import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
          <div className="container mx-auto">
            <ul className="flex justify-end space-x-4">
              <li><a href="/">Home</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          </div>
        </nav>
      );
    }

export default Navbar
