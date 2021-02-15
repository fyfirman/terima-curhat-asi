import { FontFamily, Colors } from '../../../../Theme';

export const infoContainer = {
  position: 'absolute',
  width: '100%',
  top: 0,
  padding: 8
};

export const info = {
  backgroundColor: 'white',
  paddingVertical: 8,
  paddingHorizontal: 16,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
};

export const infoText = {
  color: Colors.textPrimary,
  fontFamily: FontFamily.OpenSans.semiBold
};
