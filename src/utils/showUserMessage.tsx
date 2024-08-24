import {showMessage} from 'react-native-flash-message';

function showUserMessage(
  messageContent: Error | string,
  messageType: 'info' | 'danger' = 'danger',
) {
  let formattedMessage = '';

  if (messageContent instanceof Error) {
    formattedMessage = messageContent.message.replace(/^\[.*\]\s*/, '');
  } else formattedMessage = messageContent;

  showMessage({
    message: formattedMessage,
    type: messageType,
  });
}

export default showUserMessage;
