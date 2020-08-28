import { Colors, FontFamily } from '../../../../../Theme';

const AVA_SIZE = 55;

export const container = {
  flexDirection: 'row'
};

export const ava = {
  width: AVA_SIZE,
  height: AVA_SIZE,
  alignSelf: 'center',
  paddingVertical: 8
};

export const infoContainer = {
  flex: 1,
  paddingHorizontal: 8,
  paddingVertical: 16,
  borderBottomWidth: 1,
  borderBottomColor: Colors.borderBottomCard,
  justifyContent: 'center'
};

export const name = {
  fontFamily: FontFamily.OpenSans.semiBold,
  fontSize: 16,
  marginBottom: 4
};

export const message = {
  fontFamily: FontFamily.OpenSans.regular,
  fontSize: 14
};
