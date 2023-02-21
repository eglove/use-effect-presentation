import { useEffect, useRef, useState } from 'react';

export default function Focus(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef.current]);

  return (
    <>
      <header>
        <img
          className="logo"
          alt="Foobar"
          src="https://sandpack-bundler.vercel.app/img/foogle.svg"
        />
      </header>
      <main>
        <form>
          <input
            ref={inputRef}
            value={searchTerm}
            onChange={event => {
              setSearchTerm(event.target.value);
            }}
          />
          <button>Search</button>
        </form>
      </main>
    </>
  );
}
