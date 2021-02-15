import { FontFamily, Colors } from '../../Theme';

export const container = {
  flex: 1,
  flexGrow: 1
};

export const inner = {
  flex: 1,
  flexDirection: 'column-reverse',
  backgroundColor: '#EAEAEA',
  position: 'relative'
};

export const bubbleContainer = {
  height: '100%',
  width: '100%',
  flex: 1,
  flexDirection: 'column-reverse'
};

export const menuIcon = {
  paddingRight: 8
};

export const loadingContentStyles = {
  backgroundColor: '#EAEAEA'
};

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
