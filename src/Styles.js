import { PinkPrimary, PinkSecondary, Teal } from './Colors';
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
  fontWeight: 'bold',
  textAlign: 'center'
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
