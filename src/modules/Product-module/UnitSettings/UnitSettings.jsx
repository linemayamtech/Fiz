import React, { useState } from 'react';
import LinkUnit from './LinkUnit';
import CreateUnit from './CreateUnit';

const UnitSettings = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState('linkUnit');

  // Function to handle link click and set active state
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='px-[30px]'>
      <div>
        <h1 className='text-[#667085] font-semibold text-xl'>Unit Settings</h1>
      </div>
      
      {/* Links for navigation */}
      <div className='flex gap-[30px] py-[15px]'>
        <a
          href="#"
          className={`text-[#667085] font-semibold ${activeLink === 'linkUnit' ? 'text-[#FF0000] underline' : ''}`}
          style={{ textDecorationThickness: '3px', textDecorationColor: '#FF0000' }}
          onClick={() => handleLinkClick('linkUnit')}
        >
          Link Unit to HSN
        </a>
        <a
          href="#"
          className={`text-[#667085] font-semibold ${activeLink === 'createUnit' ? 'text-[#FF0000] underline' : ''}`}
          style={{ textDecorationThickness: '3px', textDecorationColor: '#FF0000' }}
          onClick={() => handleLinkClick('createUnit')}
        >
          Create Unit
        </a>
      </div>

      {/* Render the active component based on the state */}
      <div>
        {activeLink === 'linkUnit' ? <LinkUnit /> : <CreateUnit />}
      </div>
    </div>
  );
};

export default UnitSettings;
