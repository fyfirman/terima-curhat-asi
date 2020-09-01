import { FontFamily, Colors } from '../../../../Theme';

export const root = {
  flexDirection: 'row',
  elevation: 3,
  padding: 16,
  marginHorizontal: 16,
  marginVertical: 8,
  backgroundColor: 'white',
  borderRadius: 10
};

export const ava = {
  flex: 1,
  aspectRatio: 1,
  marginRight: 16
};

export const infoContainer = {
  flex: 3
};

export const content = {
  textAlign: 'justify',
  fontFamily: FontFamily.OpenSans.regular,
  color: Colors.textPrimary
};

export const title = {
  fontFamily: FontFamily.OpenSans.bold,
  color: Colors.textPrimary
};
