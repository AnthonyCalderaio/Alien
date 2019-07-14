/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
// import Sound from 'react-native-sound'


// import { BleManager } from 'react-native-ble-plx';
// import {RNCamera} from 'react-native-camera';








// Enable playback in silence mode
// Sound.setCategory('Playback');

// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
// var whoosh = new Sound('WaitingInShip.m4a', Sound.MAIN_BUNDLE, (error) => {
//   if (error) {
//     console.log('failed to load the sound', error);
//     return;
//   }
//   // loaded successfully
//   console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
//   whoosh.setNumberOfLoops(-1);
//   // Play the sound with an onEnd callback
//   whoosh.play((success) => {
//     if (success) {
//       console.log('successfully finished playing');
      
//     } else {
//       console.log('playback failed due to audio decoding errors');
//     }
//   });
// });

// Reduce the volume by half
// whoosh.setVolume(0.5);

// // Position the sound to the full right in a stereo field
// whoosh.setPan(1);

// Loop indefinitely until stop() is called


// Get properties of the player instance
// console.log('volume: ' + whoosh.getVolume());
// console.log('pan: ' + whoosh.getPan());
// console.log('loops: ' + whoosh.getNumberOfLoops());

// Seek to a specific point in seconds
//whoosh.setCurrentTime(2.5);

// Get the current playback point in seconds
//whoosh.getCurrentTime((seconds) => console.log('at ' + seconds));

// Pause the sound
//whoosh.pause();

// Stop the sound and rewind to the beginning
// whoosh.stop(() => {
//   // Note: If you want to play a sound after stopping and rewinding it,
//   // it is important to call play() in a callback.
//   whoosh.play();
// });

// Release the audio player resource
// whoosh.release();


// const manager = new BleManager()
export default class App extends React.Component{
  

  constructor(props) {
    super(props);
    this.state = {
      videoURI: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      cameraType: 'front',
      mirrorMode: false,
      recordingStatus: "Start Recording",
      cameraColor:'white',
      currentVideoURI: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      videoRecorded: false,

      //When testing, make true. for production, make false.
      readyToPlay: false,

      playColor:'white',
      timer:3,
      videoBase64:'',
      stringToUpload:''
      
    };
  }
  
//////BLUE TOOTH
// scanAndConnect() {
//   manager.startDeviceScan(null,
//                                null, (error, device) => {
//     //this.info("Scanning...")
//     //alert((JSON.Stringify(device)))

//     if (error) {
//       this.error(error.message)
//       return
//     }
//     if (device.name === 'Mobile Phone') {
//       alert("Found your thing")
//     }

   
//   });
// }
/////

///////BLUE TOOTH






  // playSound(){

  //   // var sound = new Sound('WaitingInShip.m4a', Sound.MAIN_BUNDLE, (error) => {
  //   //   if (error) {
  //   //     console.log('failed to load the sound', error);
  //   //     return;
  //   //   }})
  //   //let sound = loadSound('/Users/anthonycalderaio/Desktop/Manifest2/Alien/WaitingInShip.aif')
  // //alert("sound playing")
  //   //sound.play();
  //   // whoosh.play();
  //   //alert("Hello")
  // }


  // <Text style={styles.welcome}>Alien</Text>
  //       <Button
  //       title={"Click me"}
  //       //onPress={() => alert(JSON.stringify(manager.state()))}
  //       //onPress={this.scanAndConnect.bind(this)}
  //       onPress={() => alert("pressed")}
  //       />

  render() {
    
    return (
      <View style={styles.container}>
      
        
        {/* <RNCamera style={{height: 220, width: 220}}
                        ref={cam => this.camera=cam}
                        aspect={RNCamera.constants.Aspect.fill}
                        type={RNCamera.constants.Type.front}
                        mirrorImage={this.state.mirrorMode}

                        captureMode = {RNCamera.constants.CaptureMode.picture}
                        captureTarget={RNCamera.constants.CaptureTarget.disk}
                        ></RNCamera> */}
                        <Text style={{color:'white'}}>Hi</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 80,
    textAlign: 'center',
    margin: 10,
    color:'green',
    fontFamily:'Menlo'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
