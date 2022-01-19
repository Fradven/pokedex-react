import React, { useRef, useEffect } from 'react'

type Props = {
    onBottomHit: () => void; //the function where we fetch the information 
  };

const InfiniteScroll: React.FC<Props> = ({
    onBottomHit,
    children
}) =>{
    const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!contentRef.current) {
      return false;
    }
    if (contentRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
      onBottomHit()
    }
  }

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className='pokemon' ref={contentRef}>{children}</div>;
}

export default InfiniteScroll
