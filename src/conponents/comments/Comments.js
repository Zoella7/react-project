import React, {Component} from 'react';
import Comment from "./Comment"

import ApiService from "../services/api.service"

class Comments extends Component {
    state = {comments: []};

    constructor(props) {
        super(props);
        this.ApiService = new ApiService();
        this.ApiService.getComments().then(value => this.setState({comments:value}));
    }


    render() {

        return (
            <div>

                {this.state.comments.map(value => <Comment key={value.id} item={value}/>)}
            </div>
        );
    }
}

export default Comments;