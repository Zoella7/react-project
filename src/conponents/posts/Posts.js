import React, {Component} from 'react';
import ApiService from "../services/api.service"

import Post from "../posts/Post"

class Posts extends Component {
    state = {posts: []}

    constructor(props) {
        super(props);
        this.ApiService = new ApiService();
        this.ApiService.getPosts().then(value => this.setState({posts: value}));
    }

    render() {
        return (
            <div>
                {this.state.posts.map(value => <Post key={value.id} item={value}/>)}
            </div>
        );
    }
}

export default Posts;