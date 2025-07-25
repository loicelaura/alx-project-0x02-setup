import Link from 'next/link';
import { useRouter } from 'next/router';

<Link href="/users">Users</Link>


const Header = () => {
  const router = useRouter();

  const isActive = (path: string) =>
    router.pathname === path ? 'text-blue-600 font-bold' : 'text-gray-700';

  return (
    <header className="bg-white shadow p-4">
      <nav className="flex space-x-4 justify-center">
        <Link href="/home" className={isActive('/home')}>
          Home
        </Link>
        <Link href="/about" className={isActive('/about')}>
          About
        </Link>
        <Link href="/posts" className={isActive('/posts')}>
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
