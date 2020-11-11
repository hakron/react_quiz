import styled from "styled-components";

type ScoreWrapperProps = {
  correct: boolean;
};


export const Wrapper = styled.div`
  max-width: 1100px;
`;

export const ScoreWrapper = styled.div<ScoreWrapperProps>`
  max-width: 1100px;
  background: ${({ correct }) =>
      correct
        ? "linear-gradient(90deg, #56FFA4, #59BC86)"
        : !correct
        ? "linear-gradient(90deg, #FF5656, #C16868)"
        : "#ebfeff"};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin-bottom: 20px;
  margin-bottom: 20px;

p {
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25); 
    color: #fff
    }
}
`;
