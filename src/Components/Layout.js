import React from 'react'
import { Main, Header,H1 } from '../Styles/Styled'


const Layout = ({ children }) => (
	<>
		<Header role='header'>
		  <H1>
			  ShopWorks
		  </H1>
		</Header>
		<Main role='main'>
		  {children}
		</Main>
	</>
)

export default Layout
