/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { VictoryLine, VictoryBar, VictoryChart } from 'victory';
import PropTypes from 'prop-types';

const BarChart = ({ petWeight }) => {
  console.log('PET WEIGHT IN BARCHART ', petWeight);

  const getData = () => {
    return petWeight.map((item) => {
      console.log('ITEM WEIGHT ', item);
      console.log('ITEM WEIGHT DATE', item.weightDate);
    });
  };

  getData();
  return (
    <div className="chart-container">
      <VictoryChart>
        <VictoryBar
          style={{
            data: { stroke: '#c43a31' },
            parent: { border: '1px solid #ccc' },
          }}
          data={petWeight}
        />
      </VictoryChart>
    </div>
  );
};

BarChart.propTypes = {
  petWeight: PropTypes.arrayOf(
    PropTypes.shape({
      weightValue: PropTypes.number,
      weightDate: PropTypes.string,
    }),
  ).isRequired,
};

export default BarChart;
