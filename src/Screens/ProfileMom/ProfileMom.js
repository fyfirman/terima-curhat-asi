import React, { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CoreServices } from '../../Services';
import { Moms, Baby, Husband, Pregnancy } from './Screens';
import { LoadingContent } from '../../Components';
import { TopSection } from './Components';
import { Colors } from '../../Theme';
import * as styles from './styles';

const Tab = createMaterialTopTabNavigator();

const propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

const defaultProps = {};

const ProfileMom = (props) => {
  const { route } = props;
  const { user } = route.params;

  const [profile, setProfile] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchConsultation = () => {
      CoreServices.getMomsProfile(user.id).then(
        (res) => {
          setProfile(res.payload);
          setIsLoaded(true);
        },
        (error) => {
          ToastAndroid.show(error.message, ToastAndroid.LONG);
          console.error(error);
        }
      );
    };

    fetchConsultation();
  }, []);

  return (
    <>
      <TopSection
        name={user.profile?.name}
        phoneNumber={user.username}
        photo={profile.picture}
      />

      {isLoaded ? (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: Colors.persianPink,
            labelStyle: styles.tabLabelStyle,
            inactiveTintColor: Colors.textSecondary,
            indicatorStyle: styles.tabIndicatorStyle,
            scrollEnabled: true,
            tabStyle: styles.tabStyle,
            style: styles.tabContainer
          }}
        >
          <Tab.Screen
            name="Moms"
            component={Moms}
            options={{ tabBarLabel: 'Ibu' }}
            initialParams={{ user }}
          />
          <Tab.Screen
            name="Pregnancy"
            component={Pregnancy}
            options={{ tabBarLabel: 'Kehamilan' }}
            initialParams={{ pregnancy: profile.pregnancy }}
          />
          <Tab.Screen
            name="Baby"
            component={Baby}
            options={{ tabBarLabel: 'Bayi' }}
            initialParams={{ baby: profile.baby }}
          />
          <Tab.Screen
            name="Husband"
            component={Husband}
            options={{ tabBarLabel: 'Anggota Keluarga Lain' }}
            initialParams={{ husband: profile.husband }}
          />
        </Tab.Navigator>
      ) : (
        <LoadingContent />
      )}
    </>
  );
};

ProfileMom.propTypes = propTypes;
ProfileMom.defaultProps = defaultProps;

export default ProfileMom;
