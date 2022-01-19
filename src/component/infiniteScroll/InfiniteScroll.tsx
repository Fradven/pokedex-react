import React, { useRef, useEffect, useState } from 'react'

type Props = {
  onBottomHit: () => void;
  isLoading: boolean;
  hasMoreData: boolean;
  loadOnMount: boolean;
};


const InfiniteScroll: React.FC<Props> = ({
  onBottomHit,
  isLoading,
  hasMoreData,
  loadOnMount,
  children,
}) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  function isBottom(ref: React.RefObject<HTMLDivElement>) {
    if (!ref.current) {
      return false;
    }
    return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
  }
  

  useEffect(() => {
    if (loadOnMount && initialLoad) {
      onBottomHit();
      setInitialLoad(false);
    }
  }, [onBottomHit, loadOnMount, initialLoad]);

  useEffect(() => {
    const onScroll = () => {
      if (!isLoading && hasMoreData && isBottom(contentRef)) {
        onBottomHit();
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [onBottomHit, isLoading, hasMoreData]);

  return <div className='pokemon' ref={contentRef}>{children}</div>;
};

export default InfiniteScroll
