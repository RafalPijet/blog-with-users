const Post = require('./models/post.model');

const loadTestData = async () => {
    const data = [
        {
            id: "1",
            title: "First title",
            content: "<p>Neque porro quisquam est qui<u> dolorem ipsum quia dolor sit amet</u>, consectetur, adipisci velit</p>",
            author: "Big Rodrigez",
            votes: 3
        },
        {
            id: "2",
            title: "Second title",
            content: "<i>Second Test content<i><b> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</b>,<i> adipisci velit </i>",
            author: "Small John",
            votes: 5
        }];

    try {
        const postsAmount = await Post.countDocuments();

        if (postsAmount === 0) {
            console.log('No posts. Loading data...');
            await Post.create(data);
            console.log('Test data has been successfuly loaded')
        }
    } catch (err) {
        console.log('Couldn\'t load test data');
    }
};

module.exports = loadTestData;
