import styled from 'styled-components'

export const Main = styled.div`
	max-width: 800px;
  width: 100%;
	margin: 0 auto;
`

export const Header = styled.header`
  max-width: 800px;
  padding: 2rem 0;
  width: 100%;
  margin: 0 auto;
	align-items: center;
`

export const Section = styled.section`
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const Footer = styled.footer`
	border-top: 1px solid #eee;
  width: 100%;
	margin-top: 20px;
	padding: 20px 0;
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 1rem 3rem;
  border-radius: 4px;
  border: 1px solid #fafafa;
`

export const H1 = styled.h1`
  text-align: center;
  width: 100%;
  font-size: 2.5rem;
  margin: 0;
`

export const H2 = styled.h2`
  text-align: left;
  font-size: 2.15rem;
  margin-bottom: 2rem;
  padding-left: 3rem;
  @media screen and (max-width: 414px) {
    margin-left: 0;
  }
`

export const H3 = styled.h3`
  text-align: left;
  font-size: 1.75rem;
  margin-bottom: 2rem;
`

export const TextInput = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  &+&+&+& {
    margin-bottom: 2.5rem;
  }
`

export const InputStyled = styled.input`
	padding: 8px 15px;
  width: 230px;
	margin-left: 1rem;
	font-size: 1rem;
	border-radius: 4px;
	line-height: 1;
  &:hover,&:focus {
    outline: none;
  }
  @media screen and (max-width: 414px) {
    margin-left: 0;
    width: 100%;
  }
`

export const ButtonWrap = styled.div`
  margin: 2rem 0;
  button {
    padding: 7px 20px;
    border-radius: 4px;
    font-size: 1rem;
    transition: background-color .25s linear;
    @media screen and (max-width: 414px) {
      width: 100%;
      padding: 10px 20px;
    }
  }
  button:hover {
    background-color: #03A9F4;
    color: #fafafa;
    border-color: #2196F3;
  }
`


export const StyledButton = styled.button`
  padding: 8px 15px;
	border-radius: 4px;
	background: orangered;
	border: 1px solid #fbbfbf;
	color: white;
	font-weight: 400;
	font-size: 1rem;
	& + & {
		margin-left: 20px;
	}
  @media screen and (max-width: 414px) {
    margin-left: 0;
    width: 100%;
  }
`

export const SelectInput = styled.select`
  font-size: 1rem;
  width: 150px;
  &:hover,&:focus {
    outline: none;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 0;
    font-size: 1rem;
    height: 42px;
    padding: .5rem;
    background: #fafafa;
  }
`

export const Label = styled.label`
  font-size: 1rem;
  width: 150px;
  line-height: 38px;
`
