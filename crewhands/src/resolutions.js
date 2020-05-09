import React from 'react'
import Responsive from 'react-responsive'
import theme from 'theme'

// $minWidthDesktopExtraLarge: 1440px;
// $minWidthDesktopLarge: 1281px;
// $minWidthDesktopMiddle: 1200px;
// $minWidthDesktop: 992px;
// $minWidthTablet: 768px;
// $maxWidthTablet: 767px;
// $minWidthPhoneMiddle: 576px;
// $minWidthPhone: 320px;

// > 1440px
export const DesktopExtraLarge = props => (
  <Responsive {...props} minWidth={theme.media.minWidthDesktopExtraLarge} />
)

// 1281px - 1440px
export const Desktop1281x1440 = props => (
  <Responsive
    {...props}
    minWidth={theme.media.minWidthDesktopLarge}
    maxWidth={theme.media.minWidthDesktopExtraLarge - 1}
  />
)

// > 1281px
export const DesktopLarge = props => (
  <Responsive {...props} minWidth={theme.media.minWidthDesktopLarge} />
)

// <= 1280px
export const Desktop1280 = props => (
  <Responsive {...props} maxWidth={theme.media.minWidthDesktopLarge - 1} />
)

// 1200px - 1280px
export const Desktop1200x1280 = props => (
  <Responsive
    {...props}
    minWidth={theme.media.minWidthDesktopMiddle}
    maxWidth={theme.media.minWidthDesktopLarge - 1}
  />
)

// <92px
export const DesktopLess992 = props => (
  <Responsive {...props} maxWidth={theme.media.minWidthDesktop} />
)

// 992px
export const DesktopMore992 = props => (
  <Responsive {...props} minWidth={theme.media.minWidthDesktop} />
)

// 768px - 1280px
export const Desktop = props => (
  <Responsive
    {...props}
    minWidth={theme.media.minWidthTablet}
    maxWidth={theme.media.minWidthDesktopLarge - 1}
  />
)

// 992px - 1200px
export const Desktop992x1200 = props => (
  <Responsive
    {...props}
    minWidth={theme.media.minWidthDesktop}
    maxWidth={theme.media.minWidthDesktopMiddle - 1}
  />
)

// 768px - 1200px
export const Desktop768x1200 = props => (
  <Responsive
    {...props}
    minWidth={theme.media.minWidthTablet}
    maxWidth={theme.media.minWidthDesktopMiddle - 1}
  />
)

// 768px - 992px
export const Desktop768x992 = props => (
  <Responsive
    {...props}
    minWidth={theme.media.minWidthTablet}
    maxWidth={theme.media.minWidthDesktop - 1}
  />
)

//  > 768px
export const Tablet = props => (
  <Responsive {...props} minWidth={theme.media.minWidthTablet} />
)

// <= 767px
export const Mobile = props => (
  <Responsive {...props} maxWidth={theme.media.maxWidthTablet} />
)

// 576px - 767px
export const MobileLg = props => (
  <Responsive
    {...props}
    minWidth={theme.media.minWidthPhoneMiddle}
    maxWidth={theme.media.maxWidthTablet}
  />
)

// <= 576px
export const MobileSm = props => (
  <Responsive {...props} maxWidth={theme.media.minWidthPhoneMiddle - 1} />
)
