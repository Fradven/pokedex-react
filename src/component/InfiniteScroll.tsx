import React, { useRef, useEffect, useState } from 'react'

type Props = {
  onBottomHit: () => void; //function that will activate at end of the use ref <div>
  isLoading: boolean; //check for loading
  hasMoreData: boolean; //check for more data
  loadOnMount: boolean; //true to load data on page load
};


const InfiniteScroll: React.FC<Props> = ({
  onBottomHit,
  isLoading,
  hasMoreData,
  loadOnMount,
  children,
}) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null); //if the element of the ref to be > then null

  //return a boolean depending if ref is null or not
  function isBottom(ref: React.RefObject<HTMLDivElement>) {
    //if ref is null return false
    if (!ref.current) {
      return false;
    }
    //if ref is at the bottom return true
    return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
  }
  

  //on intial laod, return to top of page and call function linked to onBottomHit() to load the data for the first time
  useEffect(() => {
    if (loadOnMount && initialLoad) {
      onBottomHit();
      setInitialLoad(false);
    }
  }, [onBottomHit, loadOnMount, initialLoad]);

  //add an event listener for scrolling, call onBottomHit() once the user reach the bottom and removre the event listener when done
  useEffect(() => {
    //check if not loading, has more data and has reach bottom => activate onBottomHit()
    const onScroll = () => {
      if (!isLoading && hasMoreData && isBottom(contentRef)) {
        onBottomHit();
      }
    };
    document.addEventListener('scroll', onScroll); //listen to scroll so that onScroll can get data for isBottom()
    return () => document.removeEventListener('scroll', onScroll); //remove listener (don't know why yet)
  }, [onBottomHit, isLoading, hasMoreData]);

  return <div className='pokemon' ref={contentRef}>{children}</div>;
};

export default InfiniteScroll
