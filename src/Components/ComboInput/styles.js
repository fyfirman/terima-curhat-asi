import { Colors, FontFamily } from '../../Theme';

export const optionItem = (index, chosen) => {
  return {
    backgroundColor: chosen ? Colors.cherub : 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderTopColor: index === 0 ? 'transparent' : Colors.cherub
  };
};

export const optionText = (chosen) => {
  return {
    textAlign: 'center',
    color: chosen ? Colors.cerulean : Colors.textPrimary,
    fontFamily: FontFamily.OpenSans.regular
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
  backgroundColor: Colors.cherub,
  borderRadius: 10
};

export const buttonText = {
  fontFamily: FontFamily.OpenSans.regular,
  textAlign: 'center',
  color: Colors.cerulean,
  fontSize: 16
};

export const labelText = {
  fontFamily: FontFamily.OpenSans.regular,
  fontSize: 14,
  color: Colors.textSecondary,
  paddingBottom: 4
};
