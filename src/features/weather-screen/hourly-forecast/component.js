import React from 'react';
import { ScrollView } from 'react-native';
import moment from 'moment';

import VerticalCell from '../../../components/vertical-weather-cell';

const HourlyView = (props) => {
  const { hourlyData } = props;
  if (!hourlyData || hourlyData.length === 0) return null;
  return (
    <ScrollView
      horizontal
      style={{
        marginTop: 10,
        paddingTop: 10,
        paddingLeft: 20,
        borderTopWidth: 0.5,
        borderColor: 'lightgrey',
      }}
    >
      {hourlyData.map((data) => {
        const {
          dt, temp, humidity, feels_like: feelsLike,
          weather: [{
            icon,
          }] = [{}],
        } = data;
        const tm = moment.unix(dt);
        const time = tm.isSame(moment.now(), 'hour') ? 'Now' : tm.format('hh A');
        return (
          <VerticalCell
            key={dt}
            title={time}
            icon={icon}
            temp={temp}
            humidity={humidity}
            feelsLike={feelsLike}
          />
        );
      })}
    </ScrollView>
  );
};

export default HourlyView;
