import React from 'react';
import { BASE_URL } from 'react-native-dotenv';
import { CustomHeaderWebView } from '../../Components';

const Help = () => {
  return (
    <CustomHeaderWebView
      source={{
        uri: `${BASE_URL}/help`
      }}
      style={{ flex: 1 }}
    />
  );
};

export default Help;
