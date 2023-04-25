
const { User, Thought } = require('../models');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            const userObj = {
                username,
            };
            return res.json(userObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id })
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({ _id: req.params.id });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            await Application.updateMany({ _id: { $in: user.applications } });
            res.json({ message: 'User and associated apps deleted!' })
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.id });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            await Application.deleteMany({ _id: { $in: user.applications } });
            res.json({ message: 'User and associated apps deleted!' })
        } catch (err) {
            res.status(500).json(err);
        }
    },

};