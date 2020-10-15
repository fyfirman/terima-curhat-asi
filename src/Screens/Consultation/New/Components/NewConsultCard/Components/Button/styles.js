import { Colors, FontFamily } from '../../../../../../../Theme';

export const root = (backgroundColor) => ({
  backgroundColor,
  borderRadius: 4,
  borderWidth: 1,
  borderColor: Colors.java,
  height: 40,
  minWidth: 80,
  marginRight: 8
});

export const labelStyle = (textColor) => ({
  color: textColor,
  textTransform: 'none',
  fontSize: 14,
  fontFamily: FontFamily.Muli.bold
});
