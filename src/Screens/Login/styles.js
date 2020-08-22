import Colors, { PinkPrimary, PinkSecondary, Teal } from '../../Theme/Colors';
import { FontFamily } from '../../Theme';

export const container = {
  flex: 1,
  flexGrow: 1
};

export const inner = {
  flex: 1,
  backgroundColor: 'white'
};

export const input = {
  borderBottomColor: PinkSecondary,
  borderBottomWidth: 1,
  borderStyle: 'solid',
  paddingVertical: 8,
  paddingHorizontal: 16,
  fontWeight: '300',
  fontSize: 18
};

export const label = {
  textTransform: 'uppercase',
  color: '#6C6C6C',
  fontSize: 14
};

export const button = {
  paddingVertical: 16
};

export const buttonLabel = {
  color: Teal,
  textTransform: 'uppercase',
  fontSize: 14,
  textAlign: 'center'
};

export const buttonLabelFont = {
  ...buttonLabel,
  fontFamily: FontFamily.Muli.bold
};

export const buttonPrimary = {
  ...button,
  ...{
    backgroundColor: PinkPrimary
  }
};

export const buttonPrimaryLabel = {
  ...buttonLabel,
  ...{
    color: PinkSecondary
  }
};

export const buttonSecondary = {
  ...button,
  ...{
    backgroundColor: PinkSecondary
  }
};

export const buttonSecondaryLabel = {
  ...buttonLabel,
  ...{
    color: Teal
  }
};

export const headerContainer = {
  width: '100%',
  flex: 4,
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
  justifyContent: 'center',
  paddingVertical: 32,
  paddingHorizontal: 32
};

export const formContainerKeyboardPop = {
  ...formContainer,
  paddingTop: 100
};
