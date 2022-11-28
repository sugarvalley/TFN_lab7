import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                Navigation bar
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        )
    }
}
export default Nav