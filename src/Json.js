import React, { Component } from 'react';

const url = "https://api.guildwars2.com/v2/pets/33";

export default class Json extends Component {
    state = {
        loading: true,
        pet: null,
    };

    render() {
        return (
            <div className="json">
                {this.state.loading || !this.state.pet ? (
                    <div>Loading....</div>
                    ) : (<div>pet</div>)}
            </div>
        );
    }
}