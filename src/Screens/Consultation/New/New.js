import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as styles from './styles';
import { NewConsultCard } from './Components';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const New = (props) => {
  const { navigation } = props;

  const [isEmpty, setIsEmpty] = useState(false);

  const renderCard = () => {
    const cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push(
        <NewConsultCard
          key={i}
          name="Dessy"
          onPress={() => {
            navigation.navigate('ProfileMom');
          }}
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
            {`Tidak ada konsultasi\nyang baru`}
          </Text>
        </View>
      )}
    </>
  );
};

New.propTypes = propTypes;
New.defaultProps = defaultProps;

export default New;
