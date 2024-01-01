import React from 'react';

const HomeLayout = (props) => {
  const { children } = props;

  return (
<div className="flex flex-col md:flex-row ">
  <div className="w-full md:w-2/1 md:ms-0 md:flex md:flex-col md:justify-end mt-10">
    {children && children.leftContent}
  </div>

  <div className="w-full p-5 ">
  {children && children.midContent}

  </div>

  <div className="w-full  bg-blue-700 p-2 ">
    {children && children.rightContent}
  </div>
</div>
  );
};

export default HomeLayout;