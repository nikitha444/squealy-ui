import React, { Component } from 'react'
import './MainComponent.css'
import logo from '../../assets/logo.png'
import ChartsDashBoard from '../ChartsDashBoard/ChartsDashBoard'
import ReportsDashBoard from '../ReportsDashBoard/ReportsDashBoard'
import SettingsDashBoard from '../SettingsDashBoard/SettingsDashBoard'
import QuerySection from '../QuerySection/QuerySection'

const buttonStyle = {
    borderRadius: 0,
    width: '14%',
    color: 'gray',
    fontweight: 'bold',
    backgroundColor: '#00123a',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1em'
  }
  
const activeButtonStyle = {
    borderRadius: 0,
    backgroundColor: '#00123a',
    border: 'none',
    width: '14%',
    color: '#ffffff',
    fontweight: 'bold',
    cursor: 'pointer',
    fontSize: '1em'
}

export default class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          chartsTab: true,
          reportsTab: false,
          settingstab: false,
          chartsButton: activeButtonStyle,
          reportsButton: buttonStyle,
          settingsButton: buttonStyle,
          showCharts: false
        }
      }
      onClickChartsTab = () => {
          this.setState({
            chartsTab: true, reportsTab: false, settingstab: false, chartsButton: activeButtonStyle,
            reportsButton: buttonStyle, settingsButton: buttonStyle
          })
      }
      onClickReportsTab = () => {
        this.setState({
          chartsTab: false, reportsTab: true, settingstab: false, chartsButton: buttonStyle,
          reportsButton: activeButtonStyle, settingsButton: buttonStyle
        })
      }
      onClickSettingsTab = () => {
        this.setState({
          chartsTab: false, reportsTab: false, settingstab: true, chartsButton: buttonStyle,
          reportsButton: buttonStyle, settingsButton: activeButtonStyle
        })
      }
      onClickCharts = () => {
        this.setState({showCharts:true})
      }
      render(){
          const {chartsButton, reportsButton, settingsButton, chartsTab, reportsTab} = this.state
          console.log("charts", this.state.showCharts)
          return(
              <div className="mainContainer">
                <div className="chartsHeader">
                    <div className="headerNav">
                        <div className="headerNavbar">
                            <img src={logo} alt={logo} className="logo"/>
                            <button
                                className="chartsTab"
                                style={chartsButton}
                                onClick={this.onClickChartsTab}>Charts</button>
                            <button
                                className="reportsTab"
                                style={reportsButton}
                                onClick={this.onClickReportsTab}>Reports</button>
                            <button
                                className="settingstab"
                                style={settingsButton}
                                onClick={this.onClickSettingsTab}>Settings</button>
                        </div>
                        <div className="headerLogin">
                        </div>
                    </div>
                </div> 
                <div className="Container">
                    {chartsTab ?
                    //     this.state.showCharts?
                    //         <div>
                    //             <QuerySection 
                    //             onClickCharts={this.state.onClickCharts.bind(this)}/>
                    //         </div>
                    //     :
                    // <ChartsDashBoard />
                    <QuerySection 
                        onClickCharts={this.state.onClickCharts}/>
                    : reportsTab ?
                    <ReportsDashBoard />
                    : 
                    <SettingsDashBoard />
                    }
                </div>           
              </div>
          )
    }
}
