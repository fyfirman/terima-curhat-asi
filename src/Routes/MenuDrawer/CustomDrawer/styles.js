import { FontFamily, Colors } from '../../../Theme';

export const root = {
  flex: 1
};

export const menuItems = {
  flex: 1,
  justifyContent: 'space-between'
};

export const userInfoSection = {
  flexDirection: 'row',
  padding: 8,
  marginVertical: 24,
  alignContent: 'space-around'
};

export const infoSection = {
  paddingLeft: 8,
  paddingRight: 64,
  justifyContent: 'center'
};

export const avatarText = {
  backgroundColor: Colors.strikemaster
};

export const avatarTextLabel = {
  fontFamily: FontFamily.Muli.bold,
  paddingBottom: 4
};

export const name = {
  fontFamily: FontFamily.Muli.bold,
  fontSize: 20,
  color: Colors.textPrimary
};

export const profession = {
  fontFamily: FontFamily.Muli.regular,
  color: Colors.textSecondary
};

export const labelStyle = {
  fontFamily: FontFamily.OpenSans.semiBold
};

export const footer = {
  flex: 1,
  flexDirection: 'column-reverse'
};

export const signOutItem = {};
