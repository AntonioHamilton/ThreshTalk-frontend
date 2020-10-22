import socketIOClient from 'socket.io-client';

const socket = socketIOClient('https://threshtalk.herokuapp.com/');

export default socket;
