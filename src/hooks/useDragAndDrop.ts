import { DragEvent, useRef } from 'react';

export const useDragAndDrop = () => {
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleDragStart =
    <T>(index: number) =>
    (event: DragEvent<T>) => {
      event.stopPropagation();
      dragItem.current = index;
    };

  const handleDragEnter =
    <T>(index: number) =>
    (event: DragEvent<T>) => {
      event.stopPropagation();
      dragOverItem.current = index;
    };

  const dropAndGetNewList =
    <Data, Element>(list: Data[], callback: (list: Data[]) => void) =>
    (event: DragEvent<Element>) => {
      event.stopPropagation();
      if (list === null || dragItem.current === null || dragOverItem.current === null) return list;

      const newList = [...list];
      const dragItemValue = newList[dragItem.current];
      newList.splice(dragItem.current, 1);
      newList.splice(dragOverItem.current, 0, dragItemValue);
      dragItem.current = null;
      dragOverItem.current = null;

      callback(newList);
    };

  const handleDragOver = <Element>(event: DragEvent<Element>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return { handleDragStart, handleDragEnter, dropAndGetNewList, handleDragOver };
};
