import { useEffect } from "react";
import messaging from '@react-native-firebase/messaging';
import { Alert, PermissionsAndroid, Platform } from "react-native";

export const NotificationsManager: React.FC = () => {

    if( Platform.OS === 'android') {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
        // Register background handler
        messaging().setBackgroundMessageHandler(async remoteMessage => {
          console.log(
            `Message handled in the background! ${JSON.stringify(remoteMessage)}`,
          );
        });
      }
      
    useEffect(() => {
      console.log(`registering... ${messaging().isDeviceRegisteredForRemoteMessages}`);
      messaging().getAPNSToken()
      .then((aps)=>console.log(`APSToken: ${aps}`))
      .then(()=> messaging().getToken()
      .then((t) => console.log(`FCM token: ${t}`)));
    }, []);

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
    
        return unsubscribe;
      }, []);

    return <></>;
}