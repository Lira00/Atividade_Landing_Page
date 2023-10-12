import "./App.css";
import { BackgroundDiv, CardsDiv, Card, Section } from "./Style.tsx";
import { InitialCards } from "./components/cards.tsx";
import { ContentSection } from "./components/Section.tsx";
function App() {
  return (
    <>
      <BackgroundDiv>
        <h1>Minha primeira página com React.</h1>
      </BackgroundDiv>

      <CardsDiv>
        <Card>
          <InitialCards
            title="Somente para Desktop"
            description="Vamos apresender como utilizar um framework"
            image="https://static.vecteezy.com/ti/vetor-gratis/p3/5308075-computador-configuracao-pc-set-cpu-and-computer-icon-flat-vector-adequado-para-muitos-fins-vetor.jpg"
          ></InitialCards>
        </Card>

        <Card>
          <InitialCards
            title="Criado com componentes"
            description="Utilizamos o Styled Componentes"
            image="https://th.bing.com/th/id/OIP.qxW6v1Lfg9fEZT016XQtHAAAAA?pid=ImgDet&rs=1"
          ></InitialCards>
        </Card>

        <Card>
          <InitialCards
            title="Fácil aproveitamento"
            description="Estamos no caminho."
            image="https://static.vecteezy.com/system/resources/previews/002/743/514/non_2x/green-check-mark-icon-in-a-circle-free-vector.jpg"
          ></InitialCards>
        </Card>
      </CardsDiv>

      <Section>
        <ContentSection
          title="Lorem Ipsum"
          description="Amet reprehenderit qui consequat ea adipisicing dolore velit duis laboris id consectetur.  Nulla aliquip Lorem non fugiat Lorem officia tempor qui duis commodo tempor. Dolor quis proident qui excepteur laboris nisi deserunt sunt Lorem esse id eiusmod aliquip. Culpa occaecat dolore velit veniam culpa qui. Aute ipsum nisi ipsum anim consectetur laborum ea voluptate pariatur laborum tempor. Minim aliqua sint sunt proident nisi do minim. Laborum culpa amet adipisicing non. Ex velit laboris non ea mollit in aliqua eiusmod.

          Eiusmod do reprehenderit aute sit dolor id officia exercitation eu anim ex magna. Ipsum labore id commodo est non fugiat in et minim deserunt. Voluptate eiusmod in tempor id proident. Sit ad tempor enim elit Lorem ullamco veniam consectetur elit mollit enim officia aliquip ullamco. Reprehenderit tempor labore non cillum cupidatat magna nisi eu proident ullamco non reprehenderit laboris."
          image="https://img.freepik.com/vetores-gratis/tela-realista-para-smartphone-com-aplicativos-diferentes_52683-30241.jpg"
        ></ContentSection>
      </Section>
    </>
  );
}

export default App;
