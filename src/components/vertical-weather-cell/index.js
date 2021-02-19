import React from 'react';
import { Image, Text, View } from 'react-native';
import { BASE_IMG_URL } from '../../services/utils/api/constants';

const t = (strings, tempExp) => `${Math.round(tempExp)}°`;
const h = (strings, humidExp) => `${humidExp}%`;

const VerticalCell = (props) => {
  const {
    title, icon, temp, humidity, feelsLike,
  } = props;
  return (
    <View style={{
      width: 60,
      height: 120,
      // backgroundColor: 'red',
      // borderColor: 'black',
      // borderWidth: 1,
      // alignContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text>{title}</Text>
      <Text>{t`${temp}`}</Text>
      {icon && (
      <Image
        style={{
          width: 33,
          height: 29,
        }}
        source={{
          uri: `${BASE_IMG_URL}/${icon}@2x.png`,
        }}
      />
      )}
      <Text style={{ color: 'grey' }}>{h`${humidity}`}</Text>
      <Text style={{ color: 'grey' }}>{t`${feelsLike}`}</Text>
    </View>
  );
};

export default VerticalCell;
