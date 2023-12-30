import { Avatar, Container, Logo } from "./styles";

import LogoImg from '@assets/logo.png';
import AvatarImg from '@assets/avatar.png';

export function Header () {
    return(
        <Container>
            <Logo source={LogoImg}/>
            <Avatar source={AvatarImg}/>
        </Container>
    )
}