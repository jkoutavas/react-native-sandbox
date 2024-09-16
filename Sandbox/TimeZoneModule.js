import {NativeModules} from 'react-native';

const {RNTimeZoneModule} = NativeModules;

const getTimeZone = async () => {
  try {
    const timeZone = await RNTimeZoneModule.getTimeZone();
    return timeZone;
  } catch (error) {
    console.error('Failed to get timezone', error);
    return null;
  }
};

export default getTimeZone;
