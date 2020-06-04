import Typography from 'typography';
import stAnnesTheme from 'typography-theme-st-annes';
stAnnesTheme.baseLineHeight = '1.4';
stAnnesTheme.blockMarginBottom = '0';
stAnnesTheme.blockMarginTop = '0';

const typography = new Typography(stAnnesTheme);
export const { scale, rhythm, options } = typography;

export default typography;