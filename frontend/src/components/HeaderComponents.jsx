import React, { Component } from 'react';
import './ComponentsStyle.css';

class HeaderComponents extends Component {
    render() {
        return (
            <div>
                <header className='header header-headercomponents'>
                    <h2>
                        <em>
                            <strong>В данном разделе вы можете 
                                поработать с базовыми запросам RESTAPI
                            </strong>
                        </em>
                    </h2>
                </header>
            </div>
        );
    }
}

export default HeaderComponents;