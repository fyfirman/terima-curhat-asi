import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Colors } from '../../../../Theme';
import { Avatar } from '../../../../Components';
import * as styles from './styles';

const propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  userGroup: PropTypes.string.isRequired,
  onPressPhoto: PropTypes.func,
  onPressEditButton: PropTypes.func,
  photo: PropTypes.string
};

const defaultProps = {
  photo: null,
  onPressPhoto: () => {},
  onPressEditButton: () => {}
};

const TopSection = (props) => {
  const {
    name,
    photo,
    userGroup,
    phoneNumber,
    onPressPhoto,
    onPressEditButton
  } = props;

  return (
    <View style={styles.topSection}>
      <TouchableOpacity onPress={onPressPhoto}>
        <Avatar name={name} photo={photo} size={64} />
        <Text style={styles.changePhoto}>Ganti Foto</Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.secondary}>{userGroup}</Text>
        <Text style={styles.secondary}>{phoneNumber}</Text>
      </View>
      <IconButton
        icon="pencil"
        size={24}
        color={Colors.textSecondary}
        onPress={onPressEditButton}
      />
    </View>
  );
};

TopSection.propTypes = propTypes;
TopSection.defaultProps = defaultProps;

export default TopSection;
