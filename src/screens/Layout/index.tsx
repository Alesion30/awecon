import React, { ReactNode } from 'react';

// 画像
import bg from '../../resource/img/bg3.png';
import pattern from '../../resource/img/pattern.png';
import logo from '../../resource/img/icon3.png';

// arwes
import { ThemeProvider, createTheme, Arwes, Header, Footer, Row, Col, Words, Loading, Image } from 'arwes';
import { Anim } from '../../data/model/Anim';
import CustomHeading from '../../components/CustomHeading';

// material-ui
import { Backdrop } from '@material-ui/core';

// util
import { useWindowDimensions } from '../../util/dimensions';

interface IProps {
  children: ReactNode;
  loading?: boolean;
}

const myTheme = {
  typography: {
    fontFamily: '"Langar","Work Sans","M PLUS Rounded 1c","sans-serif"',
  },
};

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
              <CustomHeading>
                <Words animate show={anim.entered} style={{ marginTop: 120 }}>
                  データ取得中です
                </Words>
              </CustomHeading>
            </Backdrop>

            {/* ヘッダー */}
            <div style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 0, paddingBottom: 0 }}>
              <Header animate show={anim.entered}>
                <Row style={{ marginTop: 10, marginBottom: 10 }}>
                  <Col style={{ height: 42 }}>
                    <Image animate show={anim.entered} resources={logo} style={{ width: 42, height: 42 }} />
                  </Col>
                  <Col style={{ padding: 0 }}>
                    <CustomHeading>
                      <Words animate show={anim.entered} style={{ marginTop: 2 }}>
                        AWECON
                      </Words>
                    </CustomHeading>
                  </Col>
                </Row>
              </Header>
            </div>

            {/* コンテンツ */}
            <div style={{ padding: 20, minHeight: height - 66 - 34 }}>{props.children}</div>

            {/* フッター */}
            <div style={{ paddingLeft: 20, paddingRight: 20 }}>
              <Footer animate show={anim.entered}>
                <Words animate show={anim.entered}>
                  &copy; 2020 AWECON
                </Words>
              </Footer>
            </div>
          </div>
        )}
      </Arwes>
    </ThemeProvider>
  );
};
export default Layout;
