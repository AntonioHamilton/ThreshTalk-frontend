import React from 'react';
import { Flex } from '@chakra-ui/core';
import Feed from '../../Components/Feed';
import PostForm from '../../Components/PostForm';

function Home() {
  return (
    <Flex flexDir="column">
      <PostForm />
      <Feed />
    </Flex>
  );
}

export default Home;
