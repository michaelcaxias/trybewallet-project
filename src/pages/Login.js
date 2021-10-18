import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import { sendLogin } from '../actions';
import logoWallet from '../images/wallet.png';
import './Login.css';

// Função para validar email no JavaScript inspirada a partir de
// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const isEmailValid = (email) => {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(email) === true;
};

function Login({ history, dispatchSetValue }) {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  const handleClick = () => {
    dispatchSetValue(email);
    history.push('/carteira');
  };

  const maxNumber = 6;
  const disabled = password.length >= maxNumber && isEmailValid(email);

  return (
    <Grid textAlign="center" style={ { height: '100vh' } } verticalAlign="middle">
      <Grid.Column style={ { maxWidth: 450 } }>
        <Header as="h2" color="green" textAlign="center">
          <Image src={ logoWallet } draggable={ false } />
          Faça o login na sua conta
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Endereço de e-mail"
              value={ email }
              required
              onChange={ ({ target: { value } }) => changeEmail(value) }
              data-testid="email-input"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Senha"
              type="password"
              value={ password }
              required
              onChange={ ({ target: { value } }) => changePassword(value) }
              data-testid="password-input"
            />
            <Button
              color="green"
              fluid
              size="large"
              onClick={ handleClick }
              className="button-login"
              disabled={ !disabled }
            >
              Entrar
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (email) => dispatch(sendLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchSetValue: PropTypes.func.isRequired,
};
