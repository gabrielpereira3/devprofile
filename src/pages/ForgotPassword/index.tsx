import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { Button } from '../../components/Form/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';

import {
  BackToSignIn,
  BackToSignInTitle,
  Container,
  Content,
  Icon,
  Logo,
  LogoContainer,
  Title,
} from './styles';
import logo from '../../assets/logo.png';
import { InputControl } from '../../components/Form/InputControl';

interface ScreenNavigationProp {
  goBack: () => void;
  navigate(screen: string): void;
}

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  email: yup.string().email('Email inválido.').required('Informe o email.'),
});

export const ForgotPassword: React.FunctionComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const { goBack, navigate } = useNavigation<ScreenNavigationProp>();

  const handleForgotPassword = async (form: IFormInputs) => {
    const data = {
      email: form.email,
    };

    try {
      await api.post('password/forgot', data);
      Alert.alert(
        'Email enviado com sucesso',
        'Você receberá um email com as instruções para a redefinição da senha.',
      );
      navigate('SignIn');
    } catch (error) {
      Alert.alert(
        'Erro no envio do email',
        'Ocorreu um erro ao enviar o email. Tente novamente.',
      );
    }
  };

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
            <Title>Esqueci minha senha</Title>
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name={'email'}
              placeholder="Email"
              keyboardType="email-address"
              error={errors.email && errors.email.message}
            />
            <Button
              title="Enviar email"
              onPress={handleSubmit(handleForgotPassword)}
            />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn
        onPress={() => {
          goBack();
        }}
      >
        <Icon name="arrow-left" />
        <BackToSignInTitle>Voltar para login</BackToSignInTitle>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};
