/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import dayjs from 'dayjs';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryLabel, VictorySharedEvents } from 'victory';
import PropTypes from 'prop-types';

const WeightChart = ({ petWeight }) => {
  console.log('PET WEIGHT IN BARCHART ', petWeight);

  return (
    <div className="weight-chart-container">
      <VictoryChart
        height={300}
      >
        <VictoryLine
          style={{
            data: { stroke: '#f87268' },
            parent: {
              border: '1px solid #ccc',
              padding: 0,
              fontFamily: 'Nunito',
            },
          }}
          data={petWeight.map((item) => {
            return { x: dayjs(item.weightDate).format('DD/MM/YYYY'), y: item.weightValue };
          })}
          animate={{
            duration: 2000,
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
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'Nunito',
            fill: '#4057cb',
          }}
        />
        <VictoryAxis
          style={{
            /* main axis styles */
            tickLabels: {
              fontSize: 9,
              fontFamily: 'Nunito',
              fontWeight: 'bold',
              padding: 20,
              angle: -45,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            /* cross axis styles */
            tickLabels: {
              fontSize: 12,
              fontFamily: 'Nunito',
              fontWeight: 'bold',
              padding: 5,
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
