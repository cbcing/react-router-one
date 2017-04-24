/**
 * Created by David on 4/24/17.
 */
import React from 'react'

class Repo extends React.Component {
    render() {
        return(
            <div>
                <h2>{this.props.params.userName} {this.props.params.repoName}</h2>
            </div>
        );
    }
}

export default Repo;
