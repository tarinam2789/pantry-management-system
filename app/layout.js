// app/layout.js
"use client"; // Ensure this component runs on the client side

import HomePage from '../components/HomePage';
import './globals.css'; // Adjust the path if needed

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <HomePage />
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;



