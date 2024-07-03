import React from 'react';
import { View, Text, Image, ImageBackground, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        blurRadius={20}
        style={styles.imageBackground}
        source={{
          uri: 'https://media.istockphoto.com/id/1226671648/photo/mashpee-commons-on-cape-cod.jpg?s=1024x1024&w=is&k=20&c=6T5YrxUve8cKeXLvOCH1aZ7C_WGcKWqoxvh95IUXmDc=',
        }}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: 'http://clipart-library.com/images_k/falcon-transparent/falcon-transparent-19.png',
              width: 50,
              height: 50
            }}
          />
          <Text style={styles.logoText}>FALCON</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formSubContainer}>
            <TextInput
              placeholder='Name'
              placeholderTextColor={'grey'}
              style={styles.formInput} />
            <TextInput
              placeholder='Mobile'
              placeholderTextColor={'grey'}
              style={styles.formInput} />
            <Button title='Submit'
              color='orange'
              onPress={() => { Alert.alert('Submitted succesfully') }} />
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => { Alert.alert('You have pressed terms and conditions') }}>
              <Text style={styles.footerText}>Terms and conditions</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

    </View >
  );
}

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: { tintColor: 'white' },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    color: 'white'
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    paddingTop: 20,

  },
  formContainer: {
    flex: 1,
  },
  formInput: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    opacity: .5,
    paddingLeft: 20,
    marginBottom: 20
  },
  formSubContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },
  footerContainer: {
    flex: .2,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontWeight: '600',
    textDecorationLine: 'underline'
  }
})