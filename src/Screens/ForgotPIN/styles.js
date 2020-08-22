import Colors from '../../Theme/Colors';
import { FontFamily } from '../../Theme';

export const container = {
  flex: 1,
  flexGrow: 1
};

export const inner = {
  flex: 1,
  backgroundColor: 'white',
  paddingHorizontal: 32
};

export const primaryInfo = {
  fontFamily: FontFamily.OpenSans.regular,
  color: Colors.textPrimary,
  fontSize: 15
};

export const secondaryInfo = {
  fontFamily: FontFamily.OpenSans.regular,
  color: Colors.textSecondary,
  fontSize: 15
};
