import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { SignInContainer} from '../components/signIn';
import React from 'react';

describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function when credentials are valid are submitted', async () => {
            const onSubmit = jest.fn();
            const { getByTestId } = render(<SignInContainer onSubmit={onSubmit}/>);
            
            await act(async() => {
                await fireEvent.changeText(getByTestId('loginForm-usernameInput'), 'kalle');
            })

            await act(async() => {
                await fireEvent.changeText(getByTestId('loginForm-passwordInput'), 'password');
            })

            await act(async() => {
                await fireEvent.press(getByTestId('loginForm-submitButton'));
            })
            
            await waitFor(() => {
                expect(onSubmit).toHaveBeenCalledTimes(1);
                expect(onSubmit.mock.calls[0][0]).toEqual({
                    username: 'kalle',
                    password: 'password'
                })
            });
        })
    })
});