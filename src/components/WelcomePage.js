import React, { useState, useEffect } from "react"

import styled from 'styled-components'

const WelcomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function WelcomePage() {

  return (
    <section className="welcome-page">
      <WelcomeHeader>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </WelcomeHeader>
    </section>
  );
}
