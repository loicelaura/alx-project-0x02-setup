import { PostProps } from '@/interfaces';
import React from 'react';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">User ID: {userId}</p>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default PostCard;
