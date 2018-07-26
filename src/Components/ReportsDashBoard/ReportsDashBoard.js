import React, { Component } from 'react'
import './ReportsDashBoard.css'
import ReportsCard from '../ReportsCard/ReportsCard'

export default class ReportsDashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          reportSearch : ''
        }
    }
    onSearch = (e) => {
        this.setState({chartSearch:e.target.value})
    }
    render() {
        const reportTypes = [
            {label: "Reports 1"},
            {label: "Departmental Reports"},
            {label: "Consumer Analytics"},
        ]
        return(
            <div className="reports">
                <div className="reportsSearch">
                    <span className="reportsTitle">Scheduled Reports</span>
                        <div className="reportSearchBox">
                            <input type = "text" id="reportSearchId" value = {this.state.reportSearch} 
                                    onChange = {this.onSearch.bind(this)} placeholder = "Search Reports"/>
                        </div>
                    </div>
                <div className="reportsDashBoard">
                    {reportTypes.map((reporttype, index) => 
                    <ReportsCard 
                        reporttype={reporttype} 
                        key={index}/>
                    )}
                </div>
            </div>
        )
    }
}

