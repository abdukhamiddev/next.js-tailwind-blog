import React from 'react';

const Layout = ({ children, preview }) => {
  return (
    <>
      <div>
        <video
          src="/static/logovideo.webm"
          className="rounded-full"
          height={40}
          width={50}
          quality="100"
          autoPlay
          loop
        ></video>
      </div>
      <div>{children}</div>;
    </>
  );
};

export default Layout;
