import React from 'react';
import {connect} from 'react-redux';

const SongDetail=(props)=>{
    //console.log("propsdetail",props);
    if(!props.songSelected){
        return <div>Select a song</div>
    }
        
    return(
        <div className='ui container'>
            <div className='ui segment'>
                <div className='header'>
                    <h2>Song Details</h2>
                </div>
                <div className='content'>
                    {props.songSelected.title}
                </div>
                <div className='content'>
                    {props.songSelected.Duration}
                </div>
            </div>
        </div>
    );
};

const mapStatetoProps=(state)=>{
    return{songSelected:state.songSelected}
};

export default connect(mapStatetoProps)(SongDetail);