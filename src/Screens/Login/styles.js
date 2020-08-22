import Colors from '../../Theme/Colors';
import { FontFamily } from '../../Theme';

export const container = {
  flex: 1,
  flexGrow: 1
};

export const inner = {
  flex: 1,
  backgroundColor: 'white'
};

export const headerContainer = {
  width: '100%',
  flex: 3,
  justifyContent: 'center'
};

export const headerBackground = {
  backgroundColor: 'white',
  position: 'absolute'
};

export const headerContent = {};

export const logo = (keyboardShown) => {
  const TINY = 56;
  const MEDIUM = 108;
  return {
    width: keyboardShown ? TINY : MEDIUM,
    height: keyboardShown ? TINY : MEDIUM,
    alignSelf: 'center'
  };
};

export const title = {
  textAlign: 'center',
  fontSize: 24
};

export const titleWhite = {
  ...title,
  color: 'white',
  fontFamily: FontFamily.Muli.extraBold
};

export const titlePink = {
  ...title,
  color: Colors.persianPink,
  fontFamily: FontFamily.Muli.extraBold
};

export const formContainer = {
  flex: 5,
  paddingTop: -100,
  paddingHorizontal: 32
};

export const formContainerKeyboardPop = {
  ...formContainer,
  paddingTop: 100
};

export const buttonLogin = {
  marginTop: 16
};

export const forgotTextContainer = {
  marginTop: 36,
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignSelf: 'center'
};

export const forgotPinText = {
  fontFamily: FontFamily.OpenSans.regular,
  fontSize: 15,
  color: Colors.textSecondary
};

export const touchHereText = {
  fontFamily: FontFamily.OpenSans.regular,
  fontSize: 15,
  color: Colors.java
};
