import Colors from '../../../../Theme/Colors';
import { FontFamily } from '../../../../Theme';

export const root = (self) => ({
  flex: 1,
  flexDirection: 'row',
  justifyContent: self ? 'flex-end' : 'flex-start',
  marginTop: 8
});

export const container = (self) => ({
  backgroundColor: self ? Colors.cherub : 'white',
  maxWidth: '80%',
  padding: 8,
  marginBottom: 8,
  marginRight: 4,
  marginLeft: 4,
  borderRadius: 16,
  borderTopRightRadius: self ? 0 : 16,
  borderTopLeftRadius: !self ? 0 : 16,
  elevation: 1
});

export const ava = {
  alignSelf: 'flex-start',
  marginHorizontal: 4
};

export const name = {
  fontFamily: FontFamily.OpenSans.bold,
  fontSize: 15
};

export const label = {
  fontFamily: FontFamily.OpenSans.regular,
  fontSize: 14,
  fontStyle: 'italic',
  textAlign: 'center'
};

export const time = {
  fontFamily: FontFamily.OpenSans.regular,
  fontSize: 11,
  textAlign: 'right'
};

export const button = {
  fontSize: 36,
  color: Colors.mulberry
};
