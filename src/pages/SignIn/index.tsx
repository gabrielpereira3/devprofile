import React from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import {
  Container,
  Content,
  CreateAccount,
  CreateAccountTitle,
  ForgotPasswordButton,
  ForgotPasswordTitle,
  Icon,
  Logo,
  LogoContainer,
  Title,
} from './styles';
import logo from '../../assets/logo.png';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

export const SignIn: React.FunctionComponent = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <LogoContainer>
              <Logo source={logo} style={{ resizeMode: 'contain' }} />
            </LogoContainer>
            <View>
              <Title>Faça seu login</Title>
            </View>
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Button title="Entrar" />
            <ForgotPasswordButton onPress={() => {}}>
              <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>
      <CreateAccount
        onPress={() => {
          navigate('SignUp');
        }}
      >
        <Icon name="log-in" />
        <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
      </CreateAccount>
    </KeyboardAvoidingView>
  );
};