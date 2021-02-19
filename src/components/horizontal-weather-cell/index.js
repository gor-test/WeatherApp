import React from 'react';
import { Image, Text, View } from 'react-native';
import { BASE_IMG_URL } from '../../services/utils/api/constants';

const t = (strings, tempExp) => `${Math.round(tempExp)}°`;

const HorizontalCell = (props) => {
  const {
    title, icon,
    temp: { min, max } = {},
  } = props;
  return (
    <View style={{
      height: 50,
      flexDirection: 'row',
    }}
    >
      <Text style={{ flex: 1 }}>{title}</Text>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 2 }}>
          {icon && (
          <Image
            style={{
              width: 33,
              height: 29,
              marginTop: -5,
            }}
            source={{
              uri: `${BASE_IMG_URL}/${icon}@2x.png`,
            }}
          />
          )}
        </View>
        <Text style={{ flex: 1 }}>{t`${min}`}</Text>
        <Text style={{ flex: 1 }}>{t`${max}`}</Text>
      </View>
    </View>
  );
};

export default HorizontalCell;
