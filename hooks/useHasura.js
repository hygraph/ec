import { useState, useEffect } from "react";
import axios from "axios";

export const hasuraStates = {
  LOADING: "loading",
  ERROR: "error",
  LOADED: "loaded",
};

function useHasura(query, variables = {}) {
  const STATES = hasuraStates;

  const ax = axios.create({
    baseURL: "https://gcms-wine-demo.hasura.app/v1",
    method: "post",
  });

  const [state, setState] = useState(STATES.LOADING);
  const [error, setError] = useState(null);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setState(STATES.LOADING);

      try {
        const response = await ax("/graphql", {
          data: {
            query,
            variables,
          },
        });
        if (response.data.error) {
          setState(STATES.ERROR);
          setError(response.data.error[0].message);
        } else {
          setData(response.data.data);
          setState(STATES.LOADED);
        }
      } catch (error) {
        setState(STATES.ERROR);
        setError(e.message);
      }
    };
    fetchData();
  }, [...Object.values(variables)]);

  return { data, error, state };
}

export default useHasura;
