import { useRef, useEffect, useState } from 'react';

export const useHorizontalScroll = () => {
  const [x, setX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isPanning, setIsPanning] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [isItemRemoved, setIsItemRemoved] = useState(false);

  const elRef = useRef();

  const onPanStart = () => {
    setIsPanning(true);
  };
  const onPan = (e, i) => {
    setOffsetX(i.offset.x);
  };
  const onPanEnd = (e, i) => {
    setIsPanning(false);
    setX(x + i.offset.x);
  };

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        setX(x - e.deltaY - e.deltaX);
      };

      el.addEventListener('wheel', onWheel);
      if (x > 0) {
        setX(0);
      }
      if (-(el.offsetWidth - el.offsetParent.offsetWidth) >= x) {
        setX(-(el.offsetWidth - el.offsetParent.offsetWidth));
      }
      if (isItemAdded) {
        setX(-(el.offsetWidth - el.offsetParent.offsetWidth));
        setIsItemAdded(false);
      }
      if (isItemRemoved) {
        setIsItemRemoved(false);
      }

      return () => el.removeEventListener('wheel', onWheel);
    }
  }, [x, isItemAdded, isItemRemoved]);

  return [
    x,
    offsetX,
    elRef,
    isPanning,
    onPan,
    onPanStart,
    onPanEnd,
    setIsItemAdded,
    setIsItemRemoved,
  ];
};
