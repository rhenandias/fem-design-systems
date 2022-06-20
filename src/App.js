import React from "react";
import styled from "styled-components";

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Button";

const ButtonDiv = styled.div`
  margin: 10px;
`;

function App() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <ButtonDiv>
          <PrimaryButton>Enviar!</PrimaryButton>
        </ButtonDiv>
        <ButtonDiv>
          <PrimaryButton disabled>Enviar!</PrimaryButton>
        </ButtonDiv>
      </div>
      <div style={{ display: "flex" }}>
        <ButtonDiv>
          <SecondaryButton>Enviar!</SecondaryButton>
        </ButtonDiv>
        <ButtonDiv>
          <SecondaryButton disabled>Enviar!</SecondaryButton>
        </ButtonDiv>
      </div>
      <div style={{ display: "flex" }}>
        <ButtonDiv>
          <TertiaryButton>Enviar!</TertiaryButton>
        </ButtonDiv>
        <ButtonDiv>
          <TertiaryButton disabled>Enviar!</TertiaryButton>
        </ButtonDiv>
      </div>
      <div style={{ display: "flex" }}>
        <ButtonDiv>
          <PrimaryButton modifiers="small">Enviar!</PrimaryButton>
        </ButtonDiv>
        <ButtonDiv>
          <PrimaryButton modifiers="small" disabled>
            Enviar!
          </PrimaryButton>
        </ButtonDiv>
      </div>
      <div style={{ display: "flex" }}>
        <ButtonDiv>
          <SecondaryButton modifiers="small">Enviar!</SecondaryButton>
        </ButtonDiv>
        <ButtonDiv>
          <SecondaryButton modifiers="small" disabled>
            Enviar!
          </SecondaryButton>
        </ButtonDiv>
      </div>
      <div style={{ display: "flex" }}>
        <ButtonDiv>
          <TertiaryButton modifiers="small">Enviar!</TertiaryButton>
        </ButtonDiv>
        <ButtonDiv>
          <TertiaryButton modifiers="small" disabled>
            Enviar!
          </TertiaryButton>
        </ButtonDiv>
      </div>
      <div style={{ display: "flex" }}>
        <ButtonDiv>
          <PrimaryButton modifiers="large">Enviar!</PrimaryButton>
        </ButtonDiv>
        <ButtonDiv>
          <PrimaryButton modifiers="large" disabled>
            Enviar!
          </PrimaryButton>
        </ButtonDiv>
      </div>
      <div style={{ display: "flex" }}>
        <ButtonDiv>
          <SecondaryButton modifiers="large">Enviar!</SecondaryButton>
        </ButtonDiv>
        <ButtonDiv>
          <SecondaryButton modifiers="large" disabled>
            Enviar!
          </SecondaryButton>
        </ButtonDiv>
      </div>
      <div style={{ display: "flex" }}>
        <ButtonDiv>
          <TertiaryButton modifiers="large">Enviar!</TertiaryButton>
        </ButtonDiv>
        <ButtonDiv>
          <TertiaryButton modifiers="large" disabled>
            Enviar!
          </TertiaryButton>
        </ButtonDiv>
      </div>
    </div>
  );
}

export default App;
