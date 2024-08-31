import {
  render,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react-native';

import CreateStudant from '@/app/register/studant';

describe('<CreateStudant />', () => {
  it('should display errors in text inputs when values are empty', async () => {
    render(<CreateStudant />);

    const submitButton = screen.getByTestId('register-button');
    const termsCheckbox = screen.getByTestId('terms-checkbox');

    fireEvent.press(termsCheckbox);

    fireEvent.press(submitButton);

    const output = await screen.findByText(
      'o nome precisa ter ao menos 6 caracteres'
    );

    await waitFor(() => expect(output).toBeOnTheScreen());
  });

  it("should not accept a password that don't match with the confirm password", async () => {
    render(<CreateStudant />);

    const passwordInput = screen.getByTestId('password-input');
    const passwordConfirmInput = screen.getByTestId('password-confirm-input');

    const password = '1234567';
    const passwordConfirm = '123456';

    const submitButton = screen.getByTestId('register-button');
    const termsCheckbox = screen.getByTestId('terms-checkbox');

    fireEvent.changeText(passwordInput, password);
    fireEvent.changeText(passwordConfirmInput, passwordConfirm);

    fireEvent.press(termsCheckbox);

    fireEvent.press(submitButton);

    const output = await screen.findByText(
      'o nome precisa ter ao menos 6 caracteres'
    );

    await waitFor(() => expect(output).toBeOnTheScreen(), { timeout: 4000 });
  });
});
