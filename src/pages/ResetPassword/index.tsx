import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {
  NavigationHelpersContext,
  useNavigation,
} from '@react-navigation/native';
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
  token: yup.string().uuid('Código inválido.').required('Informe o código.'),
  password: yup.string().required('Informe a nova senha.'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Confirmação incorreta'),
});

export const ResetPassword: React.FunctionComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const { goBack, navigate } = useNavigation<ScreenNavigationProp>();

  const handleResetPassword = async (form: IFormInputs) => {
    const data = {
      token: form.token,
      password: form.password,
      password_confirmation: form.password_confirmation,
    };

    try {
      await api.post('password/reset', data);
      Alert.alert(
        'Redefinição de senha',
        'A senha foi redefinida com sucesso!',
      );
      navigate('SignIn');
    } catch (error) {
      Alert.alert(
        'Erro na redefinição de senha',
        'Ocorreu um erro na redefinição de senha. Tente novamente.',
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
            <Title>Redefinição de senha</Title>
            <InputControl
              autoCorrect={false}
              control={control}
              name={'token'}
              placeholder="Código"
              error={errors.token && errors.token.message}
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name={'password'}
              placeholder="Senha"
              secureTextEntry
              error={errors.password && errors.password.message}
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name={'password_confirmation'}
              placeholder="Confirme a senha"
              secureTextEntry
              error={
                errors.password_confirmation &&
                errors.password_confirmation.message
              }
            />
            <Button
              title="Redefinir senha"
              onPress={handleSubmit(handleResetPassword)}
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
