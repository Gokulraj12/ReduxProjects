import React from 'react';
import {connect} from 'react-redux';

const SongDetail=(props)=>{
    console.log("propsdetail",props);
    return(
        <div>SongDetail</div>
    );
};

const mapStatetoProps=(state)=>{
    return{songSelected:state.songSelected}
};

export default connect(mapStatetoProps)(SongDetail);