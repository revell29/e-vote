import React from 'react';

export default function useModal<T>() {
  const [isShow, setIsShow] = React.useState(false);
  const [data, setData] = React.useState<T>();

  const close = () => setIsShow(false);

  const open = (pData?: T) => {
    setData(pData);
    setIsShow(true);
  };

  return {
    isShow,
    setIsShow,
    data,
    close,
    open,
  };
}
