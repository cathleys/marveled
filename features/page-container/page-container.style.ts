import styled from "@emotion/styled";

export const Skyline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/icons/sky-line.png"),
    linear-gradient(
      to bottom,
      #163c52 0%,
      #4f4f47 30%,
      #c5752d 60%,
      #b7490f 80%,
      #2f1107 100%
    );
  background-size: contain, auto;
  background-position: bottom;
  background-repeat: repeat-x;
  min-height: 200px;
`;
export const HeaderName = styled.h1`
  font-size: 5rem;
  margin: 0;
  letter-spacing: 3px;
  transform: rotate(-5deg) skew(-10deg, 0);
  text-shadow: -2px -2px yellow, 2px 2px orange, 3px 3px orange;

  @media (max-width: 375px) {
    font-size: 3rem;
  }
`;
export const Container = styled.div`
  display: flex;
  background-color: #f5f5f5;
  height: 100vh;
  background-image: radial-gradient(rgb(145, 145, 145) 15.2%, transparent 15.2%),
    radial-gradient(rgb(145, 145, 145) 15.2%, transparent 15.2%);
  background-position: 0px 0px, 4px 4px;
  background-size: 8px 8px;
  background-color: rgb(245, 245, 245);
`;
export const Main = styled.main`
  flex: 1;
  padding: 2rem 10rem 2rem 10rem;
`;
