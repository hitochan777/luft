export type DeviceType = 'desktop' | 'tablet' | 'phone'
export type DeviceSizes = { [K in DeviceType]: number }
export const sizes: DeviceSizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

export default {
  sideNavbarWidth: '200px',
  luftColor: 'rgb(105, 76, 62)',
  grayColor: '#545454',
  lightGray: '#e2e2e2',
  breakpoints: [sizes.phone, sizes.tablet, sizes.desktop],
}
