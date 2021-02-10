import { FontFamily, Colors } from '../../../../Theme';

export const topSection = {
  backgroundColor: 'white',
  padding: 16,
  flexDirection: 'row',
  elevation: 2,
  marginBottom: 16,
  justifyContent: 'space-between'
};

export const infoContainer = {
  flex: 1,
  paddingVertical: 8,
  paddingHorizontal: 16,
  justifyContent: 'space-around'
};

export const name = {
  fontFamily: FontFamily.OpenSans.semiBold,
  fontSize: 16
};

export const secondary = {
  fontFamily: FontFamily.OpenSans.regular,
  fontSize: 14,
  color: Colors.textSecondary
};

export const changePhoto = {
  fontFamily: FontFamily.OpenSans.regular,
  fontSize: 11,
  color: Colors.textSecondary,
  textAlign: 'center'
};
