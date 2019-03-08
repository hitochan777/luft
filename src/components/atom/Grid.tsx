import React from 'react'
import {
  Flex as GridFlex,
  Box as GridBox,
  FlexProps,
  BoxProps,
} from '@rebass/grid'

export const Flex = (props: FlexProps) => <GridFlex {...props} my="2rem" />
export const Box = (props: BoxProps) => <GridBox {...props} my="2rem" />
