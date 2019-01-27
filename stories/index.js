import React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import Button from '../src/components/atom/Button'
import { CoverImage } from '../src/components/atom/Image'
import theme from '../src/theme'

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

storiesOf('Button', module)
  .addDecorator(ThemeDecorator)
  .add('with text', () => <Button>ボタンです</Button>)

storiesOf('CoverImage', module)
  .addDecorator(ThemeDecorator)
  .add('デフォルト', () => (
    <CoverImage src="http://placehold.jp/640x480.png?text=サンプル" />
  ))
