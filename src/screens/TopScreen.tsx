import React from 'react';
import Layout from '../Layout';
import { Project, Words } from 'arwes';

const TopScreen: React.FC = () => {
    return (
        <Layout>
            <Project
                animate
                header='現在の室温: 24℃&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;エアコン: OFF'
            >
                {(anim: any) => (
                    <div>
                        <p><Words animate show={anim.entered}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis laboris nisi ut aliquip
                            ex. Duis aute irure. Consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud.
                        </Words></p>
                    </div>
                )}
            </Project>
        </Layout>
    );
}
export default TopScreen;
