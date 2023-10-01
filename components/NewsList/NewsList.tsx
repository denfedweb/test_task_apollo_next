import React from 'react';
import List from './components/List';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import useNewsList from "./hooks/useNewsList";

const Logo = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 170px;
    height: 48px;
    margin: 40px 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
`;

const NewsList = () => {
    const {
        loadMore,
        loading,
        articles,
        error,
        hasMore
    } = useNewsList();

    if (loading && articles.length === 0) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Wrapper>
            <Logo>
                <img alt='point' src='https://point.md/static/svg/new-point-logo.svg'></img>
            </Logo>
            <InfiniteScroll
                dataLength={articles.length}
                next={loadMore}
                hasMore={hasMore}
                loader={<p>Loading more articles...</p>}
            >
                <List contents={articles} />
            </InfiniteScroll>
        </Wrapper>
    );
};

export default NewsList;
