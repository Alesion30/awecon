import React, { ReactNode } from 'react';
import { Arwes, Header, Heading, Footer } from 'arwes';
import { useWindowDimensions } from './util/dimensions';
import bg from './resource/img/bg3.png';
import pattern from './resource/img/pattern.png'

interface IProps {
    children: ReactNode
}
const Layout: React.FC<IProps> = (props: IProps) => {
    const { height } = useWindowDimensions(); // 画面サイズ
    return (
        <Arwes animate background={bg} pattern={pattern}>
            <div>
                <div style={{ padding: 20 }}>
                    <Header animate>
                        <Heading node='h1' style={{ margin: 0 }}>AWECON - We control air condition from a remote location</Heading>
                    </Header>
                </div>
                <div style={{ padding: 30, minHeight: height - 86 - 34 }}>
                    {props.children}
                </div>
                <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <Footer animate show={true}>
                        <Heading node='h6' style={{ paddingBottom: 10, margin: 0 }}>&copy; 2020 AWECON</Heading>
                    </Footer>
                </div>
            </div>
        </Arwes>
    );
}
export default Layout;
