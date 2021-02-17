import { Colors } from '../../../../Theme';

export const buttonStyle = {
  backgroundColor: '#ffffff',
  borderWidth: 0.1,
  borderRadius: 2,
  marginBottom: 8
};

export const buttonTextStyle = { color: Colors.textPrimary };

export const disabledButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#f3f3f3'
};

export const disabledButtonTextStyle = { color: Colors.textSecondary };
