import React from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Colors } from '../../Theme';
import * as styles from './styles';

const propTypes = {
  label: PropTypes.string.isRequired,
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  editable: PropTypes.bool,
  onPressEditButton: PropTypes.func
};

const defaultProps = {
  editable: false,
  onPressEditButton: () => {}
};

const ProfileInfoItem = (props) => {
  const { label, info, editable, onPressEditButton } = props;

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.info}>{info !== null ? info : '-'}</Text>
      </View>
      {editable && (
        <IconButton
          icon="pencil"
          size={24}
          color={Colors.textSecondary}
          onPress={onPressEditButton}
        />
      )}
    </View>
  );
};

ProfileInfoItem.propTypes = propTypes;
ProfileInfoItem.defaultProps = defaultProps;

export default ProfileInfoItem;
