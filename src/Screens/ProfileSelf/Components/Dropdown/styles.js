import { FontFamily, Colors } from '../../../../Theme';

export const root = { flexDirection: 'row', paddingVertical: 8 };

export const labelStyle = {
  fontSize: 14,
  color: Colors.textPrimary,
  fontFamily: FontFamily.OpenSans.regular,
  padding: 6
};

export const itemStyle = {
  padding: 10,
  borderColor: '#bbb',
  borderWidth: 0.5
};

export const itemsContainerStyle = { maxHeight: 200 };

export const textInputStyle = {
  padding: 12,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5
};
