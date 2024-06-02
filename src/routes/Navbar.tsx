

import React from 'react';
import { NavLink } from 'react-router-dom';

interface Page {
  id: number;
  to: string;
  name: string;
}

const pages: Page[] = [
  { id: 1, to: "/", name: "Home" },
  { id: 2, to: "/ido", name: "IDO" },
  { id: 3, to: "/token", name: "Tokenomics" },
  { id: 4, to: "/roadmap", name: "Roadmap" },
  { id: 5, to: "/coming", name: "Coming Soon" },
];

const Navbar: React.FC = () => {
  return (
    <div className='flex justify-center items-center gap-[24px] w-[583px] h-[52px] px-6 py-4 bg-black text-white text-[20px] leading-5 rounded-3xl'>
      {pages.map((el) => (
        <NavLink key={el.id} to={el.to}>{el.name}</NavLink>
      ))}
    </div>
  );
};

export default Navbar;
