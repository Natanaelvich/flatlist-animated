import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { addLocation } from '../store/modules/utils/actions';

const Localization = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getLocationAsync() {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }

      try {
        await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 1000 * 60 * 5,
            distanceInterval: 100,
            maximumAge: 1000,
          },
          async location => {
            const { latitude, longitude } = location.coords;
            dispatch(addLocation({ latitude, longitude }));
          }
        );
      } catch (error) {
        console.log(error);
      }
    }

    getLocationAsync();
  }, [dispatch]);

  return null;
};

export default Localization;
