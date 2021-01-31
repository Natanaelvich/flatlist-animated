import * as React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
import { API_KEY_PEXELS } from '../../env';

const { width, height } = Dimensions.get('screen');

const IMAGE_SIZE = 80;
const SPACING = 10;
const API_URL =
  'https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20';

const fectImagesFromPexels = async () => {
  let data = [];

  try {
    data = await fetch(API_URL, {
      headers: {
        Authorization: API_KEY_PEXELS,
      },
    });

    return data.json();
  } catch (error) {
    console.log(error);
  }

  return data;
};
export default () => {
  const topRef = React.useRef();
  const thumbRef = React.useRef();

  const [images, setImages] = React.useState([]);
  const [indexItem, setIndexItem] = React.useState(0);

  function setActivityIndex(index) {
    setIndexItem(index);

    topRef?.current.scrollToOffset({
      offset: index * width,
      animated: true,
    });

    if (index * (IMAGE_SIZE * SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef?.current.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef?.current.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  }

  React.useEffect(() => {
    async function fetchImages() {
      const { photos } = await fectImagesFromPexels();

      setImages(photos);
    }

    fetchImages();
  }, []);

  if (!images) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar hidden />
      <FlatList
        ref={topRef}
        data={images}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev => {
          setActivityIndex(Math.floor(ev.nativeEvent.contentOffset.x / width));
        }}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item.src.portrait }}
                style={[StyleSheet.absoluteFillObject]}
              />
            </View>
          );
        }}
      />
      <FlatList
        ref={thumbRef}
        data={images}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ position: 'absolute', bottom: IMAGE_SIZE }}
        contentContainerStyle={{
          paddingHorizontal: SPACING,
        }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => setActivityIndex(index)}>
              <Image
                source={{ uri: item.src.portrait }}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  borderRadius: 12,
                  marginRight: SPACING,
                  borderWidth: 2,
                  borderColor: index === indexItem ? '#fff' : 'transparent',
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
