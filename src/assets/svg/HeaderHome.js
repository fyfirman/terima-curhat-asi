import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg width="360" height="167" viewBox="0 0 360 167" fill="none" 
preserveAspectRatio="xMidYMax slice"  xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L360 1.5V111.5C360 111.5 254 166.5 158.5 166.5C63 166.5 0 159.5 0 159.5V0Z" fill="#1BB1BD"/>
</svg>
`;

export default (props) => <SvgXml {...props} xml={xml} />;
