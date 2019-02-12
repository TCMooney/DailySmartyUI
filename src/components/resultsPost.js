import React, { Component } from 'react';

import { connect } from 'react-redux';


class ResultsPost extends Component {
    render() {
        return(
            <div className="results-post">
                <div className="results-post__wrapper">
                    <ul className="results-post__post">
                        Results go here
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(ResultsPost);