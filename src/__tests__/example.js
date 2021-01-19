import React, { useState } from 'react';
import { Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

const Greeting = ({ name }) => {
  return (
    <View>
      {/* This node is tagged with the testID prop */}
      <Text testID="greetingText">Hello {name}!</Text>
    </View>
  );
};

const Form = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = () => {
      onSubmit({ username, password });
    };
  
    return (
      <View>
        <View>
          <TextInput
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Username"
            testID="usernameField"
          />
        </View>
        <View>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            testID="passwordField"
          />
        </View>
        <View>
          <TouchableWithoutFeedback onPress={handleSubmit} testID="submitButton">
            <Text>Submit</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  };

describe('Example', () => {
    it('works', () => {
        expect(1).toBe(1);
    })
});


describe('Greeting', () => {
    it('renders a greeting message based on the name prop', () => {
      const { getByTestId } = render(<Greeting name="Kalle" />);
    
      expect(getByTestId('greetingText')).toHaveTextContent('Hello Kalle!');
    });
  });

describe('Testing the Form', () => {
    it('renders an form and tests to see what the form returns with correct data', () => {
        const onSubmit = jest.fn();
        const { getByTestId } = render(<Form onSubmit={onSubmit}/>);

        fireEvent.changeText(getByTestId('usernameField'), 'ethan');
        fireEvent.changeText(getByTestId('passwordField'), 'password');
        fireEvent.press(getByTestId('submitButton'));
        
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
            username: 'ethan',
            password: 'password'
        })

    });
});
