import React, { useState, useRef, useEffect } from 'react'

type Props = {
    onBottomHit: () => void; //the function where we fetch the information 
    //isLoading: boolean; //set to see if is loiding or not
    hasMoreData: boolean; //check if there's more data
    loadOnMount: boolean; //load initial page
  };

  /**
   * Verify the postion of the user compared to ref div, if below return true
   * @param ref 
   * @returns boolean
   */
 /*  function isBottom(ref: React.RefObject<HTMLDivElement>) {
    if (!ref.current) {
        console.log('coucou')
      return false;
    }
    console.log('cou')
    return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
  } */

const InfiniteScroll: React.FC<Props> = ({
    onBottomHit,
    //isLoading,
    //hasMoreData,
    children,
    loadOnMount
}) =>{
    const [initialLoad, setInitialLoad] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadOnMount && initialLoad) {
      //onBottomHit();
      setInitialLoad(false);
    }
  }, [onBottomHit, loadOnMount, initialLoad]);

  /* useEffect(() => {
    const onScroll = () => {
      if (!isLoading && hasMoreData && isBottom(contentRef)) {
        onBottomHit();
        console.log('bump')
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []); */
  const handleScroll = () => {
    if (!contentRef.current) {
      return false;
    }
    //@typescript-eslint/no-unused-expressions
    if (contentRef.current.getBoundingClientRect().bottom <= window.innerHeight) onBottomHit()
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <div className='pokemon' ref={contentRef}>{children}</div>;
}

export default InfiniteScroll
