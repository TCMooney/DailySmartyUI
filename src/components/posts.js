import React, { Component } from 'react'

class Post extends Component {
    render() {
        return (
            <div>
                <li>
                    {this.props.title}
                </li>
            </div>
        );
    }
}

export default Post;