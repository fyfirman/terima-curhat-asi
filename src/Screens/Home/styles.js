import Colors from '../../Theme/Colors';
import { FontFamily } from '../../Theme';

export const container = {
  flex: 1,
  backgroundColor: 'white',
  justifyContent: 'space-between'
};

export const header = {
  backgroundColor: '',
  marginTop: -2
};

export const headerBottom = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  paddingTop: 0,
  marginTop: -16
};

export const headings = {
  fontFamily: FontFamily.Muli.extraBold,
  fontSize: 24,
  color: 'white',
  alignSelf: 'center'
};

export const primaryInfo = {
  fontFamily: FontFamily.OpenSans.regular,
  color: Colors.textPrimary,
  fontSize: 15
};

export const vector = {
  width: 200,
  height: 150
};

export const headerBackground = {
  backgroundColor: 'white',
  position: 'absolute'
};

export const newArticle = {
  backgroundColor: 'white'
};

export const menu = {
  height: '100%',
  backgroundColor: 'white'
};

export const menuButton = {
  margin: 16,
  height: 44,
  width: 44,
  minWidth: 44,
  paddingLeft: 13,
  paddingTop: -4,
  borderRadius: 100,
  backgroundColor: Colors.java,
  elevation: 1
};

export const menuIcon = {
  fontSize: 28,
  marginTop: -2
};

export const menuItems = {
  flexDirection: 'row'
};

export const titleHeader = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  paddingTop: 8,
  paddingBottom: 4
};

export const titleSection = {
  fontFamily: FontFamily.Muli.extraBold,
  color: Colors.textPrimary
};

export const seeMore = {
  fontFamily: FontFamily.OpenSans.regular,
  color: Colors.textPrimary
};

export const articleContainer = {
  paddingHorizontal: 16
};
