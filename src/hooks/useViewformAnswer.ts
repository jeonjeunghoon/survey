import { useDispatch, useSelector } from 'react-redux';
import { storeAnswer } from '../store/form/formSlice';
import { selectQuestionIsAnswerById } from '../store/form/selectors';

export const useViewformAnswer = (id: number) => {
  const answer = useSelector(selectQuestionIsAnswerById(id));
  const dispatch = useDispatch();

  const changeAnswer = (newAnswer: string | null) =>
    dispatch(storeAnswer({ id, answer: newAnswer }));

  return { answer: answer ?? '', changeAnswer };
};
