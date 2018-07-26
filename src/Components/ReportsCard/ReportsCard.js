import React, { Component } from 'react'
import './ReportsCard.css'
import Button from '@material-ui/core/Button';

export default class ReportsCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sendMail: false
        }
    }
    sendMail=()=>{
        this.setState({sendMail:true})
    }
    render() {
        const {reporttype} = this.props
        return(
            <div className="eachReportCard">
                <div className="reportLabel">
                    <span>{reporttype.label}</span>
                    <Button
                      onClick={this.sendMail}
                      style={{height:"30px"}}
                    >Send Now</Button>
                </div>
                <div className="reportCardLast">
                    <div className="reportFunctions">
                         
                    </div>                  
                </div>
            </div>
        )
    }
}