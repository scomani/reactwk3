import React, { Component } from 'react'




export default class Childcomponent extends Component {
    render() {
        const item = this.props.objects.map(objects => {
            return <h1>{objects.item}</h1>;
        })
        return <div>{item}</div>;
    }
}