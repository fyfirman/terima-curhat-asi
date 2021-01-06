import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text, ToastAndroid } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as styles from './styles';
import { ChatItem } from '../Components';
import { CoreServices } from '../../../Services';
import { LoadingContent } from '../../../Components';

// Redux
import { ConsultationAction } from '../../../Redux/Actions';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  consultations: PropTypes.arrayOf(PropTypes.object).isRequired,
  setConsultations: PropTypes.func.isRequired
};

const defaultProps = {};

const InProgress = (props) => {
  const { navigation, consultations, setConsultations } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchConsultation = () => {
      CoreServices.getConsultations({ params: { type: 'ongoing' } }).then(
        (res) => {
          setConsultations(res.payload.data.reverse());
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
      lastPost={item.lastPost}
      description={item.description}
      createdAt={item.created_at}
      name={item.user.profile.name}
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
          {`Tidak ada konsultasi\nyang sedang berjalan`}
        </Text>
      </View>
    );
  };

  return isLoaded ? renderView() : <LoadingContent />;
};

InProgress.propTypes = propTypes;
InProgress.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  consultations: state.consultations
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ConsultationAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InProgress);
