// 📁 src/hooks/useHandleQuery.js
import { useDispatch } from 'react-redux';
import { clearLoadingKey, pushAlert, setLoading } from '../redux/slices/alertSlice';

const useHandleQuery = () => {
  const dispatch = useDispatch();

  const handle = async ({
    apiFunc,
    params = null,
    label = 'defaultQuery', // 🔑 Unique loading key per GET API
    dispatches = [],
    showSuccess = false, // ✅ Usually off for GET, turn on if needed
    showError = true,
    customSuccessMsg = null,
    customErrorMsg = null,
  }) => {
    dispatch(setLoading({ key: label, value: true }));

    try {
      const res = params
        ? await apiFunc(params).unwrap()
        : await apiFunc().unwrap();

      dispatches.forEach(fn => dispatch(fn(res)));

      const successMsg =
        customSuccessMsg || res?.message || 'Fetched successfully';
      if (showSuccess) {
        dispatch(
          pushAlert({
            type: 'success',
            message: successMsg,
            id: Date.now().toString(), // 👈 unique ID
          }),
        );
      }

      return res;
    } catch (err) {
      const errorMsg =
        customErrorMsg || err?.data?.message || 'Failed to fetch';
      if (showError) {
        dispatch(
          pushAlert({
            type: 'error',
            message: errorMsg,
            id: Date.now().toString(), // 👈 unique ID
          }),
        );
      }

      return null;
    } finally {
      dispatch(setLoading({ key: label, value: false }));

       // ⭐⭐ COMPLETELY REMOVE KEY
      dispatch(clearLoadingKey(label));
    }
  };

  return handle;
};

export default useHandleQuery;
