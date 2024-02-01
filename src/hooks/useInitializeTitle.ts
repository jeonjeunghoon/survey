import { Dispatch, SetStateAction, useEffect } from 'react';

export const useInitializeTitle = ({
  isTitle,
  isEmpty,
  setValue,
}: {
  isTitle: boolean;
  isEmpty: boolean;
  setValue: Dispatch<SetStateAction<string>>;
}) => {
  useEffect(() => {
    // 처음과 저장할 때 초기화되어야 함
    if (isTitle) setValue('제목 없는 설문지');

    return () => {
      if (isTitle && isEmpty) setValue('제목 없는 설문지');
    };
  }, []);
};
