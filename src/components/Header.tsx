import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
      <h1 className="text-lg font-semibold leading-normal">
        Resume builder
      </h1>
      
      <div className="flex items-center gap-6">
        {/* Info Icon */}
        <button className="p-1 hover:bg-gray-100 rounded-lg">
          <img src="/info.svg" alt="Info" width={24} height={24} />
        </button>

        {/* Settings Icon */}
        <button className="p-1 hover:bg-gray-100 rounded-lg">
          <img src="/settings.svg" alt="Settings" width={24} height={24} />
        </button>
        
        {/* User Profile */}
        <div className="flex items-center gap-1">
          <img src="/Avatar.png" alt="User Avatar" className="w-8 h-8 rounded-full object-cover" />
          <img src="/arrow-down.svg" alt="Dropdown" width={24} height={24} />
        </div>
      </div>
    </header>
  );
};
