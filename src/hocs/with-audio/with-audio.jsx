import React, {createRef, PureComponent} from 'react';
import {withAudioType} from './with-audio-type';

const withAudio = (component) => {
  class withAudio extends PureComponent {
    constructor(props) {
      super(props);

      this._audioRef = createRef();
      
      this.state = {
        isLoading = true,
      }
    }

    componentDidMount() {
      const {src} = this.props;
      const audio = this._audioRef.current;
  
      audio.src = src;
  
      audio.oncanplaythrough = () => this.setState({
        isLoading: false,
      });
    }
  
    componentWillUnmount() {
      const audio = this._audioRef.current;
  
      audio.oncanplaythrough = null;
    }

  }  
}