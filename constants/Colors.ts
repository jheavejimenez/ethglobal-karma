const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const DefaultColor = {
  main: '#2381EE',
  secondary: '#FFA500',
  white: '#fff',
  black: '#000',
  dark: '#707070',
}

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
