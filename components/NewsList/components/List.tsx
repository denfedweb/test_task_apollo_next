import React from "react";
import styled from "styled-components";
import {Content} from "../types";

const Wrapper = styled.div`
  width: 900px;
  ul {
    margin-top: 10px;
    background-color: white;
    border-radius: 6px;
    padding: 20px;
    color: black;
    list-style-type: none;
  }
`

const ListItem = styled.li`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 20% 1fr;
    margin-top: 20px;
  p {
    margin-top: 10px
  }
`;

const ImageBlock = styled.div`
  display: flex;
  align-items: center;
  img{
    width: 185px;
  }
`;

const List: React.FC<{contents: Content[]}> = ({contents}) => {

    return (
        <Wrapper>
            <ul>
                {contents.map((article) => (
                    <ListItem key={article.id}>
                        <ImageBlock>
                            <img alt='point' src='https://i.simpalsmedia.com/point.md/news/370x194/668cb676749f1aca4e45099fc890102d.jpg'></img>
                        </ImageBlock>
                        <div>
                            <h3>{article.title.short}</h3>
                            <p>{article.description.intro}</p>
                        </div>
                    </ListItem>
                ))}
            </ul>
        </Wrapper>
    )
}

export default List;