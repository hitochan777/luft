import Typography from 'typography'

import theme from '../theme'

const FONTS = [
  'Roboto Condensed',
  'YuGothic',
  'ヒラギノ角ゴ ProN W3',
  'Hiragino Kaku Gothic ProN',
  'メイリオ',
  'Meiryo, Osaka',
  'ＭＳ Ｐゴシック',
  'MS PGothic',
  'sans-serif',
]

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.66,
  headerFontFamily: FONTS,
  headerWeight: 300,
  headerColor: theme.grayColor,
  bodyFontFamily: FONTS,
  bodyWeight: 300,
  bodyColor: theme.grayColor,
  scaleRatio: 1.5,
})

export default typography
