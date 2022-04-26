const express = require('express')
require('dotenv').config();
require('./models/db')

const User = require('./models/user')
const app = express();
app.post('/create-user', async (req, res) => {
    const isNewUser = await User.userExist('F12');
    if(!isNewUser) return res.json({
        success:false,
        message:'This userId already in use, try sign-in.'
    })
    const user = await User({ userId: 'F12', password: '1234' });
    await user.save();
    res.json(user);
})

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(8000, () => {
    console.log('Port is listening');
});
