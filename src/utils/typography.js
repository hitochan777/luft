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
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  headerFontFamily: FONTS,
  headerWeight: 300,
  bodyFontFamily: FONTS,
  bodyWeight: 300,
})

export default typography
