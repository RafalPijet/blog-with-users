const uuid = require('uuid');
const Post = require('./models/post.model');
const User = require('./models/user.model');

const loadTestData = async () => {

    try {
        const postsAmount = await Post.countDocuments();
        const usersAmount = await User.countDocuments();

        if (postsAmount === 0 && usersAmount === 0) {
            console.log('No posts and users. Loading data...');

            const firstPost = new Post({
                id: uuid.v4(),
                title: "First title",
                content: "<p>Neque porro quisquam est qui<u> dolorem ipsum quia dolor sit amet</u>, consectetur, adipisci velit</p>",
                author: "",
                votes: 3
            });

            const secondPost = new Post({
                id: uuid.v4(),
                title: "Second title",
                content: "<i>Second Test content<i><b> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</b>,<i> adipisci velit </i>",
                author: "",
                votes: 5
            });

            const firstUser = new User({
                id: uuid.v4(),
                firstName: "Big",
                lastName: "Rodrigez",
                email: "rodrigez@gmail.com",
                password: "rodrigez"
            });

            const secondUser = new User({
                id: uuid.v4(),
                firstName: "Small",
                lastName: "John",
                email: "john@gmail.com",
                password: "john"
            });

            firstPost.author = `${firstUser.firstName} ${firstUser.lastName}`;
            firstUser.posts.push(firstPost);
            secondPost.author = `${secondUser.firstName} ${secondUser.lastName}`;
            secondUser.posts.push(secondPost);

            firstPost.save();
            firstUser.save();
            secondPost.save();
            secondUser.save();
        }
        console.log('Test data has been successfuly loaded');
    } catch (err) {
        console.log('Couldn\'t load test data: ' + err);
    }
};

module.exports = loadTestData;
