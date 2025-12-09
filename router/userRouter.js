const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'Alice' }
];

// GET users
router.get('/', (req, res) => {
    res.status(200).json(users);
});

router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
}) 
// POST user
router.post('/', (req, res) => {
    // check if body exists
    if (!req.body) {
        return res.status(400).json({ error: "Request body missing" });
    }

    // check if name exists
    if (!req.body.name) {
        return res.status(400).json({ error: "Name is required" });
    }

    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(newUser);

    res.status(201).json({
        message: "User added successfully",
        user: newUser
    });
});

router.put('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const Updateduser = req.body;

    const userIndex = users.findIndex(user => user.id === userId);  

    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    users[userIndex] = Updateduser.name;

    res.json({
        message:`User ${userId} updated successfully`,
        Updateduser: users[userIndex]
    }) 
  })

  router.delete('/:id', (req, res) => {
    const deletedId = parseInt(req.params.id);
    const filteredUsers = users.filter(user => user.id !== deletedId);
    if (users.length === filteredUsers.length) {
        return res.status(404).json({ message: "User not found" });
    }

    users = filteredUsers;
    res.json({
        message: `User ${deletedId} deleted successfully`,
        users: users
    });
});

module.exports = router;
