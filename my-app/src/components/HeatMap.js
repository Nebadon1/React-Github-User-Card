import React from 'react';

// Import the calendarheatmap
import CalendarHeatmap from 'react-calendar-heatmap';


 const map={
    width: "950px",
    margin: "32px auto",
 }
    

export default class  HeatMap extends React.Component {

    constructor(props, context) {
        super(props, context);
        
        this.state = {
            // Some dates to render in the heatmap
            values: [
                { date: '2019-01-01', count: 4 },
                { date: '2019-01-22', count: 1 },
                { date: '2019-01-30', count: 3 },
                { date: new Date(2019, 0, 4)}
            ],
            // How many days should be shown
            numDays: 365
        }

        this.onClick = this.onClick.bind(this);
    }
 
    onClick(value) {
        console.log(value);
    }

    render() {
        return (
            <div style={map}>
                <CalendarHeatmap
                    endDate={new Date('2020-01-01')}
                    numDays={this.state.numDays}
                    values={this.state.values}
                    onClick={this.onClick}
                />
            </div>
        );
    }
}