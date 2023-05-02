import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid, Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';

const localNotificationsChannel = 'localNotificationsChannel';

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

    PushNotification.createChannel(
      {
        channelId: localNotificationsChannel,
        channelName: 'Educational Notifications',
      },
      () => {},
    );
  }

  useEffect(() => {
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

    notificationConfigure();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(`got ${remoteMessage.notification?.title}`);
      PushNotification.localNotification({
        message: remoteMessage.notification?.body || '',
        title: remoteMessage.notification?.title,
        category: localNotificationsChannel,
        channelId: localNotificationsChannel,
      });
    });

    return unsubscribe;
  }, []);

  return <></>;
};
