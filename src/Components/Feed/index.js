import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/core';
import socket from '../../Services/SocketApi';
import Card from '../Card';
import Comments from '../Comments';

const CustomFlex = {
  flexDir: 'column',
  alignItems: 'center',
  width: '100%',
};

function Feed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.emit('send posts');
    socket.on('posts', (posts) => {
      setData(posts);
    });
  }, []);

  return (
    <Flex {...CustomFlex}>
      {data.map((post) => {
        return (
          <Card key={post.id} data={post}>
            <Comments comments={post.comments} id={post.id} />
          </Card>
        );
      })}
    </Flex>
  );
}

export default Feed;
