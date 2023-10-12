import styled from "styled-components";
export const BackgroundDiv = styled.div`
  background-image: url("https://img.freepik.com/vetores-gratis/fundo-do-mar-profundo_53876-91689.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60vh;
`;

export const CardsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

export const Card = styled.div`
  margin: 2em 0;
  max-width: 12em;
  text-align: center;
`;
export const Section = styled.section`
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  height: 60vh;
  align-items: center;
  justify-content: center;
`;

export const TextDiv = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 4em 3em;
  align-items: center;
`;

export const ImageDiv = styled.div`
  width: 50%;
  max-height: 100%;
  margin: 0;
`;
