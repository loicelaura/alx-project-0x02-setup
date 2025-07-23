import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex space-x-6">
      <Link href="/home">
        <span className="text-blue-600 hover:underline font-medium">Home</span>
      </Link>
      <Link href="/about">
        <span className="text-purple-600 hover:underline font-medium">About</span>
      </Link>
    </header>
  );
};

export default Header;