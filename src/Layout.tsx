import React, { ReactNode } from 'react';

// 画像
import bg from './resource/img/bg3.png';
import pattern from './resource/img/pattern.png'

// arwes
import { Arwes, Logo, Header, Heading, Footer, Row, Col } from 'arwes';
import { Anim } from './data/model/Anim';

// util
import { useWindowDimensions } from './util/dimensions';

interface IProps {
    children: ReactNode
}
const Layout: React.FC<IProps> = (props: IProps) => {
    const { height } = useWindowDimensions(); // 画面サイズ
    return (
        <Arwes animate background={bg} pattern={pattern}>
            {(anim: Anim) => (
                <div>
                    <div style={{ padding: 20 }}>
                        <Header animate show={anim.entered}>
                            <Row style={{ marginBottom: 10 }}>
                                <Col>
                                    <Logo animate show={anim.entered} size={42} />
                                </Col>
                                <Col style={{ padding: 0 }}>
                                    <Heading node='h1' style={{ margin: 0 }}>AWECON</Heading>
                                </Col>
                            </Row>
                        </Header>
                    </div>
                    <div style={{ padding: 30, minHeight: height - 96 - 34 }}>
                        {props.children}
                    </div>
                    <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                        <Footer animate show={anim.entered}>
                            <Heading node='h6' style={{ paddingBottom: 10, margin: 0 }}>&copy; 2020 AWECON</Heading>
                        </Footer>
                    </div>
                </div>
            )}
        </Arwes>
    );
}
export default Layout;
