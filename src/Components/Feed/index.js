import React, { useEffect, useState } from 'react';
import { Flex, Skeleton } from '@chakra-ui/core';
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    socket.emit('send posts');
    socket.on('posts', (posts) => {
      setData(posts);
      setLoading(false);
    });
  }, []);

  return (
    <Flex {...CustomFlex}>
      {data.map((post) => {
        return (
          <Skeleton key={post.id} isLoaded={!loading}>
            <Card data={post}>
              <Comments comments={post.comments} id={post.id} />
            </Card>
          </Skeleton>
        );
      })}
    </Flex>
  );
}

export default Feed;
