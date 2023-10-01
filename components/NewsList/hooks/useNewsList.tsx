import {useQuery} from "@apollo/client";
import {ARTICLES_QUERY} from "../../../api/queries";
import {useEffect, useState} from "react";

const useNewsList = () => {
    const [articles, setArticles] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [skip, setSkip] = useState(0);

    const { loading, error, data, fetchMore } = useQuery(ARTICLES_QUERY, {
        variables: {
            project_id: '5107de83-f208-4ca4-87ed-9b69d58d16e1',
            lang: 'ru',
            skip: skip,
            take: 10,
        },
    });

    useEffect(() => {
        if (data) {
            const newArticles = data.contents;
            if (newArticles.length === 0) {
                setHasMore(false);
            } else {
                setArticles((prevArticles) => [...prevArticles, ...newArticles]);
            }
        }
    }, [data]);

    const loadMore = () => {
        if (!loading && hasMore) {
            setSkip((prevSkip) => prevSkip + 10);
            fetchMore({
                variables: {
                    skip: skip + 10,
                },
            });
        }
    };

    return {
        loadMore,
        loading,
        articles,
        error,
        hasMore
    }
}

export default useNewsList;