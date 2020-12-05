/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import dayjs from 'dayjs';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryLabel, VictoryTooltip, VictoryVoronoiContainer } from 'victory';
import PropTypes from 'prop-types';

const WeightChart = ({ petWeight }) => {
  console.log('PET WEIGHT IN BARCHART ', petWeight);

  return (
    <div className="weight-chart-container">
      <VictoryChart
        containerComponent={
          <VictoryVoronoiContainer label={d => `${d.label}`} />
        }
        height={350}
      >
        <VictoryLine
          labelComponent={
          <VictoryTooltip
            style={{
              fontSize: 10,
              fontWeight: 'bold'
            }}
            flyoutStyle={{
              stroke: "tomato",
              strokeWidth: 0,
              fill: "#f87268",
            }}
         />
          }
          style={{
            data: { stroke: '#f87268' },
            parent: {
              border: '1px solid #ccc',
              padding: 0,
              fontFamily: 'Nunito',
            },
          }}
          data={petWeight.map((item) => {
            if (item.weightDate && item.weightValue) {
              return { x: dayjs(item.weightDate).format('DD/MM/YYYY'), y: item.weightValue };
            } else {
              return null;
            }
           
          })}
          labels={petWeight.map((item) => {
            if (item.weightValue) {
              return item.weightValue
            } else {
              return null;
            }
          
          })}
          animate={{
            duration: 1500,
            onLoad: { duration: 1000 },
          }}
          interpolation="natural"
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
        <VictoryAxis
          label="Dates"
          style={{
            /* main axis styles */
            tickLabels: {
              fontSize: 9,
              fontFamily: 'Nunito',
              fontWeight: 'bold',
              padding: 15,
              angle: -30,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          label="Poids (kgs)"
          style={{
            /* cross axis styles */
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
