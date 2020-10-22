import React from 'react';
import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/core';
import {
  CustomBox,
  CustomFlex,
  CustomText,
  CustomButton,
  CustomAvatar,
  CustomWrapFlex,
} from './style';

import CommentForm from '../CommentForm';

function Comments({ comments, displayComment, id }) {
  return (
    <Box {...CustomBox}>
      {comments &&
        comments.map((comment, index) => {
          return (
            <Flex key={index} {...CustomWrapFlex}>
              <Avatar
                {...CustomAvatar}
                name="Antonio Hamilton"
                src="https://bit.ly/broken-link"
              />
              <Flex {...CustomFlex}>
                <Text {...CustomText}>{comment}</Text>
              </Flex>
            </Flex>
          );
        })}
      <Button _focus={{ boxShadow: 'none' }} {...CustomButton} variant="link">
        ver mais comentários
      </Button>
      {displayComment && <CommentForm id={id} />}
    </Box>
  );
}

export default Comments;
