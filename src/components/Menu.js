import React from 'react';
import SubMenu from './SubMenu';

class Menu extends React.Component
{
    render() {
        const { name, url, subMenu } = this.props;

        return(
            <div>
                <li>
                    <a href={url}>{name}</a>

                    <SubMenu items={subMenu}/>
                </li>
            </div>
        )
    }
}

export default Menu;