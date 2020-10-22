import React, { useState } from 'react';

import { FormControl } from '@chakra-ui/core';
import { CustomForm, CustomIcon, Icon, AutoSize } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TextareaAutosize from 'react-textarea-autosize';
import http from '../../Services/PostApi';
import socket from '../../Services/SocketApi';

function CommentForm({ id }) {
  const [comment, setComment] = useState();

  const HandleSubmit = (e) => {
    e.preventDefault();
    http
      .post(`/posts/${id}/comments`, {
        comment,
      })
      .then(() => {
        socket.emit('send posts');
      });
    setComment('');
    e.target.reset();
  };

  return (
    <form onSubmit={HandleSubmit}>
      <FormControl {...CustomForm}>
        <AutoSize>
          <TextareaAutosize
            required
            onChange={(e) => setComment(e.target.value)}
            maxRows={20}
            placeholder="Digite aqui seu comentário"
          />
        </AutoSize>
        <Icon type="submit">
          <FontAwesomeIcon {...CustomIcon} icon={faArrowRight} />
        </Icon>
      </FormControl>
    </form>
  );
}

export default CommentForm;
