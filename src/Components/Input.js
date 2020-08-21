import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { PinkSecondary, Teal } from '../Theme/Colors';
import * as Styles from '../Styles';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    };
    this.onInputFocused = this.onInputFocused.bind(this);
    this.onInputBlurred = this.onInputBlurred.bind(this);
    this.onInputChanges = this.onInputChanges.bind(this);
  }

  onInputFocused(event) {
    const component = event.currentTarget;
    component.setNativeProps({
      style: {
        borderBottomColor: Teal
      }
    });
  }

  onInputBlurred(event) {
    const { value } = this.state;
    const component = event.currentTarget;
    const color = value.trim() ? Teal : PinkSecondary;
    component.setNativeProps({
      style: {
        borderBottomColor: color
      }
    });
  }

  onInputChanges({ nativeEvent }) {
    const { text } = nativeEvent;
    this.setState({ value: text });
  }

  render() {
    const { label, style, align, ...rest } = this.props;
    return (
      <View style={style}>
        <Text style={{ ...Styles.label, ...{ textAlign: align } }}>
          {label}
        </Text>
        <TextInput
          onFocus={this.onInputFocused}
          onBlur={this.onInputBlurred}
          onChange={this.onInputChanges}
          style={{
            ...Styles.input,
            ...{
              textAlign: align || 'left'
            }
          }}
          {...rest}
        />
      </View>
    );
  }
}
