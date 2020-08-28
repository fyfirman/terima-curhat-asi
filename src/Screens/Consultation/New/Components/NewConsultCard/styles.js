import { Colors, FontFamily } from '../../../../../Theme';

const AVA_SIZE = 60;

export const container = {
  flexDirection: 'row',
  marginTop: 8
};

export const ava = {
  width: AVA_SIZE,
  height: AVA_SIZE,
  alignSelf: 'center',
  paddingVertical: 8
};

export const name = {
  fontFamily: FontFamily.OpenSans.semiBold,
  fontSize: 16
};

export const infoContainer = {
  flex: 1,
  paddingVertical: 8,
  paddingHorizontal: 8,
  borderBottomWidth: 1,
  borderBottomColor: Colors.borderBottomCard
};

export const buttonContainer = {
  flexDirection: 'row',
  marginTop: 8
};
