// 📁 src/components/CustomToastStack.jsx
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { removeAlertById } from '../../redux/slices/alertSlice';


const TOAST_DURATION = 4000;
const SCREEN_WIDTH = Dimensions.get('window').width;

const ToastItem = ({ alert, index }) => {
  const dispatch = useDispatch();
  const translateY = useRef(new Animated.Value(-150)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 10,
      onPanResponderMove: Animated.event([null, { dx: translateX }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        if (Math.abs(gestureState.dx) > SCREEN_WIDTH * 0.3) {
          Animated.timing(opacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start(() => dispatch(removeAlertById(alert.id)));
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -150,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => dispatch(removeAlertById(alert.id)));
    }, TOAST_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.toastItem,
        {
          transform: [
            { translateY },
            { translateX },
            {
              scale: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
              }),
            },
          ],
          top: index * 90 + 20,
          backgroundColor: alert.type === 'success' ? '#00C851' : '#ff4444',
        },
      ]}
    >
      <Text style={styles.title}>
        {alert.type === 'success' ? '✅ Success' : '❌ Error'}
      </Text>
      <Text style={styles.message}>{alert.message}</Text>
    </Animated.View>
  );
};

const CustomToastStack = () => {
  const alerts = useSelector(state => state.alert.queue);

  return (
    <View style={styles.container} pointerEvents="box-none">
      {alerts.map((item, index) => (
        <ToastItem key={item.id} alert={item} index={index} />
      ))}
    </View>
  );
};

export default CustomToastStack;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 9999,
  },
  message: {
    color: '#fff',
    fontSize: 14,
  },
  title: {
    color: '#fff',
    fontSize:  15,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  toastItem: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    elevation: 5,
    padding: 14,
    paddingHorizontal: 16,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    width: '85%',
  },
});
