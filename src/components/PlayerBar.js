import React, { Component } from 'react';
import "./player.css";

class PlayerBar extends Component {
	render () {
		return (
			<section className="player-bar">Currently playing:
				<section id="current-song-displayed">
					{this.props.currentSong.title} by {this.props.artist}
				</section>
          <div className="total-time">{ this.props.formatTime(this.props.currentTime) } / {this.props.formatTime(this.props.duration)}</div>
        <section id="time-control">
           <input
             type="range"
             className="seek-bar"
             value={(this.props.currentTime / this.props.duration) || 0}
             max="1"
             min="0"
             step="0.01"
						 onChange={this.props.handleTimeChange}
           />
        </section>

				<section id="buttons">
           <button id="previous" onClick={this.props.handlePrevClick}>
             <span className="ion-reply"></span>
           </button>
           <button id="play-pause" onClick={this.props.handleSongClick} >
						<span className={this.props.isPlaying ? 'ion-android-hand' : 'ion-music-note'}></span>
           </button>
           <button id="next" onClick={this.props.handleNextClick} >
             <span className="ion-forward"></span>
           </button>
        </section>
<p></p>
        <section id="volume-control">
					<div className="ion-volume-low" onClick={ this.props.handleVolumeDownClick}></div>
            <input
					 		type="range"
							className="seek-bar"
							value={this.props.volume}
							max="1"
							min="0"
              step="0.01"
							onChange={this.props.handleVolumeChange}
						/>
				  <div className="ion-volume-high" onClick={ this.props.handleVolumeUpClick}></div>
        </section>
			</section>
		);
	}
}

export default PlayerBar;
