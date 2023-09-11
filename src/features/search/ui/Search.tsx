import React from "react";
import styled from "styled-components";
import SVGSearch from "../../../assets/svg/SVGSearch";
const Search = () => {
  return (
    <Container>
      <Form>
        <Input type="text" placeholder="Search in the country..."/>
        <SearchSvg>
          <SVGSearch />
        </SearchSvg>
        
        
      </Form>
    </Container>
  );
};

export default Search;

const Container = styled.div``;

const Form = styled.form`
position: relative;
  display: flex;
  width: 380px;
  height: 44px;
  transform: translateY(50%);
`;

const Input = styled.input`
 
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid#D7DADD;
  background: #fff;
  color: #9a9ca5;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding: 0 16px;
`;

const SearchSvg = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  right: 16px;
  top: 30%;
`;
