import { FontFamily, Colors } from '../../../../Theme';

export const root = {
  position: 'absolute',
  width: '100%',
  top: 0,
  padding: 8
};

export const button = {
  backgroundColor: 'white',
  paddingVertical: 8,
  paddingHorizontal: 16,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 4
};

export const buttonText = {
  color: Colors.textPrimary,
  fontFamily: FontFamily.OpenSans.semiBold
};

export const infoContainer = {
  backgroundColor: '#F0F0F0',
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderBottomWidth: 0.5,
  borderColor: 'white'
};

export const label = {
  color: Colors.textPrimary,
  fontFamily: FontFamily.OpenSans.semiBold
};

export const info = {
  color: Colors.textPrimary,
  fontFamily: FontFamily.OpenSans.regular
};
