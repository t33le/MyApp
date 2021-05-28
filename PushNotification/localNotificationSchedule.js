// PushNotification.localNotificationSchedule({
//   //... You can use all the options from localNotifications
//   message: "My Notification Message", // (required)
//   date: new Date(Date.now() + 60 * 1000), // in 60 secs
//   allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
// });

import PushNotification from 'react-native-push-notification';
import PropTypes from 'prop-types';

const pushLocalPNSchedule = (details) => {
  PushNotification.localNotificationSchedule(details);
};

pushLocalPNSchedule.propTypes = {
  details: PropTypes.shape({
    message: PropTypes.string.isRequired
  }).isRequired
};

export default pushLocalPNSchedule;