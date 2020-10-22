import React, { useState, cloneElement } from 'react';
import { Box, Flex, Image, PseudoBox, Text } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { faComments, faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  CustomBox,
  CustomFlexIcons,
  CustomImage,
  CustomTextIcons,
  CustomTextTittle,
  CustomCommentButton,
} from './style';
import http from '../../Services/PostApi';
import socket from '../../Services/SocketApi';

function Card({ children, data }) {
  const [like, setLike] = useState(false);
  const [displayComment, setDisplayComment] = useState(false);
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);

  const deleteCard = (id) => {
    http.delete(`/posts/${id}`).then((res) => {
      socket.emit('send posts');
    });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box {...CustomBox}>
      <Flex justifyContent="space-between" paddingRight="10px">
        <Text {...CustomTextTittle}>{data.message}</Text>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => deleteCard(data.id)}>Deletar</MenuItem>
        </Menu>
      </Flex>
      {data.image && <Image {...CustomImage} src={data.image} />}
      <Flex padding="6px 10px 10px 10px">
        <PseudoBox
          {...CustomFlexIcons}
          {...CustomCommentButton}
          onClick={() => setDisplayComment(!displayComment)}
        >
          <FontAwesomeIcon icon={faComments} />
          <Text {...CustomTextIcons}>Comentar</Text>
        </PseudoBox>
        <PseudoBox
          {...CustomFlexIcons}
          color={like ? 'var(--like-color)' : 'var(--icons-color)'}
          onClick={() => setLike(!like)}
        >
          <FontAwesomeIcon icon={faHeart} />
          <Text {...CustomTextIcons}>Genial</Text>
        </PseudoBox>
      </Flex>
      {cloneElement(children, { displayComment: displayComment })}
    </Box>
  );
}

export default Card;
