import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { CardProps } from '@/interfaces';

const Home = () => {
  const [cards, setCards] = useState<CardProps[]>([
    { title: 'First Card', content: 'This is the content of the first card.' },
    { title: 'Second Card', content: 'Here\'s some different content for the second card.' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: CardProps) => {
    setCards([newPost, ...cards]);
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Post
        </button>
      </div>

      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}

      {isModalOpen && (
        <PostModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  );
};

export default Home;