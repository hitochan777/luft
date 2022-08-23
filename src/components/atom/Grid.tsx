import React from 'react'
import {
  Flex as GridFlex,
  Box as GridBox,
  BoxProps
} from 'reflexbox'

export const Flex = (props: any) => <GridFlex {...props} my="2rem" />
export const Box = (props: BoxProps & {children: React.ReactNode}) => <GridBox {...props} my="2rem" />
