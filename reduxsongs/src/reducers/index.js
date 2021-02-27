import {combineReducers} from 'redux';

const songReducer=()=>{
    return [
        {title: 'Thaniyee',Duration: '2:53'},
        {title: 'Enna Sona',Duration: '3:53'},
        {title: 'Kabira',Duration: '4:53'},
        {title: 'Ae dil he mushkil',Duration: '5:53'}
    ];

};

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==="SELECTED_SONG"){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs:songReducer,
    songSelected:selectedSongReducer
});