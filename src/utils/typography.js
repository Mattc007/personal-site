import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'
fairyGatesTheme.overrideThemeStyles = ({ adjustFontSizeTo, scale, rhythm }, options) => {
  const linkColor = '#f13718'
  return {
    a: {
      color: linkColor,
      fontWeight: '600',
      textDecoration: 'none',
      textShadow:
        '.03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff', // eslint-disable-line
      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
    },
    'a:hover,a:active': {
      textShadow: 'none',
      backgroundImage: 'none',
    },
    blockquote: {
      ...scale(1 / 5),
      borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
      paddingLeft: rhythm(10 / 16),
      fontStyle: 'italic',
      marginLeft: 0,
      marginRight: 0,
    }
  }
}

const typography = Typography(fairyGatesTheme)
module.exports = typography
