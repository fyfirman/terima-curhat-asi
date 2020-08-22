import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="360" height="306" viewBox="0 0 360 306" fill="none"  
preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
<path d="M360 0H0V297.091C180.747 229.958 172.78 336.169 360 297.091V0Z" fill="#1BB1BD"/>
</svg>

`;

export default (props) => <SvgXml {...props} xml={xml} />;
