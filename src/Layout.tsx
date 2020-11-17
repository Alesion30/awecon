import React, { ReactNode } from 'react';
import { Arwes, Header, Heading } from 'arwes';

interface IProps {
    children: ReactNode
}
const Layout: React.FC<IProps> = (props: IProps) => {
    return (
        <Arwes animate>
            <div style={{ padding: 20 }}>
                <Header animate>
                    <Heading node='h1' style={{ margin: 0 }}>AWECON - We control air condition from a remote location</Heading>
                </Header>
            </div>
            <div style={{ padding: 30 }}>
                {props.children}
            </div>
        </Arwes>
    );
}
export default Layout;
