import React from 'react';
import {
  Container,
  Header,
  Icon,
  UserAvatar,
  UserAvatarButton,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './styles';
import avatarDefault from '../../assets/avatar01.png';

export const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar source={avatarDefault} />
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Jorge</UserName>
            </UserInfoDetail>
          </UserInfo>
          <Icon name="log-out" />
        </UserWrapper>
      </Header>
    </Container>
  );
};
