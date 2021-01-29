import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as styles from './styles';
import { StringHelper } from '../../../../Helper';
import { Avatar } from '../../../../Components';

const propTypes = {
  name: PropTypes.string.isRequired,
  domicile: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  photo: PropTypes.string
};

const defaultProps = {
  photo: null
};

const ChatItem = (props) => {
  const { name, photo, domicile, onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Avatar name={name} style={styles.ava} photo={photo || null} size={55} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.status}>
          {StringHelper.toTitleCase(domicile || '')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

ChatItem.propTypes = propTypes;
ChatItem.defaultProps = defaultProps;

export default ChatItem;
