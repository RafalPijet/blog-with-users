import React from 'react';

class PostsCounter extends React.Component {

    state = {
        content: '- no posts -'
    };

    componentDidMount() {
        this.contentHandling(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.contentHandling(nextProps);
    }

    contentHandling = props => {
        const {amount, request, amountUserPosts} = props;

        if (request.pending) {
            this.setState({content: 'calculation...'})
        } else if (!request.userPosts && amount !== 0) {
            this.setState({content: amount})
        } else if (request.userPosts && amountUserPosts !== 0) {
            this.setState({content: amountUserPosts})
        } else {
            this.setState({content: '- no posts -'})
        }
    };

    render() {
        const {content} = this.state;
        return (
            <p>{`Posts amount: ${content}`}</p>
        )
    }
}

export default PostsCounter;
