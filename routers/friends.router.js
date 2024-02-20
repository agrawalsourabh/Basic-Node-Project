const express = require('express');
const { getAllFriends, getFriend, postNewFriend } = require('../controller/friend.controller');

const friendsRouter = express.Router();

friendsRouter.get('/', getAllFriends);
friendsRouter.get('/:friendId', getFriend);
friendsRouter.post('/', postNewFriend);

module.exports = {
    friendsRouter
};