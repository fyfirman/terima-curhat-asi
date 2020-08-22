import { PinkPrimary, PinkSecondary, Teal } from '../../Theme/Colors';

export const container = {
  flex: 1
};

export const inner = {
  flex: 1,
  justifyContent: 'space-around'
};

export const input = {
  borderBottomColor: PinkSecondary,
  borderBottomWidth: 1,
  borderStyle: 'solid',
  paddingVertical: 8,
  paddingHorizontal: 16,
  fontWeight: '300',
  fontSize: 18
};

export const label = {
  textTransform: 'uppercase',
  color: '#6C6C6C',
  fontSize: 14
};

export const button = {
  paddingVertical: 16
};

export const buttonLabel = {
  color: Teal,
  textTransform: 'uppercase',
  fontSize: 14,
  textAlign: 'center'
};

export const buttonLabelFont = {
  ...buttonLabel,
  fontFamily: 'AdobeClean-Regular'
};

export const buttonPrimary = {
  ...button,
  ...{
    backgroundColor: PinkPrimary
  }
};

export const buttonPrimaryLabel = {
  ...buttonLabel,
  ...{
    color: PinkSecondary
  }
};

export const buttonSecondary = {
  ...button,
  ...{
    backgroundColor: PinkSecondary
  }
};

export const buttonSecondaryLabel = {
  ...buttonLabel,
  ...{
    color: Teal
  }
};

export const headerContainer = {
  width: '100%',
  height: '50%',
  marginTop: '-10%'
};

export const header = {
  backgroundColor: 'white',
  position: 'absolute'
};

export const headerContent = {
  marginTop: '10%'
};
