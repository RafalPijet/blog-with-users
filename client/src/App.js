import React from 'react';

class App extends React.Component {
    state = {
        posts: []
    };

    componentDidMount() {
        fetch('http://localhost:7000/api/posts')
            .then(res => res.json())
            .then(res => this.setState({posts: res}))
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.posts.map(post =>
                    <li key={post.id}>{`title: ${post.title}, content: ${post.content}`}</li>)}
                </ul>
            </div>
        );
    }
}

export default App;
