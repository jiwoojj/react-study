import styled from 'styled-components';
import { flexAlignCenter, flexCenter, flexCenterColumn } from '../../styles/common';

const S = {}

S.ThemeP = styled.p`
  color: ${({theme}) => theme.PALLETE.primary.main};
  font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
`


S.Wrapper = styled.div`
  ${flexCenter}
`

S.Content = styled.div`
  ${flexCenterColumn}

  /* 자가선택자 */
  & button {
    width: 100%;
    background-color : green;
  }

  .btn {
    color: yellow;
  }
`

S.InputWrapper = styled.div`
  ${flexAlignCenter}
`



S.Title = styled.p`
  color: ${(props) => props && props.color}; //props가 있을때만 적용되게
  font-size: ${({fontSize}) => {return fontSize}};
`

S.Button = styled.button `
  width: 200px;
  height: 60px;
  background-color: ${({backgroundColor}) => backgroundColor};
`

S.StyledP = styled.p`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  border: solid 1px #333;
`

S.StyledButton = styled.button`
  background-color: orange;
  border: none;
`

S.StyledInput = styled.input`
  width: 200px;
  height: 60px;
  border: none;
  background-color: purple;
`

S.StyledStrong = styled.strong`
  border-bottom: 1px solid #3333;
`



export default S;