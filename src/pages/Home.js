import styled from 'styled-components';
import portal from '../img/portal.png';

export default function Home() {
  return (
    <>
      <ImageWrapper>
        <>
          <Logo src={portal} alt="This is the Portal" />
        </>
      </ImageWrapper>
    </>
  );
}

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 50px;
`;

const Logo = styled.img`
  width: 300px;
  height: 300px;
`;

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  height: 100vh; */
  border: white solid 1px;
`;
