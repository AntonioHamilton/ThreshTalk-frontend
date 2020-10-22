import React, { useState } from 'react';

import {
  Avatar,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/core';

import {
  CustomCloseButton,
  CustomWrapFlex,
  CustomModal,
  CustomHeader,
  Form,
  CustomButton,
} from './style';

import { CustomAvatar } from '../Comments/style';
import TextareaAutosize from 'react-textarea-autosize';

import socket from '../../Services/SocketApi';
import http from '../../Services/PostApi';

function ModalPostForm({ isOpen, onClose }) {
  const [message, setMessage] = useState();
  const [image, setImage] = useState();

  const HandleSubmit = (e) => {
    if (image === '') {
      setImage(null);
    }
    e.preventDefault();
    http
      .post('/posts', {
        message: message,
        image: image,
      })
      .then(() => {
        socket.emit('send posts');
        onClose();
      })
      .catch((err) => {
        console.log(err.response);
      });
    setMessage();
    setImage();
    e.target.reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent {...CustomModal}>
        <ModalHeader {...CustomHeader}>Criar uma postagem</ModalHeader>
        <ModalCloseButton {...CustomCloseButton} />
        <ModalBody>
          <Flex {...CustomWrapFlex}>
            <Avatar
              name="Antonio Hamilton"
              src="https://bit.ly/broken-link"
              {...CustomAvatar}
            />
            <Text>Antonio Hamilton</Text>
          </Flex>
          <Form onSubmit={HandleSubmit}>
            <TextareaAutosize
              required
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Faça um texto para sua postagem"
              minRows={5}
              maxRows={20}
            />
            <Input
              margin="10px 0px"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Coloque aqui a url da imagem"
            />
            <Button
              type="Submit"
              disabled={message || image ? false : true}
              background={
                message || image
                  ? 'var(--button-color)'
                  : 'var(--button-disabled)'
              }
              _hover={
                message || image
                  ? { background: 'var(--button-color)' }
                  : { background: 'var(--button-disabled)' }
              }
              {...CustomButton}
            >
              Postar
            </Button>
          </Form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalPostForm;
