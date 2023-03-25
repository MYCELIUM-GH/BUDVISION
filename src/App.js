import React from 'react';
import '../public/style.css';
import Header from './component/Header';
import Page from './component/Page';
import styled from 'styled-components';
export default function App() {
  return (
    <Page>
      <Header name="BUDVISION" />
    </Page>
  );
}
