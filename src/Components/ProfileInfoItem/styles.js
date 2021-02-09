import { Colors, FontFamily } from '../../Theme';

export const root = {
  backgroundColor: 'white',
  padding: 16,
  borderBottomWidth: 1,
  borderBottomColor: Colors.borderBottomCard,
  flexDirection: 'row',
  justifyContent: 'space-between'
};

export const label = {
  fontFamily: FontFamily.OpenSans.regular,
  fontSize: 12,
  color: Colors.textSecondary
};

export const info = {
  fontFamily: FontFamily.OpenSans.semiBold,
  fontSize: 15,
  color: Colors.textPrimary
};
