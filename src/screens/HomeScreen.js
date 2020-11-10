import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions, Button} from 'react-native';
import {landscapeImage, portraitImage} from '../assets';
import ScreenOrientation, {
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker/ScreenOrientation';

function HomeScreen() {
  const [showVideo, setShowVideo] = useState(false);
  //   useEffect(()=>{

  //   },[])

  const changeOrientation = (orientation) => {
    console.log(orientation);
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      console.log(
        Dimensions.get('screen').width,
        Dimensions.get('screen').height,
      );
      setShowVideo(true);
    } else if (
      orientation === 'PORTRAIT-UPSIDEDOWN' ||
      orientation === 'PORTRAIT'
    ) {
      console.log(
        Dimensions.get('window').width,
        Dimensions.get('window').height,
      );
      setShowVideo(false);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScreenOrientation
        orientation={PORTRAIT}
        // onChange={(orientation) => changeOrientation(orientation)}
        onDeviceChange={(orientation) => changeOrientation(orientation)}
      />

      {showVideo ? (
        <View>
          <ScreenOrientation orientation={LANDSCAPE} />
          <View>
            <Image
              source={landscapeImage}
              style={{
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height,
                resizeMode: 'stretch',
              }}
            />
          </View>
        </View>
      ) : (
        <View>
          <Image
            source={portraitImage}
            style={{
              width: Dimensions.get('screen').height,
              height: Dimensions.get('screen').width,
              resizeMode: 'stretch',
            }}
          />
        </View>
      )}
    </View>
  );
}

export default HomeScreen;
