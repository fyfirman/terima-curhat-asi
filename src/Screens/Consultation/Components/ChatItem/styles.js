import { Colors, FontFamily } from '../../../../Theme';

const AVA_SIZE = 55;

export const container = {
  flexDirection: 'row'
};

export const ava = {
  width: AVA_SIZE,
  height: AVA_SIZE,
  alignSelf: 'center'
};

export const infoContainer = {
  flex: 1,
  paddingHorizontal: 8,
  paddingVertical: 16,
  borderBottomWidth: 1,
  borderBottomColor: Colors.borderBottomCard,
  justifyContent: 'center'
};

export const topSection = {
  flexDirection: 'row',
  justifyContent: 'space-between'
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

export const time = {
  fontFamily: FontFamily.OpenSans.regular,
  fontSize: 11
};
