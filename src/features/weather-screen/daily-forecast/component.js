import React from 'react';
import { View } from 'react-native';
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
        // console.log({ data });
        const {
          dt, temp, humidity, feels_like: feelsLike,
          weather: [{
            icon,
          }] = [{}],
        } = item;
        return (
          <HorizontalCell
            key={dt}
            title="ddd"
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
