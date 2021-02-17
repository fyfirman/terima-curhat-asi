import React from 'react';
import PropTypes from 'prop-types';
import { ComboInput } from '../../../../Components';
import * as styles from './styles';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string
};

const defaultProps = {
  label: null
};

const DomicileComboInput = (props) => {
  const { items, onChange, label, ...rest } = props;

  return (
    <ComboInput
      initialIndex={0}
      items={items.map((value) => ({
        label: value.name,
        value: value.id
      }))}
      label={label}
      onChange={(newProvince) =>
        onChange({
          id: newProvince.value,
          name: newProvince.label
        })}
      buttonStyle={styles.buttonStyle}
      buttonTextStyle={styles.buttonTextStyle}
      {...rest}
    />
  );
};

DomicileComboInput.propTypes = propTypes;
DomicileComboInput.defaultProps = defaultProps;

export default DomicileComboInput;
