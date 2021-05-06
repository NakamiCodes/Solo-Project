import React, { Component } from 'react';
import { comopnet } from 'react-redux';
import Character from './Character.jsx';
import RosterHolder from './RosterHolder.jsx';
import { characterFilter } from '../../BackEnd/actions/actions';
import { connect } from 'node:http2';

const mapStateToProps = state => ({

})

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='container'>
                <div className='outerBox'>
                    <h1 id='header'> ARE YOU READY TO SMASH BRO???</h1>
                    <RosterHolder></RosterHolder>
                </div>
            </div>
        );
    }

};

export default MainContainer