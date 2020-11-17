import React, { ReactNode } from 'react';

// 画像
import bg from './resource/img/bg3.png';
import pattern from './resource/img/pattern.png'

// arwes
import { Arwes, Logo, Header, Heading, Footer, Row, Col, Words, Loading } from 'arwes';
import { Anim } from './data/model/Anim';

// material-ui
import { Backdrop } from '@material-ui/core';

// util
import { useWindowDimensions } from './util/dimensions';

interface IProps {
    children: ReactNode
    loading?: boolean
}
const Layout: React.FC<IProps> = (props: IProps) => {
    const { height } = useWindowDimensions(); // 画面サイズ
    return (
        <Arwes animate background={bg} pattern={pattern}>
            {(anim: Anim) => (
                <div>
                    {/* ロード画面 */}
                    <Backdrop style={{ zIndex: 10 }} open={props.loading === true}>
                        <Loading animate full show={anim.entered} />
                        <Heading node='h6' style={{ marginTop: 110 }}>
                            <Words animate show={anim.entered}>データ取得中です</Words>
                        </Heading>
                    </Backdrop>

                    {/* ヘッダー */}
                    <div style={{ padding: 20 }}>
                        <Header animate show={anim.entered}>
                            <Row style={{ marginBottom: 10 }}>
                                <Col>
                                    <Logo animate show={anim.entered} size={42} />
                                </Col>
                                <Col style={{ padding: 0 }}>
                                    <Heading node='h1' style={{ margin: 0 }}>
                                        <Words animate show={anim.entered}>AWECON</Words>
                                    </Heading>
                                </Col>
                            </Row>
                        </Header>
                    </div>

                    {/* コンテンツ */}
                    <div style={{ padding: 30, minHeight: height - 96 - 34 }}>
                        {props.children}
                    </div>

                    {/* フッター */}
                    <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                        <Footer animate show={anim.entered}>
                            <Heading node='h6' style={{ paddingBottom: 10, margin: 0 }}>
                                <Words animate show={anim.entered}>&copy; 2020 AWECON</Words>
                            </Heading>
                        </Footer>
                    </div>
                </div>
            )}
        </Arwes>
    );
}
export default Layout;
