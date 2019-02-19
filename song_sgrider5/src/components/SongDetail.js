import React, { Component } from "react";
import { connect } from "react-redux";

const songDetail = ({song}) => {
    if (!song){
        return <div>Select a song</div>;
    }    
  return (<div>
      <h3>Detials for:</h3>
      <p>Title: {song.title} <br/>
          Duration: {song.duration}
      </p>
  
  </div>)
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  }
};

export default connect(mapStateToProps)(songDetail);
