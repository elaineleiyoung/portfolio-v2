import React from 'react';
import { Navigation } from '../components/nav';
import GoogleDrivePreview from './GoogleDrivePreview';

const YourComponent = () => {
  const googleDriveLink = 'https://drive.google.com/your-file-link';
  

  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center justify-center h-5/6">
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 w-5/6 pt-24 flex-grow">
          <GoogleDrivePreview driveLink={googleDriveLink} />
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
