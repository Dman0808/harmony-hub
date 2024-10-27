import { useState } from "react";
import { useAuth } from "@/hooks";
import questionsData from "@/data/questions.json";
import { toast } from "react-toastify";
import { commonToastOptions } from "../../helpers/toastOptions";
import {
  MusicHubWrapper,
  QuestionWrapper,
  StepCounter,
  QuestionText,
  AnswerInput,
  NextButton,
  MusicFormWrapper,
  MusicTextWrapper,
  MusicTitle,
  // ExampleText,
} from "./MusicHub.styled";

function Playlist() {
  const { user } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAnswerChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setLoading(true);
      toast.info(
        "Processing your playlist, please wait...",
        commonToastOptions
      );

      setTimeout(() => {
        setLoading(false);
        toast.success(
          "Your personalized playlist is ready!",
          commonToastOptions
        );
      }, 2000);
    }
  };

  const { question, example } = questionsData[currentQuestion];

  return (
    <MusicHubWrapper>
      <MusicTextWrapper>
        <MusicTitle>Hello, {user.name}!</MusicTitle>

        <MusicFormWrapper>
          <StepCounter>
            {currentQuestion + 1} of {questionsData.length}
          </StepCounter>
          <QuestionWrapper>
            <QuestionText>{question}</QuestionText>
            {/* {example && <ExampleText>{example}</ExampleText>} */}
            <AnswerInput
              type="text"
              value={answers[currentQuestion] || ""}
              onChange={handleAnswerChange}
              placeholder={example ? example : "Type your answer here"}
            />
          </QuestionWrapper>
          <NextButton onClick={handleNextQuestion} disabled={loading}>
            {loading
              ? "Generating..."
              : currentQuestion === questionsData.length - 1
              ? "Generate"
              : "Next"}
          </NextButton>
        </MusicFormWrapper>
      </MusicTextWrapper>
    </MusicHubWrapper>
  );
}

export default Playlist;
