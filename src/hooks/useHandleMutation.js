// 📁 src/hooks/useHandleMutation.js
import NetInfo from '@react-native-community/netinfo';
import { useDispatch } from 'react-redux';
import { pushAlert, setLoading } from '../redux/slices/alertSlice';
import { withTimeout } from '../utils/withTimeout';

const useHandleMutation = () => {
  const dispatch = useDispatch();

  const handle = async ({
    apiFunc,
    params,
    label = 'default',
    dispatches = [],
    showSuccess = true,
    showError = true,
    customSuccessMsg = null,
    customErrorMsg = null,
    timeoutMs = 8000,
  }) => {
    dispatch(setLoading({ key: label, value: true }));

    try {
      console.log('Api ... runnig');
      const netState = await NetInfo.fetch();
      if (!netState.isConnected) {
        throw { name: 'OfflineError' };
      }

      const res = await withTimeout(
        signal => apiFunc(params, { signal }).unwrap(),
        timeoutMs,
      );

      dispatches.forEach(fn => dispatch(fn(res)));

      if (showSuccess) {
        dispatch(
          pushAlert({
            id: Date.now().toString(),
            type: 'success',
            message: customSuccessMsg || res?.message || 'Success',
          }),
        );
      }
      console.log(res, 'res');

      return res;
    } catch (err) {
      console.log(err, '🔥 Error caught');

      let message = 'Something went wrong';

      if (err.name === 'AbortError') {
        message = '⚠️ Server or Network is slow. Request Timed Out';
      } else if (err.name === 'OfflineError') {
        message = '🚫 You are currently offline';
      } else if (err?.status === 'FETCH_ERROR') {
        message = '🌐 Network Error: Unable to connect to server';
      } else if (customErrorMsg) {
        message = customErrorMsg;
      } else if (err?.data?.message) {
        message = err.data.message;
      }

      if (showError) {
        dispatch(
          pushAlert({
            id: Date.now().toString(),
            type: 'error',
            message,
          }),
        );
      }

      return null;
    } finally {
      dispatch(setLoading({ key: label, value: false }));
    }
  };

  return handle;
};

export default useHandleMutation;
