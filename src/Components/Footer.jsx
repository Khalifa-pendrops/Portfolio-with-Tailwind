import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="my-4">
        <p className="text-center">
          &copy; Copyright Chikezie Ilodigwe <span className='text-[coral] font-medium'>{currentYear}</span>
        </p>
      </footer>
    </div>
  );
}
