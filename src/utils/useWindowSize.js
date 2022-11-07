import { useEffect, useState } from 'react';
import visibleStore from "../store/VisibleStore";
export function useWindowSize() {
    let[width, setWidth] = useState(0);
    let[height, setHeight] = useState(0);

    const getWindowSize = (e) => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        //visibleStore.resetAllVisibility();
    };
    useEffect(() => {
      window.addEventListener('load', getWindowSize);
      window.addEventListener('resize', getWindowSize);
      return () => {
          window.removeEventListener('load', getWindowSize);
          window.removeEventListener('resize', getWindowSize);
      }
    });
    return {width, height};
}
