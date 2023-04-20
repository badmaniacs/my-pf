import { useEffect, useState, useCallback } from 'react';
import commentApi from '@/libs/axios';
import { IComment } from '@/libs/type';

const usePagenation = () => {
  const [data, setData] = useState<IComment[]>([]);
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState('');
  const [noMore, setNoMore] = useState(false);

  const getFirstPage = useCallback(async () => {
    try {
      setLoading(true);
      const snap = await commentApi.getComment();
      setData(snap.data);
      setKey(snap.data[snap.data.length - 1].id);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, []);

  const loadMore = useCallback(async () => {
    try {
      setLoading(true);
      const snap = await commentApi.getComment(key);
      if (snap.data.length === 0) {
        setNoMore(true);
        setLoading(false);
        return;
      }
      setKey(snap.data[snap.data.length - 1].id);
      setData([...data, ...snap.data]);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [key, data]);

  const filteredDeleteData = useCallback((id: string) => {
    setLoading(true);
    setData((prevState) => prevState.filter((item) => item.id !== id));
  }, []);

  useEffect(() => {
    getFirstPage();
  }, [getFirstPage]);

  return { data, loading, loadMore, noMore, filteredDeleteData, getFirstPage };
};

export default usePagenation;
