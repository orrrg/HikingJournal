/**
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  Alert,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';

import Geolocation from 'react-native-geolocation-service';

class App extends Component {
  state = {
    longitude: null,
    latitude: null,
    altitude: null,
  };

  findCoordinates = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          altitude: position.coords.altitude,
        });
      },
      (error) => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  async requestLocationPermission() {
    var perm = PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (perm === PermissionsAndroid.RESULTS.GRANTED) {
      return;
    }
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //To Check, If Permission is granted
      } else {
        Alert.alert('Permission Denied');
      }
    } catch (err) {
      Alert.alert('err', err);
      console.warn(err);
    }
  }

  componentDidMount() {
    this.requestLocationPermission();
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <TouchableOpacity onPress={this.findCoordinates}>
            <Text>Find My Coords</Text>
            <Text>Longitude: {this.state.longitude}</Text>
            <Text>Latitude: {this.state.latitude}</Text>
            <Text>Altitude: {this.state.altitude}</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </>
    );
  }
}

export default App;
