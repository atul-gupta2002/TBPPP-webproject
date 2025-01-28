import React from 'react';
import { FaPlus } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='mt-5 mx-5'>
      <h1 className='fs-1 fw-bold'>Logo</h1>
      <div 
        className='mt-3 mx-2 d-flex justify-content-center align-items-center text-white rounded-circle' 
        style={{ 
          backgroundColor: "black", 
          height: '60px', 
          width: '60px',
          cursor: 'pointer' 
        }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
      >
        <FaPlus size={35} />
      </div>
    </div>
  );
}
