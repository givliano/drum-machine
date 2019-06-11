import React from 'react';
import Padlist from './PadList';
import bankOne from './bankOne';
import bankTwo from './bankTwo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrum: 'Bank One',
      soundBank: bankOne,
      id: undefined,
      keyCode: undefined,
      keyTrigger: undefined,
      pads: [],
      url: undefined,
      volume: 0.5
    };
  };

  componentDidMount = () => {
    const pads = this.state.soundBank.map((pad) => (pad))
    this.setState({ pads });
    document.addEventListener('keydown', this.keydownHandler);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.keydownHandler);
  }

  clickHandler = (e) => {
    const activeKey = e.target.innerText;
    const { keyCode, keyTrigger, id, url } = this.state.soundBank.find((drum) => {
      return drum.keyTrigger === activeKey ?  drum : null;
    });
    this.setState(() => ({ activeKey, keyCode, keyTrigger, id, url }));
    this.playSound();
  };

  keydownHandler = (e) => {
    const activeKey = e.keyCode;
    const { keyCode, keyTrigger, id, url } = this.state.soundBank.find((drum) => {
      if (drum.keyCode === activeKey) {
        return drum;
      } else {
        return null;
      };
    });
    this.setState(() => ({ activeKey, keyCode, keyTrigger, id, url }));
    this.playSound();
  };

  volumeHandler = () => {
    const volumeInput = document.getElementById('volume');
    const volume = volumeInput.value / 100;
    this.setState(() => ({ volume }));
  };

  toggleBank = () => (
    this.state.soundBank === bankOne 
      ? 
      this.setState(() => ({ activeDrum: 'Bank Two', soundBank: bankTwo }))
      :
      this.setState(() => ({ activeDrum: 'Bank One', soundBank: bankOne }))
  );

  playSound = () => {
    if (this.state.url) {
      const audio = new Audio(`${this.state.url}`);
      audio.volume = this.state.volume;
      audio.play();
    } else { return null}
    
  };

  render() {
    return (
      <div className="container" onKeyDown={(e) => console.log(e.key)}>
        <div id="drum-machine">
          <div className="screen">{this.state.id}</div>
          <div className="pads" >
            <Padlist 
              pads={this.state.pads} 
              onClick={this.clickHandler}
              onKeyDown={this.keydownHandler}
            />
            <div className="controls-container">
              <div className="checkboxOne">
                <input onChange={this.toggleBank}
                  type="checkbox" 
                  id="checkboxOneInput"
                  name="" 
                  value="1"
                /> 
                <label htmlFor="checkboxOneInput"></label>
              </div>
              <span id="bank-label">{this.state.activeDrum}</span>
              <input 
                onChange={this.volumeHandler}
                onInput={this.volumeHandler}
                type="range" 
                id="volume" 
                name="volume" 
                min="0" 
                max="100"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
