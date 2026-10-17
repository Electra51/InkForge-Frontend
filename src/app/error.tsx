"use client";

import { useEffect } from "react";

const error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, []);

  return (
    <div>
      <h2>Something went wrong. Please try again</h2>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
};

export default error;
