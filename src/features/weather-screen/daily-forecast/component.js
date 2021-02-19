import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import HorizontalCell from '../../../components/horizontal-weather-cell';

const DailyView = (props) => {
  const { dailyData: data } = props;
  if (!data || data.length === 0) return null;
  return (
    <View
      style={{
        marginTop: 10,
        paddingTop: 10,
        paddingLeft: 20,
        borderTopWidth: 0.5,
        borderColor: 'lightgrey',
      }}
    >
      {data.map((item) => {
        const {
          dt, temp, humidity, feels_like: feelsLike,
          weather: [{
            icon,
          }] = [{}],
        } = item;
        const day = moment.unix(dt).format('dddd');
        return (
          <HorizontalCell
            key={dt}
            title={day}
            icon={icon}
            temp={temp}
            humidity={humidity}
            feelsLike={feelsLike}
          />
        );
      })}
    </View>
  );
};

export default DailyView;
