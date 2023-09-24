import { useRef, useEffect } from 'react';
import './styles/BOOTS.scss'

export const BOOTS = () => {
  const myRef = useRef(null);

  useEffect(() => {
    // Access the DOM element using myRef.current
    if (myRef.current) {
    //   console.log(myRef.current.style.backgroundColor)
    myRef.current.style.backgroundColor = "white";
    }
  }, []);

  return (
    <div>
      <p ref={myRef}>Initial Text</p>
    </div>
  );
}