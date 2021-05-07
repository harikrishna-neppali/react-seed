import React, { Component } from 'react';

class newComp extends Component {
  render() {
    return (
      <div>
        <h3>How to Burn it</h3>
        <pre>
          git clone https://github.com/JackPu/yarn-react-webpack-seed
        </pre>
        <p>Then you could use <code>yarn install</code></p>
        <i>Of course <code>npm install</code> does the same thinkg</i>
      </div>
    );
  }
}

export default newComp;
