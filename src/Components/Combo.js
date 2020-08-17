import React, {Component} from 'react';
import {Modal, View, ScrollView, TouchableOpacity, Text} from 'react-native';
import _ from 'lodash';
import * as Styles from '../Styles';
import {PinkPrimary, PinkSecondary, Teal} from '../Colors';

export default class Combo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selected: props.selected || 0,
    };
  }
  select(node = {}) {
    const {onChange} = this.props;
    if (undefined === onChange) {
      return null;
    }
    onChange(node);
  }
  items() {
    const {items} = this.props;
    return _.map(items || [], (node, index) => {
      const {label} = node;
      const chosen = index === this.state.selected;
      const listStyle = {
        backgroundColor: chosen ? PinkPrimary : 'transparent',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderTopColor: index === 0 ? 'transparent' : PinkSecondary,
      };
      const textStyle = {
        textAlign: 'center',
        color: chosen ? '#ffffff' : Teal,
      };
      return (
        <TouchableOpacity
          key={index}
          style={listStyle}
          onPress={() => {
            this.setState({selected: index, visible: false});
            this.select(node);
          }}>
          <Text style={textStyle}>{label}</Text>
        </TouchableOpacity>
      );
    });
  }
  render() {
    const {visible, selected} = this.state;
    const selectedItem = this.props.items[selected];
    return (
      <>
        <Modal animationType={'fade'} transparent={true} visible={visible}>
          <View
            onTouchEnd={() => {
              this.setState({visible: false});
            }}
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, .3)',
              justifyContent: 'center',
            }}>
            <View
              style={{
                marginVertical: 16,
                marginHorizontal: 32,
                paddingVertical: 32,
                paddingHorizontal: 16,
              }}>
              <ScrollView style={{backgroundColor: '#ffffff'}}>{this.items()}</ScrollView>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={Styles.buttonSecondary}
          onPress={() => this.setState({visible: true})}>
          <Text style={Styles.buttonSecondaryLabel}>{ selectedItem ? selectedItem.label : 'Choose one' }</Text>
        </TouchableOpacity>
      </>
    );
  }
}
