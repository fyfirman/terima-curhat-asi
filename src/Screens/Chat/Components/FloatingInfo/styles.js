import { FontFamily, Colors } from '../../../../Theme';

const BORDER_RADIUS = 8;

export const root = {
  position: 'absolute',
  width: '100%',
  top: 0,
  padding: 8
};

export const button = (showInfo) => ({
  elevation: 1,
  backgroundColor: 'white',
  paddingVertical: 8,
  paddingHorizontal: 16,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottomLeftRadius: BORDER_RADIUS,
  borderBottomRightRadius: BORDER_RADIUS,
  ...(!showInfo && {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS
  })
});

export const buttonText = {
  color: Colors.textPrimary,
  fontFamily: FontFamily.OpenSans.semiBold
};

export const infoContainer = (showInfo) => ({
  elevation: 1,
  backgroundColor: '#FBFBFB',
  ...(showInfo && {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS
  })
});

export const infoItem = {
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderColor: 'rgba(0,0,0,0.2)',
  borderBottomWidth: 0.5
};

export const label = {
  color: Colors.textPrimary,
  fontFamily: FontFamily.OpenSans.semiBold
};

export const info = {
  color: Colors.textPrimary,
  fontFamily: FontFamily.OpenSans.regular
};
