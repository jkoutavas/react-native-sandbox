import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {Alert, PermissionsAndroid, Platform} from 'react-native';

const notificationConfigure = async () => {
  // check if we have permissions
  let enabled = await messaging().hasPermission();
  if (enabled === messaging.AuthorizationStatus.AUTHORIZED) {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log(`FCM token ${fcmToken}`);
    } else {
      // user doesn't have a device token yet
      console.warn('no token');
    }
  } else {
    await messaging().requestPermission();
    console.log('permission requested');
    enabled = await messaging().hasPermission();
    console.log(`done getting permissions: ${enabled}`);
    if (!enabled) {
      return false;
    }
  }

  return true;
};

export const NotificationsManager: React.FC = () => {
  if (Platform.OS === 'android') {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    // Register background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log(
        `Message handled in the background! ${JSON.stringify(remoteMessage)}`,
      );
    });
  }

  useEffect(() => {
    notificationConfigure();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return <></>;
};
