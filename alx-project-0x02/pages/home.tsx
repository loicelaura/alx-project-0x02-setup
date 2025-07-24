import React from 'react';
import Card from '../components/common/Card';

const Home = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Home Page</h1>

      <Card
        title="First Card"
        content="This is the content of the first card."
      />
      <Card
        title="Second Card"
        content="Here's some different content for the second card."
      />
      <Card
        title="Third Card"
        content="The third card has its own unique message."
      />
    </div>
  );
};

export default Home;