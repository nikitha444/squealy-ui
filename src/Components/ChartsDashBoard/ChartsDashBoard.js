import React, { Component } from 'react'
import './ChartsDashBoard.css'
import ChartsCard from '../ChartsCard/ChartsCard'
import graph from '../../assets/graph.svg'

export default class ChartsDashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          chartSearch : '',
          showCharts: false
        }
    }
    onSearch = (e) => {
        this.setState({chartSearch:e.target.value})
    }
    render() {
        const buttonStyle = {
            borderRadius : '5px',
            width: '160px',
            height: '40px',
            backgroundColor: '#59ad8e',
            color: '#FFFFFF',
            border: '1px solid #59ad8e',
            cursor: 'pointer'
        }
        const chartstypes = [
            {label: "Sales Data Analystics", charttypeimage: {graph}, chartscount: "0"},
            {label: "Departmental Reports", charttypeimage: {graph}, chartscount: "0"},
            {label: "Consumer Analytics", charttypeimage: {graph}, chartscount: "0"},
        ]
        return(
            <div className="charts">
                <div className="chartsSearch">
                    <span className="chartsTitle">Charts</span>
                    <div className="chartsSearchAdd">
                        <div className="chartSearchBox">
                            <input type = "text" id="chartSearchId" value = {this.state.chartSearch} 
                                    onChange = {this.onSearch.bind(this)} placeholder = "Search Charts"/>
                        </div>
                        <div className="addChartButton">
                            <button
                                style={buttonStyle}
                                onClick={this.handleSubmit}>Add New Group</button>
                        </div>
                    </div>
                </div>
                <div className="chartsDashBoard">
                    {chartstypes.map((charttype, index) => 
                    <ChartsCard 
                        charttype={charttype} 
                        key={index}/>
                    )}
                </div>
            </div>
        )
    }
}