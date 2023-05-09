import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} - Nome da sua empresa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;