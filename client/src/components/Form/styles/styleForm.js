import styled from "styled-components";
import theme from "./theme";


export default styled.div`
display: flex;
flex-direction: column;
align-items: center;
.detail-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  .blurb {
    width: 50%;
    padding: 0px 20px;
    text-align: center;
  }
  
  .rating .rating-label {
    margin-bottom: 0px;
    font-size: 20px;
  }
}
.detail-mod-links {
  display: flex;
  justify-content: space-evenly;
  button {
    background: none;
    font-family: ${theme.fonts.serif};
    letter-spacing: 0.1em;
    color: ${theme.colors.navy};
    margin: 0px 10px;
    &:hover {
      border-bottom: 1px solid ${theme.colors.navy};
    }
  }
}
`