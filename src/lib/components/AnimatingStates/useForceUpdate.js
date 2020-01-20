import { useCallback, useState } from "react";

const useForceUpdate = () => {
  const [, setState] = useState(false);
  return useCallback(() => {
    setState(s => !s);
  }, []);
};

export default useForceUpdate;
