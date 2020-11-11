import React from "react";
import { AnswerObject } from "../../App";
import { ScoreWrapper, Wrapper } from "./ScoreCard.styles";

type Props = {
  score: number;
  userAnswers: AnswerObject[];
  totalQuestions: number;
};

export const ScoreCard: React.FC<Props> = ({ totalQuestions, score, userAnswers }) => {
  return (
      <>
      <h1 style={{ color: "white" }}>{score} correct answers</h1>
    <Wrapper>
      {userAnswers.map((userAnswer, i) => {
        return (
          <ScoreWrapper correct={userAnswer.correct} key={i}>
            <p className="number">
              Question: {i + 1} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: userAnswer.question }} />
            <p>Your answer: {userAnswer.answer}</p>
            <p>Correct answer: {userAnswer.correctAnswer}</p>
          </ScoreWrapper>
        );
      })}
    </Wrapper>
    </>
  );
};
