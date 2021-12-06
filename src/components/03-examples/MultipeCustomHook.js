import React from "react";
import { useCounter } from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";

const MultipeCustomHook = () => {
  const { state, increment, decrement } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h4>BreakingBad Quotes</h4>
      <br />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-3"> {quote} </p>
          <footer className="blockquote-footer"> {author} </footer>
        </blockquote>
      )}
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

export default MultipeCustomHook;
