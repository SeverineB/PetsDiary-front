/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import {
    VictoryLine,
    VictoryChart,
    VictoryAxis,
    VictoryLabel,
    VictoryTooltip,
    VictoryVoronoiContainer,
} from 'victory';
import PropTypes from 'prop-types';

import './WeightChart.scss';

const WeightChart = ({ petWeight }) => {

    const firstxvalue = (petWeight.length > 0) ? new Date(petWeight[0].weightDate) : new Date();
    const middlexvalue = (petWeight.length > 0) ? new Date(petWeight[Math.floor(petWeight.length / 2)].weightDate) : new Date();
    const lastxvalue = (petWeight.length > 0) ? new Date(petWeight[petWeight.length-1].weightDate) : new Date();
    const tickCount = (petWeight.length > 0) ? petWeight.length : 2;

return (
    <>
    <div className="weight-chart-container">
       <VictoryChart
            domainPadding={10}
            containerComponent={
                <VictoryVoronoiContainer label={(d) => `${d.label}`} />
            }
            /* height={350} */
            /* width={400} */
            scale={{x: 'time'}}
        >
        <VictoryLine
            interpolation="monotoneX"
            labelComponent={(
            <VictoryTooltip
                style={{
                    fontSize: 10,
                    fontWeight: 'bold',
                }}
                flyoutStyle={{
                    stroke: '#ff7362',
                    strokeWidth: 0,
                    fill: '#ff7362',
                }}
            />
            )}
            style={{
                data: { stroke: '#5e17eb' },
                parent: {
                    border: '1px solid #ccc',
                    fontFamily: 'Muli',
                },
            }}
            domain={{
                x: [firstxvalue, lastxvalue],
                y: [0, 10]
            }}
            data={
                petWeight.map((item) => {
                    if (item.weightDate && item.weightValue) {
                        return { x: new Date(item.weightDate), y: item.weightValue };
                    }
                })
            }
            animate={{
                duration: 1500,
                onLoad: { duration: 1000 },
            }}
        />
        <VictoryLabel
            x={225}
            y={25}
            textAnchor="middle"
            text="Suivi du poids"
            style={{
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Muli',
                fill: '#5e17eb',
            }}
        />
        <VictoryLabel
            x={5}
            y={25}
            style={{
                fontSize: 12,
                fontFamily: 'Muli',
            }}
            text="Poids (en kg)"
        />
        <VictoryAxis
            // main axis styles
            scale={{x: 'time'}}
            style={{
                tickLabels: {
                    fontSize: 12,
                    fontFamily: 'Muli',
                    fontWeight: 'bold',
                },
            }}
            tickValues={[firstxvalue, middlexvalue, lastxvalue]}
            tickCount={tickCount}
            // define the format of the main axis dates
            tickFormat={(x) => {
                    const dateObj = new Date(x);
                    const year = dateObj.getFullYear().toString().substr(-2);
                    const month = dateObj.toLocaleString('fr-fr', { month: '2-digit' });
                    return `${month}/${year}`;
            }}
           fixLabelOverlap={true}
        />
        <VictoryAxis
            // cross axis styles
            dependentAxis
            style={{
                tickLabels: {
                    fontSize: 12,
                    fontFamily: 'Muli',
                    fontWeight: 'bold',
                    padding: 10,
                },
            }}
        />
        </VictoryChart>
    </div>
    </>
);
};

WeightChart.propTypes = {
petWeight: PropTypes.arrayOf(
    PropTypes.shape({
        weightValue: PropTypes.number,
        weightDate: PropTypes.string,
    }),
).isRequired,
};

export default WeightChart;
