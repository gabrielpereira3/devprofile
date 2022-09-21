import React from 'react';
import { Alert } from 'react-native';
import {
  Container,
  Header,
  Icon,
  LogoutButton,
  UserAvatar,
  UserAvatarButton,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './styles';
import avatarDefault from '../../assets/avatar01.png';
import { useAuth } from '../../context/AuthContext';

export const Home: React.FunctionComponent = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    Alert.alert('Sair da aplicação', 'Deseja realmente sair da aplicação?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sair',
        onPress: () => signOut(),
      },
    ]);
  };

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar
                source={
                  user.avatar_url ? { uri: user.avatar_url } : avatarDefault
                }
              />
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>{user.name}</UserName>
            </UserInfoDetail>
          </UserInfo>
          <LogoutButton onPress={handleSignOut}>
            <Icon name="log-out" />
          </LogoutButton>
        </UserWrapper>
      </Header>
    </Container>
  );
};
