import React from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import PropTypes from 'prop-types';
import * as styles from './styles';

const propTypes = {
  onItemSelect: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTextChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

const defaultProps = {
  placeholder: 'Cari',
  value: ''
};

const Dropdown = (props) => {
  const { onItemSelect, items, onTextChange, placeholder, value } = props;

  return (
    <SearchableDropdown
      onItemSelect={onItemSelect}
      items={items}
      setSort={(item, searchedText) =>
        item.name.toLowerCase().startsWith(searchedText.toLowerCase())
      }
      itemStyle={styles.itemStyle}
      itemsContainerStyle={styles.itemsContainerStyle}
      textInputProps={{
        placeholder,
        underlineColorAndroid: 'transparent',
        style: styles.textInputStyle,
        value,
        onTextChange
      }}
    />
  );
};

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
