import Typography from 'typography';
import alton from 'typography-theme-alton';
alton.baseLineHeight = '1';
alton.blockMarginBottom = '0';

const typography = new Typography(alton);
export const { scale, rhythm, options } = typography;

export default typography;