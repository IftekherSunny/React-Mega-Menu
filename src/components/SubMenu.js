import React from 'react';
import Menu from './Menu';

class SubMenu extends React.Component
{
    render() {
        return(
            <div>
                <ul>
                    {this.props.items.map( (menu, index) => {
                        return <Menu name={menu.name}
                            url={menu.url}
                            subMenu={menu.subMenu}
                            key={index} />
                    })}
                </ul>
            </div>
        )
    }
}

export default SubMenu;