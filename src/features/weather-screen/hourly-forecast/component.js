import React from 'react';
import { ScrollView } from 'react-native';
import VerticalCell from '../../../components/vertical-weather-cell';

const HourlyView = (props) => {
  // console.log({ HourlyView: { props } });
  const { hourlyData } = props;
  // console.log({ hourlyData });
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
      {hourlyData.map((data, index) => {
        const {
          dt, temp, humidity, feels_like: feelsLike,
          weather: [{
            icon,
          }] = [{}],
        } = data;
        return (
          <VerticalCell
            key={dt}
            title="ddd"
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
