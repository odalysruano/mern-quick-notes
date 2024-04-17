const Note = require('../../models/note');
const User = require('../../models/user');


module.exports = {
    index,
    create,
};

async function index(req, res) {
    const user = await User.findOne({ email: req.user.email });
    const notes = await Note.find({ user: user._id }).sort('createdAt');
    res.json(notes);
}

async function create(req, res) {
    try {
        const user = await User.findOne({ email: req.user.email });
        await Note.create({
            text: req.body,
            user: user._id,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}
