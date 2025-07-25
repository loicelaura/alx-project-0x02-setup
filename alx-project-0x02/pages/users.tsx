import { GetStaticProps } from 'next';
import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage = ({ users }: UsersPageProps) => {
  return (
    <>
      <Header />
      <main className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </main>
    </>
  );
};

// ✅ Static generation with async/await
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }));

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
