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
    console.log('PET WEIGHT IN BARCHART ', petWeight);

return (
    <>
    <div className="weight-chart-container">
       <VictoryChart
            domainPadding={10}
            containerComponent={
                <VictoryVoronoiContainer label={(d) => `${d.label}`} />
            }
            height={350}
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
                    stroke: 'tomato',
                    strokeWidth: 0,
                    fill: '#f87268',
                }}
            />
            )}
            style={{
                data: { stroke: '#f87268' },
                parent: {
                    border: '1px solid #ccc',
                    fontFamily: 'Nunito',
                },
            }}
            domain={{
                y: [0, 10]
            }}
            data={petWeight.map((item) => {
                if (item.weightDate && item.weightValue) {
                    console.log('LABEL FORMAT ', (new Date(item.weightDate)).getFullYear())
                    return { x: new Date(item.weightDate), y: item.weightValue };
                    /* return { x: item.weightDate, y: item.weightValue }; */
                }
                return null;
            })}
            labels={petWeight.map((item) => {
                if (item.weightValue) {
                    return item.weightValue;
                }
                return null;
            })}
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
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'Nunito',
                fill: '#4057cb',
            }}
        />
        <VictoryLabel
            x={5}
            y={25}
            style={{
                fontSize: 12,
                fontFamily: 'Nunito',
            }}
            text="Poids (en kg)"
        />
        <VictoryAxis
            // main axis styles
            scale={'time'}
            style={{
                tickLabels: {
                    fontSize: 12,
                    fontFamily: 'Nunito',
                    fontWeight: 'bold',
                },
            }}
            // define the format of the main axis dates
            tickFormat={(x) => {
                const dateObj = new Date(x);
                const year = dateObj.getFullYear().toString().substr(-2);
                const month = dateObj.toLocaleString('fr-fr', { month: 'short' });
                return `${month}/${year}`;
            }}
        />
        <VictoryAxis
        // cross axis styles
            dependentAxis
            style={{
                tickLabels: {
                    fontSize: 12,
                    fontFamily: 'Nunito',
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
