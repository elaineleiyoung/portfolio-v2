import React from 'react';

const GoogleDrivePreview = ({ driveLink={} }) => {
  const embedUrl = `https://drive.google.com/file/d/131WlZQjFAvncRqhBt5HpX48lie8yI4zK/preview`; //change this link with new resume embed link if replacing resume

  return (
    <div className="google-drive-preview">
      <iframe
        title="Google Drive Preview"
        src={embedUrl}
        width="100%"
        height="700" 
        frameBorder="10"
        scrolling="yes"
      />
    </div>
  );
};

export default GoogleDrivePreview;
