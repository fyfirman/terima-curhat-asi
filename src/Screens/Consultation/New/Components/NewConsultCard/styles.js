import { Colors, FontFamily } from '../../../../../Theme';

const AVA_SIZE = 60;

export const container = {
  flexDirection: 'row',
  marginTop: 8,
  borderBottomWidth: 1,
  borderBottomColor: Colors.borderBottomCard
};

export const avaContainer = {
  justifyContent: 'center'
};

export const ava = {
  width: AVA_SIZE,
  height: AVA_SIZE,
  backgroundColor: Colors.cerulean
};

export const labelStyle = {
  color: 'white',
  fontFamily: FontFamily.Muli.bold
};

export const name = {
  fontFamily: FontFamily.OpenSans.semiBold,
  fontSize: 16
};

export const info = {
  fontFamily: FontFamily.OpenSans.regular,
  fontSize: 14,
  color: Colors.textPrimary
};

export const infoContainer = {
  flex: 1,
  paddingVertical: 8,
  paddingHorizontal: 8
};

export const buttonContainer = {
  flexDirection: 'row',
  marginTop: 8
};
