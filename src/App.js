import React from "react";
import styled from "styled-components";

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Button";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

const GridItem = styled.div`
  font-size: 30px;
  text-align: center;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1rem;
`;

function App() {
  return (
    <div>
      <GridContainer>
        {/* Header */}
        <GridItem></GridItem>
        <GridItem>
          <Text>Primary</Text>
        </GridItem>
        <GridItem>
          <Text>Secondary</Text>
        </GridItem>
        <GridItem>
          <Text>Tertiary</Text>
        </GridItem>

        {/* Small */}
        <GridItem>
          <Text>Small</Text>
        </GridItem>
        <GridItem>
          <PrimaryButton modifiers="small">Enviar</PrimaryButton>
        </GridItem>
        <GridItem>
          <SecondaryButton modifiers="small">Enviar</SecondaryButton>
        </GridItem>
        <GridItem>
          <TertiaryButton modifiers="small">Enviar</TertiaryButton>
        </GridItem>

        {/* Default */}
        <GridItem>
          <Text>Default</Text>
        </GridItem>
        <GridItem>
          <PrimaryButton>Enviar</PrimaryButton>
        </GridItem>
        <GridItem>
          <SecondaryButton>Enviar</SecondaryButton>
        </GridItem>
        <GridItem>
          <TertiaryButton>Enviar</TertiaryButton>
        </GridItem>

        {/* Large */}
        <GridItem>
          <Text>Large</Text>
        </GridItem>
        <GridItem>
          <PrimaryButton modifiers="large">Enviar</PrimaryButton>
        </GridItem>
        <GridItem>
          <SecondaryButton modifiers="large">Enviar</SecondaryButton>
        </GridItem>
        <GridItem>
          <TertiaryButton modifiers="large">Enviar</TertiaryButton>
        </GridItem>

        {/* Small - Disabled*/}
        <GridItem>
          <Text>Small (disabled)</Text>
        </GridItem>
        <GridItem>
          <PrimaryButton modifiers="small" disabled>
            Enviar
          </PrimaryButton>
        </GridItem>
        <GridItem>
          <SecondaryButton modifiers="small" disabled>
            Enviar
          </SecondaryButton>
        </GridItem>
        <GridItem>
          <TertiaryButton modifiers="small" disabled>
            Enviar
          </TertiaryButton>
        </GridItem>

        {/* Default */}
        <GridItem>
          <Text>Default (disabled)</Text>
        </GridItem>
        <GridItem>
          <PrimaryButton disabled>Enviar</PrimaryButton>
        </GridItem>
        <GridItem>
          <SecondaryButton disabled>Enviar</SecondaryButton>
        </GridItem>
        <GridItem>
          <TertiaryButton disabled>Enviar</TertiaryButton>
        </GridItem>

        {/* Large */}
        <GridItem>
          <Text>Large (disabled)</Text>
        </GridItem>
        <GridItem>
          <PrimaryButton modifiers="large" disabled>
            Enviar
          </PrimaryButton>
        </GridItem>
        <GridItem>
          <SecondaryButton modifiers="large" disabled>
            Enviar
          </SecondaryButton>
        </GridItem>
        <GridItem>
          <TertiaryButton modifiers="large" disabled>
            Enviar
          </TertiaryButton>
        </GridItem>

        {/* Warning */}
        <GridItem>
          <Text>Warning</Text>
        </GridItem>
        <GridItem>
          <PrimaryButton modifiers="warning">Enviar</PrimaryButton>
        </GridItem>
        <GridItem>
          <SecondaryButton modifiers="warningSecondary">Enviar</SecondaryButton>
        </GridItem>
        <GridItem>
          <TertiaryButton modifiers="warningTertiary">Enviar</TertiaryButton>
        </GridItem>

        {/* Error */}
        <GridItem>
          <Text>Error</Text>
        </GridItem>
        <GridItem>
          <PrimaryButton modifiers="error">Enviar</PrimaryButton>
        </GridItem>
        <GridItem>
          <SecondaryButton modifiers="errorSecondary">Enviar</SecondaryButton>
        </GridItem>
        <GridItem>
          <TertiaryButton modifiers="errorTertiary">Enviar</TertiaryButton>
        </GridItem>

        {/* Success */}
        <GridItem>
          <Text>Success</Text>
        </GridItem>
        <GridItem>
          <PrimaryButton modifiers="success">Enviar</PrimaryButton>
        </GridItem>
        <GridItem>
          <SecondaryButton modifiers="successSecondary">Enviar</SecondaryButton>
        </GridItem>
        <GridItem>
          <TertiaryButton modifiers="successTertiary">Enviar</TertiaryButton>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default App;
