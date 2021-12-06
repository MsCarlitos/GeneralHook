import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";

import './layout.css'

const Layout = () => {
  const { state, increment, decrement } = useCounter(1);
  const [boxSize, setBoxSize] = useState({})

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef()

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect())
  }, [quote])

  return (
    <div>
      <h4>BreakingBad Quotes</h4>
      <br />

      <blockquote className="blockquote text-end">
        <p
            ref={pTag}
            className="mb-3"
        >
            {quote}
        </p>
      </blockquote>

      <pre> { JSON.stringify(boxSize,null, 3) } </pre>

      {state !== 1 && (
        <button className="btn btn-primary me-5" onClick={() => decrement(1)}>
          Anterior Quote
        </button>
      )}

      <button className="btn btn-primary" onClick={() => increment(1)}>
        Siguiente Quote
      </button>
    </div>
  );
};

export default Layout;
