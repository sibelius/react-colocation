import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';
import QRCode from 'qrcode.react';

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

export const Root = styled.div([], {
  // width: '50vw',
  // height: '70vh',
  width: '100%',
  height: '100%'
});

const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FeedbackText = styled.span`
  font-size: 50px;
  color: #ffffff;
`;

const FeedbackLink = styled.span`
  font-size: 50px;
  color: #25D7FD;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${space}
`;

const EntriaLogo = styled.img`
  max-width: 600px;
  margin-top: 100px;
  margin-bottom: 50px;
`;


export const FeedbackHouse = () => (
  <iframe
    url="http://feedback.house"
    style={{
      // width: '100%',
      // height: '100%',
      width: '100vw',
      height: '100vh',
      border: '0',
      position: 'absolute',
    }}
    frameBorder={'0'}
    width={'100%'}
    height={'100%'}
  />
);
