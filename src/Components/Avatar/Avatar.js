import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-paper';
import * as styles from './styles';
import { getInitial } from '../../Helper';

const propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

const defaultProps = {
  photo: null
};

const StyledAvatar = (props) => {
  const { photo, name, size, ...rest } = props;

  const renderAvatar = () => {
    if (photo === null) {
      return (
        <Avatar.Text
          {...rest}
          style={styles.root}
          labelStyle={styles.labelStyle}
          label={getInitial(name)}
          size={size}
        />
      );
    }
    return (
      <Avatar.Image
        {...rest}
        style={styles.root}
        source={{ uri: photo }}
        size={size}
      />
    );
  };

  return <>{renderAvatar()}</>;
};

StyledAvatar.propTypes = propTypes;
StyledAvatar.defaultProps = defaultProps;

export default StyledAvatar;
