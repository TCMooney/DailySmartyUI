import React, { Component } from 'react';

import { connect } from 'react-redux';

import Post from './posts';

class ResultsPost extends Component {

    renderPosts() {
        const posts = this.props.posts.map((post, index) => {
            return <Post key={index} {...post}/>
        })
        return posts
    }

    render() {
        return(
            <div className="results-post">
                <div className="results-post__wrapper">
                    <ul className="results-post__post">
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.resultsPosts
    }
}

export default connect(mapStateToProps)(ResultsPost);