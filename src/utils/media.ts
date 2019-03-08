import { css } from 'styled-components'

import { sizes, DeviceType, DeviceSizes } from '../theme'

type DeviceMediaQueryFunction = typeof css

export const max = (Object.keys(sizes) as DeviceType[]).reduce<
  Partial<{ [K in DeviceType]: DeviceMediaQueryFunction }>
>(
  (
    acc: Partial<{ [K in DeviceType]: DeviceMediaQueryFunction }>,
    label: DeviceType
  ) => {
    acc[label] = (first: any, ...interpolations: any) => css`
      @media (max-width: ${sizes[label] - 1}px) {
        ${css(first, ...interpolations)}
      }
    `
    return acc
  },
  {}
) as { [K in DeviceType]: DeviceMediaQueryFunction }

export const min = (Object.keys(sizes) as DeviceType[]).reduce<
  Partial<{ [K in DeviceType]: DeviceMediaQueryFunction }>
>(
  (
    acc: Partial<{ [K in DeviceType]: DeviceMediaQueryFunction }>,
    label: DeviceType
  ) => {
    acc[label] = (first: any, ...interpolations: any) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `
    return acc
  },
  {}
) as { [K in DeviceType]: DeviceMediaQueryFunction }
