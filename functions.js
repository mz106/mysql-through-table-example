const User = require("./User");

const findAllUsers = async () => {
    const users = await User.findAll();
    console.log(users);
    return users;
};

const findUser = async (username) => {
    
    const user = await User.findOne({where: {username: username}});
    
    return user;
};

module.exports = {
    findAllUsers,
    findUser,
};