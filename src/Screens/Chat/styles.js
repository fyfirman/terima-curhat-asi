import Colors from '../../Theme/Colors';
import { FontFamily } from '../../Theme';

const INPUT_HEIGHT = 54;

export const container = {
  flex: 1,
  flexGrow: 1
};

export const inner = {
  flex: 1,
  flexDirection: 'column-reverse',
  backgroundColor: '#EAEAEA'
};

export const bubbleContainer = {
  height: '100%',
  width: '100%',
  flex: 1,
  flexDirection: 'column-reverse'
};

export const inputContainer = {
  flexDirection: 'row',
  padding: 8
};

export const input = {
  height: INPUT_HEIGHT,
  flex: 1,
  elevation: 1,
  backgroundColor: 'white',
  fontFamily: FontFamily.OpenSans.regular,
  fontSize: 16,
  borderRadius: 100,
  paddingLeft: 24,
  marginRight: 8
};

export const sendButton = {
  height: INPUT_HEIGHT,
  width: INPUT_HEIGHT,
  minWidth: INPUT_HEIGHT,
  borderRadius: 100,
  backgroundColor: Colors.java,
  elevation: 1
};

export const buttonIcon = {
  color: 'white',
  fontSize: 28,
  marginLeft: 0
};

export const contentStyle = {
  heigth: INPUT_HEIGHT,
  width: INPUT_HEIGHT,
  marginLeft: -2,
  paddingBottom: 0
};
