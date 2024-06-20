import { defaultTheme } from './../styles/themes/default'

import 'styled-components'

type TypeTheme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends TypeTheme {}
}
