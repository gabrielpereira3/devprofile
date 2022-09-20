import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { Container, Content, Logo, LogoContainer, Title } from './styles';
import logo from '../../assets/logo.png';

export const SignIn: React.FunctionComponent = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <LogoContainer>
            <Logo source={logo} />
          </LogoContainer>
          <Title>Faça seu login</Title>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button title="Entrar" />
        </Content>
      </Container>
    </ScrollView>
  );
};
