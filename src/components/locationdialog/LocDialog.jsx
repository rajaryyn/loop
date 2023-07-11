import React from "react";
import { Dialog } from "@mui/material";

export default function LocDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="inset-0 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold mb-4">Add Location</h2>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              Detect Location
            </button>

          </div>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search Your location"
              className="rounded-l-lg p-2 border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-r-lg ml-2">
              Search
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
