import { FontFamily, Colors } from '../../../Theme';

export const container = {
  flex: 1,
  flexGrow: 1,
  backgroundColor: '#DFDFDF'
};

export const inner = {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'white',
  paddingHorizontal: 32
};

export const topSection = {
  backgroundColor: 'white',
  padding: 16,
  flexDirection: 'row',
  elevation: 2
};

export const infoContainer = {
  padding: 8,
  justifyContent: 'space-around'
};

export const name = {
  fontFamily: FontFamily.OpenSans.semiBold,
  fontSize: 16
};

export const phoneNumber = {
  fontFamily: FontFamily.OpenSans.regular,
  fontSize: 14,
  color: Colors.textSecondary
};
