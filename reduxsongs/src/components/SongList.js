import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from'../actions';

class SongList extends React.Component{
    renderedSongs=()=>{
        return this.props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                                onClick={()=>this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    };
    render(){
        //console.log(this.props.songs);
        return(
            <div className="ui divided list">
                {this.renderedSongs()}
            </div>
        );
    }
}

const mapStatetoProps=state=>{
    console.log(state);
    return {songs: state.songs} ;
};

export default connect(mapStatetoProps,{selectSong})(SongList);    