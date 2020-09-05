import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import * as styles from './styles';
import { ChatItem } from '../Components';

const propTypes = {};

const defaultProps = {};

const History = (props) => {
  const {} = props;

  const [isEmpty, setIsEmpty] = useState(false);

  const renderCard = () => {
    const cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push(
        <ChatItem
          key={i}
          name="Dessy"
          message="Halo ibu, selamat siang allsalsaldlasdl dsa dlas dasj"
          time={new Date(2020, 7, 11, 11, 23)}
        />
      );
    }
    return cards;
  };

  return (
    <>
      {!isEmpty ? (
        <ScrollView style={styles.container}>{renderCard()}</ScrollView>
      ) : (
        <View style={styles.infoContainer}>
          <Text style={styles.emptyInfo}>
            {`Tidak ada konsultasi\nyang sudah selesai`}
          </Text>
        </View>
      )}
    </>
  );
};

History.propTypes = propTypes;
History.defaultProps = defaultProps;

export default History;
