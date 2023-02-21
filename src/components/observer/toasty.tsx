import { useEffect, useRef, useState } from 'react';
import styles from './toasty.module.css';

export default function Toasty(): JSX.Element {
  const [isShown, setIsShown] = useState(false);

  const translateX = isShown ? '0%' : '100%';

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;

      setIsShown(entry.isIntersecting);
    });

    if (wrapperRef.current !== null) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={wrapperRef} className={styles.Wrapper}>
      <div
        className={styles.Character}
        style={{
          transform: `translateX(${translateX})`,
        }}
      >
        👻
      </div>
    </div>
  );
}
