import React, { useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const Contact: React.FC = () => {
  const phoneInput = useRef<PhoneInput | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Contact</Text>
      <PhoneInput
        ref={phoneInput}
        defaultValue=""
        defaultCode="US"
        layout="first"
        onChangeFormattedText={(text) => {
          console.log(text);
        }}
        withShadow
        autoFocus
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    marginBottom: 10,
  },
  phoneInputContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  textInput: {
    paddingVertical: 0,
  },
});

export default Contact;
            