import { DragEvent, useRef } from 'react';

export const useDragAndDrop = () => {
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleDragStart = (position: number) => (dragItem.current = position);

  const handleDragEnter = (position: number) => (dragOverItem.current = position);

  const dropAndGetNewList = <T>(list: T[]): T[] => {
    if (list === null || dragItem.current === null || dragOverItem.current === null) return list;

    const newList = [...list];
    const dragItemValue = newList[dragItem.current];
    newList.splice(dragItem.current, 1);
    newList.splice(dragOverItem.current, 0, dragItemValue);
    dragItem.current = null;
    dragOverItem.current = null;

    return newList;
  };

  const handleDragOver = <T>(event: DragEvent<T>) => event.preventDefault();

  return { handleDragStart, handleDragEnter, dropAndGetNewList, handleDragOver };
};
