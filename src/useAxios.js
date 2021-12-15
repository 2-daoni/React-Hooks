import defaultAxios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  if (!options.url) {
    return;
  }
  return { ...state, refetch };
};

const Practice13 = () => {
  const { loading, error, data, refetch } = useAxios({ url: 'https://yts.mx/api/v2/list_movies.json' });
  console.log(`loading: ${loading}, error: ${error}, data: ${JSON.stringify(data)}`);
  return (
    <div>
      <h1>useAxios 공부</h1>
      <h2>{data && data.status}</h2>
      <h3>{loading && '로딩중...'}</h3>
      <button onClick={refetch}>다시 가져오기</button>
    </div>
  );
};

export default Practice13;
