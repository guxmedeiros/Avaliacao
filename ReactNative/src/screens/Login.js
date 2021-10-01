import React from 'react';
import * as ReactNative from 'react-native';

const styles = ReactNative.StyleSheet.create({
  pageBackground: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    borderRadius: 5,
  },
  imageLogo: {
    width: '90%',
    height: 70,
    alignSelf: 'center',
  },
  inputText: {
    height: 25,
    margin: 0,
    paddingLeft: 15,
    width: '90%',
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    width: '90%',
  },
  space: {
    margin: 20,
  },
  button: {
    backgroundColor: '#1565c0',
    width: '60%',
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
  newUserDiv: {
    alignSelf: 'center',
    borderBottomColor: '#1565c0',
  },
  newUser: {
    color: '#1565c0',
    fontWeight: 'bold',
  },
});

export default function Login({navigation}) {
  const [text, onChangeText] = React.useState('');
  const [pass, onChangePassword] = React.useState('');

  const performLogin = () => {
    if (!text) {
      ReactNative.Alert.alert('Por favor preencha o login');
      return;
    }

    if (!pass) {
      ReactNative.Alert.alert('Por favor preencha a senha');
      return;
    }
    onChangeText('');
    onChangePassword('');

    ReactNative.Alert.alert('Bem vindo');

    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  };

  return (
    <ReactNative.SafeAreaView style={styles.pageBackground}>
      <ReactNative.View style={styles.box}>
        <ReactNative.View style={styles.space} />
        <ReactNative.Image
          style={styles.imageLogo}
          source={{
            uri: 'http://www.neki-it.com.br/brand/assets/images/logo-neki-oficial-1596x452.png',
          }}
        />
        <ReactNative.View style={styles.space} />
        <ReactNative.Text style={styles.inputText}>Login</ReactNative.Text>
        <ReactNative.TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <ReactNative.View style={styles.space} />
        <ReactNative.Text style={styles.inputText}>Senha</ReactNative.Text>
        <ReactNative.TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={pass}
        />
        <ReactNative.View style={styles.space} />
        <ReactNative.View style={styles.button}>
          <ReactNative.Button
            style={styles.button}
            title="Entrar"
            onPress={() => performLogin()}
          />
        </ReactNative.View>
        <ReactNative.View style={styles.space} />
        <ReactNative.View style={styles.newUserDiv}>
          <ReactNative.Text
            style={styles.newUser}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            Novo aqui? Cadastre-se
          </ReactNative.Text>
        </ReactNative.View>
      </ReactNative.View>
    </ReactNative.SafeAreaView>
  );
}
