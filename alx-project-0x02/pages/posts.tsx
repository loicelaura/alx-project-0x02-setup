import { GetStaticProps } from 'next';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage = ({ posts }: PostsPageProps) => {
  return (
    <>
      <Header />
      <main className="p-6 grid gap-4 md:grid-cols-2">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
