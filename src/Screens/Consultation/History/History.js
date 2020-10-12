import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text, ToastAndroid } from 'react-native';
import * as styles from './styles';
import { ChatItem } from '../Components';
import { CoreServices } from '../../../Services';
import { LoadingContent } from '../../../Components';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const History = (props) => {
  const { navigation } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    const fetchConsultation = () => {
      CoreServices.getConsultations({ params: { type: 'closed' } }).then(
        (res) => {
          setConsultations(res.payload.data);
          setIsLoaded(true);
        },
        (error) => {
          ToastAndroid.show(error.message, ToastAndroid.LONG);
          console.error(error);
        }
      );
    };

    const unsubscribe = navigation.addListener('focus', () => {
      fetchConsultation();
    });

    return unsubscribe;
  }, []);

  const renderCard = ({ item }) => (
    <ChatItem
      key={item.id}
      name={item.user.profile.name}
      message="Halo ibu, selamat siang allsalsaldlasdl dsa dlas dasj"
      time={new Date(2020, 7, 28, 11, 23)}
      onPress={() => navigation.navigate('Chat', { consultation: item })}
    />
  );

  const renderView = () => {
    if (consultations.length !== 0) {
      return (
        <View style={styles.container}>
          <FlatList
            data={consultations}
            renderItem={renderCard}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      );
    }
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.emptyInfo}>
          {`Tidak ada konsultasi\nyang selesai`}
        </Text>
      </View>
    );
  };

  return isLoaded ? renderView() : <LoadingContent />;
};

History.propTypes = propTypes;
History.defaultProps = defaultProps;

export default History;
