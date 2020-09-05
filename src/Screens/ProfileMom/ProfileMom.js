import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-paper';
import * as styles from './styles';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const ProfileMom = (props) => {
  const { navigation } = props;

  useEffect(() => {
    // effect
  }, []);

  // const [state, setstate] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Avatar.Image
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg'
          }}
          size={64}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Mira Suryani</Text>
          <Text style={styles.phoneNumber}>+687321221381</Text>
        </View>
      </View>
    </View>
  );
};

ProfileMom.propTypes = propTypes;
ProfileMom.defaultProps = defaultProps;

export default ProfileMom;
