export default {
  grid: {
    container: '130px',
    gutter: '32px'
  },
  border: {
    radius: '4px',
    circle: '100px'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    medium: 500,
    bold: 600,
    sizes: {
      minimal: '8px',
      xxsmall: '10px',
      xsmall: '12px',
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px',
      xxlarge: '28px',
      huge: '52px'
    }
  },
  colors: {
    mainBg: '#c0c0c8',
    subTitle: '#6D5D6E',
    gray: '#393646',
    route: '#1fbad6',
    title: '#222233',
    black: '#161629',
    dark: '#09091a',
    red: '#FF6347',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    lightGray: '#EAEAEA'
  },
  spacings: {
    minimal: '4px',
    xxsmall: '8px',
    xsmall: '16px',
    small: '24px',
    medium: '32px',
    large: '40px',
    xlarge: '48px',
    xxlarge: '56px',
    huge: '104px'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const;
