import PushNotification from 'react-native-push-notification';
import pushLocalPN from './localNotification';
import pushLocalPNSchedule from './localNotificationSchedule';

const PNsetIconBadgeNumber = number => {
  PushNotification.setApplicationIconBadgeNumber(number);
}

const PNHelpers = {
  pushLocalPN,
  pushLocalPNSchedule,
  PNsetIconBadgeNumber
};

export default PNHelpers;