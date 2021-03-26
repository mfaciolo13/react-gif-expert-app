import { useEffect, useState } from "react";
import { getGifs } from "../helper/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return state;
};
