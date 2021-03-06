import React, { ReactNode } from 'react';
import bg from '../../resource/img/bg3.png';
import pattern from '../../resource/img/pattern.png';
import logo from '../../resource/img/icon3.png';
import { Arwes, Heading, Header, Footer, Row, Col, Words, Loading, Image } from 'arwes';
import { Anim } from '../../data/model/Anim';
import { Backdrop } from '@material-ui/core';
import { useWindowDimensions } from '../../util/dimensions';

interface IProps {
  children: ReactNode;
  loading?: boolean;
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
            <Heading>
              <Words animate show={anim.entered} style={{ marginTop: 140, fontSize: 18 }}>
                データ取得中です
              </Words>
            </Heading>
          </Backdrop>

          {/* ヘッダー */}
          <div style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 0, paddingBottom: 0 }}>
            <Header animate show={anim.entered}>
              <Row style={{ marginTop: 10, marginBottom: 0 }}>
                <Col style={{ height: 42 }}>
                  <Image animate show={anim.entered} resources={logo} style={{ width: 42, height: 42 }} />
                </Col>
                <Col style={{ padding: 0 }}>
                  <Heading style={{ margin: 0 }}>
                    <Words animate show={anim.entered}>
                      AWECON
                    </Words>
                  </Heading>
                </Col>
              </Row>
            </Header>
          </div>

          {/* コンテンツ */}
          <div style={{ padding: 20, minHeight: height - 66 - 34 }}>{props.children}</div>

          {/* フッター */}
          <div style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Footer animate show={anim.entered}>
              <Heading node="h6" style={{ paddingBottom: 10, margin: 0 }}>
                <Words animate show={anim.entered}>
                  &copy; 2020 AWECON
                </Words>
              </Heading>
            </Footer>
          </div>
        </div>
      )}
    </Arwes>
  );
};
export default Layout;
