import Colors from '../Colors';
import FontFamily from '../FontFamily';

const ICON_SIZE = 30;

export const headerStyle = {
  backgroundColor: Colors.persianPink,
  elevation: 0,
  shadowOpacity: 0,
  borderBottomWidth: 0
};

export const headerTitleStyle = {
  fontFamily: FontFamily.Muli.bold,
  textAlign: 'center',
  marginLeft: -(ICON_SIZE + 15)
};

export const iconStyle = {
  marginLeft: 8
};
