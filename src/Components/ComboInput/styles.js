import { PinkPrimary, PinkSecondary, Teal } from '../../Theme/Colors';

export const listStyle = (index, chosen) => {
  return {
    backgroundColor: chosen ? PinkPrimary : 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderTopColor: index === 0 ? 'transparent' : PinkSecondary
  };
};

export const textStyle = (chosen) => {
  return {
    textAlign: 'center',
    color: chosen ? '#ffffff' : Teal
  };
};

export const optionModal = {
  marginVertical: 16,
  marginHorizontal: 32,
  paddingVertical: 32,
  paddingHorizontal: 16
};

export const modalContainer = {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, .3)',
  justifyContent: 'center'
};

export const optionContainer = { backgroundColor: '#ffffff' };

export const button = {
  paddingVertical: 16,
  backgroundColor: PinkSecondary
};

export const buttonText = {};
