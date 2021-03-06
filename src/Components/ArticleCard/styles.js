import { FontFamily, Colors } from '../../Theme';

export const root = {
  flexDirection: 'row',
  elevation: 3,
  padding: 8,
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

export const emptyContainer = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 3,
  padding: 16,
  marginVertical: 8,
  backgroundColor: 'white',
  borderRadius: 10,
  minHeight: 100
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
