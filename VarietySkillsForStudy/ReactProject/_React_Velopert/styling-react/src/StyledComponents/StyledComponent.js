import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768
};
//위에 있는 size 객체에 따라 자동으로 media쿼리 함수를 만들어 준다.
// 참고 : https://www.styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media(max-width: ${sizes[label]/16}em){
      ${css(...args)};
    }
  `;
  return acc;
}, {});

/*props로 넣어준 값을 직접 전달해 줄 수 있다.*/
const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1res;
  display: flex;
  /* 기본적으로 가로 크기 1024px에 가운데 정렬 하고
  가로 크기가 작아짐에 따라 크기를 줄이고
  768px미만이 되면 꽉 채운다. */
  width: 1024px;
  margin: 0 auto;
  /* @media (max-width: 1024px){
    width: 768px;
  }
  @media (max-width: 768px){
    width: 100%;
  } */
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 1024px;`};
  
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* &문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* 다음 코드는 inverted값이 true일때 특정 스타일을 부여해 준다*/
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &.hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};

export default StyledComponent;
