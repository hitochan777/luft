import Typography from 'typography'

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
  baseLineHeight: '1.66rem',
  headerFontFamily: FONTS,
  headerWeight: 300,
  bodyFontFamily: FONTS,
  bodyWeight: 300,
  scaleRatio: 1.5,
})

export default typography
