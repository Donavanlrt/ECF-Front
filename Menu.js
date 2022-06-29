import React from 'react';

<div class="container">
    <h1 class="decouvreznotre">Découvrez notre</h1>
    <h1 class="menu">menu.</h1>
</div>

class Menu extends React.Component {
    render() {
        return (
            <div className="meall">
            <img src={this.props.meal.image} alt={this.props.meal.name} />
        )
    }
}