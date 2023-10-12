import { TextDiv, ImageDiv } from "../Style";

interface contentSectionProps {
  title: string;
  description: string;
  image: string;
}

export function ContentSection(props: contentSectionProps) {
  return (
    <>
      <TextDiv>
        <h3> {props.title} </h3>
        <p> {props.description}</p>
      </TextDiv>
      <ImageDiv>
        <img src={props.image} alt="" />
      </ImageDiv>
    </>
  );
}
