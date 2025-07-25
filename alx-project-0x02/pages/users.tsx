import { useEffect, useState } from 'react';
import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';

const UsersPage = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((user: any) => ({
          name: user.name,
          email: user.email,
          address: {
            street: user.address.street,
            city: user.address.city,
          },
        }));
        setUsers(formatted);
      });
  }, []);

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

export default UsersPage;
