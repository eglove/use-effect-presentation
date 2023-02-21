import { useEffect, useState } from 'react';

export default function OnMouseMove(): JSX.Element {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const callback = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    addEventListener('mousemove', callback);

    return () => {
      removeEventListener('mousemove', callback);
    };
  }, [setMousePosition]);

  return (
    <div>
      <p>
        {mousePosition.x}/{mousePosition.y}
      </p>
    </div>
  );
}
