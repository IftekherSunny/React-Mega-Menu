import React from 'react';
import Menu from './Menu';

class Container extends React.Component
{
    state = {
        menus: [
            { name: 'Home', url: 'https://google.com', subMenu: [] },
            { name: 'About', url: 'https://google.com', subMenu: [
                    { name: 'About One', url: 'https://google.com', subMenu: [
                        { name: 'About Child One', url: 'https://google.com', subMenu: [
                            { name: 'Child\'s Child One', url: 'https://google.com', subMenu: [] }
                        ] }
                    ] }
                ]
            }
        ]
    };

    render() {
        return(
            <div>
                <ul>
                    {this.state.menus.map( (menu, index) => {
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


export default Container;