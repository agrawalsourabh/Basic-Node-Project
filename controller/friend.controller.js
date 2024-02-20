const { friends } = require('../model/friend.model');

function getAllFriends(req, res) {
    res.status(200).send(friends);
}

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];

    if(friend){
        res.status(200).send(friend);
    }
    else{
        res.status(404).send({
            error: "friend not found!"
        });
    }
}

function postNewFriend(req, res) {
    if(!req.body.name || !req.body.work){
        return res.status(400).send({
            error: 'parameter error'
        });
    }
    const newFriend = {
        id: friends.length,
        name: req.body.name,
        work: req.body.work
    };

    friends.push(newFriend);

    res.status(201).send(friends);
}

module.exports = {
    getAllFriends,
    getFriend,
    postNewFriend
};