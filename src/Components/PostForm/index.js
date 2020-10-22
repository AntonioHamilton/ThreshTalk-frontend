import React from 'react';
import { Avatar, Box, Button, Flex, useDisclosure } from '@chakra-ui/core';

import { CustomBox, CustomButton, CustomFlex } from './style';
import ModalPostForm from '../ModalPostForm';
import { CustomAvatar } from '../Comments/style';

function PostForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex {...CustomFlex}>
      <Box {...CustomBox}>
        <Avatar
          name="Antonio Hamilton"
          src="https://bit.ly/broken-link"
          {...CustomAvatar}
        />
        <Button onClick={onOpen} {...CustomButton}>
          Faça uma postagem
        </Button>
      </Box>
      <ModalPostForm isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default PostForm;
