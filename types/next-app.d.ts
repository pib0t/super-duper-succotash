declare module 'next/app' {
  import { AppProps, AppContext, AppInitialProps } from 'next/app'
  
  export { AppProps, AppContext, AppInitialProps }
  
  export default function App(props: AppProps): JSX.Element
}
