import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header Section */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Header />
      </div>

      <div className="flex flex-grow">
        {/* Fixed Sidebar Section */}
        <div className="fixed top-[120px] left-0 w-[330px] h-[calc(100vh-60px)] z-40 bg-white shadow-md">
          <Sidebar />
        </div>

        {/* Main Outlet Section */}
        <div className="flex-grow ml-[330px] mt-[60px] p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
