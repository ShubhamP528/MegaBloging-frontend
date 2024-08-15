import React from "react";

const show = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-lg my-5 mx-auto">
      <h2 className="text-xl font-semibold mb-2">Blogging</h2>
      <p className="text-gray-700 mb-4">
        This is the descriptionof blogging web site.
      </p>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <img
          src="https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          alt="Img"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default show;
