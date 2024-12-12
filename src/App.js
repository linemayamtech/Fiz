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

      <div className="flex flex-grow pt-[100px]"> {/* Added padding to the top to offset the header */}
        {/* Fixed Sidebar Section */}
        <div className="fixed top-[100px] left-0 w-1/6 h-[calc(100vh-60px)] z-40 bg-white shadow-md">
          <Sidebar />
        </div>

        {/* Main Outlet Section */}
        <div className="flex-grow ml-[16.6667%] p-4"> {/* Added left margin equal to the width of the sidebar */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
