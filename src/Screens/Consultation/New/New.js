import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ToastAndroid, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as styles from './styles';
import { NewConsultCard } from './Components';
import { CoreServices } from '../../../Services';
import { LoadingContent } from '../../../Components';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const New = (props) => {
  const { navigation } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    CoreServices.getConsultations({ params: { type: 'waiting' } }).then(
      (res) => {
        setConsultations(res.payload.data);
        setIsLoaded(true);
      },
      (error) => {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
        console.error(error);
      }
    );
  }, []);

  const renderCard = ({ item }) => (
    <NewConsultCard
      name={item.user.profile.name}
      onPress={() => {
        navigation.navigate('ProfileMom');
      }}
      photo={null}
    />
  );

  const renderView = () => {
    if (consultations.length !== 0) {
      return (
        <View style={styles.container}>
          <FlatList
            data={consultations}
            renderItem={renderCard}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.emptyInfo}>
          {`Tidak ada konsultasi\nyang baru`}
        </Text>
      </View>
    );
  };

  return isLoaded ? renderView() : <LoadingContent />;
  // return isLoaded ? <Text>Test</Text> : <LoadingContent />;
};

New.propTypes = propTypes;
New.defaultProps = defaultProps;

export default New;
