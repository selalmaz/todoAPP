import {showMessage} from 'react-native-flash-message';

function showUserMessage(
  messageContent: any,
  messageType: 'info' | 'danger' = 'danger',
) {
  const message = messageContent as string;
  showMessage({
    message: message,
    type: messageType,
  });
}

export default showUserMessage;
