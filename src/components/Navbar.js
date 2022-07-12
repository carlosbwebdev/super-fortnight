import React from 'react';
import { Link } from 'react-router-dom';
import Links from '../constants/links';

const Navbar = () => {
  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        {Links.map((link) => {
          return (
            <Link
              style={{ textDecoration: 'none' }}
              key={link.id}
              to={link.url}
            >
              {link.text}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
