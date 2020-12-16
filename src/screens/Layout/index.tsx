import React, { ReactNode } from 'react';

// 画像
import bg from '../../resource/img/bg3.png';
import pattern from '../../resource/img/pattern.png';
import logo from '../../resource/img/icon3.png';

// arwes
import { ThemeProvider, createTheme, Arwes, Heading, Header, Footer, Row, Col, Words, Loading, Image } from 'arwes';
import { Anim } from '../../data/model/Anim';

// material-ui
import { Backdrop } from '@material-ui/core';

// util
import { useWindowDimensions } from '../../util/dimensions';

const myTheme = {
  typography: {
    fontFamily: '"Langar","Cairo","Noto Sans JP","sans-serif"',
    headerFontFamily: '"Langar","Cairo","Noto Sans JP","sans-serif"',
    headerSizes: {
      h1: 32,
      h2: 28,
      h3: 21,
      h4: 18,
      h5: 16,
      h6: 16,
    },
    fontSize: 21,
    lineHeight: 1.5,
  },
};

interface IProps {
  children: ReactNode;
  loading?: boolean;
}

const Layout: React.FC<IProps> = (props: IProps) => {
  const { height } = useWindowDimensions(); // 画面サイズ
  return (
    <ThemeProvider theme={createTheme(myTheme)}>
      <Arwes animate background={bg} pattern={pattern}>
        {(anim: Anim) => (
          <div>
            {/* ロード画面 */}
            <Backdrop style={{ zIndex: 10 }} open={props.loading === true}>
              <Loading animate full show={anim.entered} />
              <Heading>
                <Words animate show={anim.entered} style={{ marginTop: 120 }}>
                  データ取得中です
                </Words>
              </Heading>
            </Backdrop>

            {/* ヘッダー */}
            <div style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 0, paddingBottom: 0 }}>
              <Header animate show={anim.entered}>
                <Row style={{ marginTop: 10, marginBottom: 10 }}>
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
    </ThemeProvider>
  );
};
export default Layout;
