import Typography from 'typography'

const GOTHICS = [
  'Hiragino Kaku Gothic ProN',
  'ヒラギノ角ゴ ProN W3',
  'Meiryo',
  'メイリオ',
  'Osaka',
  'MS PGothic',
  'arial',
  'helvetica',
  'sans-serif',
]

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  headerFontFamily: GOTHICS,
  bodyFontFamily: GOTHICS,
})

export default typography
