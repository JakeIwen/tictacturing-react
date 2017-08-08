import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'

injectTapEventPlugin()

class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <h1>TicTacTurning</h1>
            <RaisedButton
              label={'test button'}
              primary={true}
              onTouchTap={()=>{console.log('i work')}}
            />
          </header>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>

    )
  }
}

export default Template
