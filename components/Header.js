import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../public/stateforward.svg';
import { FiGithub, FiMenu } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full flex justify-between items-center font-mono text-sm mb-8 p-8 sticky z-50 top-0 border-b border-base-300 bg-black">
      <div className="flex items-center justify-start">
        <Link href="/" passHref>
         <Image src={Logo} alt="Stateforward Logo" width={220} height={30} />
        </Link>
      </div>

      <div className="hidden sm:flex items-center justify-end">
        <Link href="/docs" className="mr-8">Docs</Link>
        <Link href="/roadmap" className="mr-8">Roadmap</Link>
        <Link href="/changelog" className="mr-8">Changelog</Link>
        <a href="https://github.com/stateforward" target="_blank" rel="noopener noreferrer">
          <FiGithub className="text-white text-2xl" />
        </a>
      </div>

      <div className="sm:hidden">
        <FiMenu className="text-white text-2xl" onClick={toggleMenu} />
      </div>

      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
          <div className="absolute top-full right-0 p-5 bg-black border border-base-300 w-full z-50">
            <Link href="/docs" className="block p-2" onClick={toggleMenu}>Docs</Link>
            <Link href="/roadmap" className="block p-2" onClick={toggleMenu}>Roadmap</Link>
            <Link href="/changelog" className="block p-2" onClick={toggleMenu}>Changelog</Link>
            <a href="https://github.com/stateforward" className="block p-2" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              GitHub
            </a>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;