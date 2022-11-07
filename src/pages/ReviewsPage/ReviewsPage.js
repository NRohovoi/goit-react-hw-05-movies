import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'Api/Api';

import {
  ListWrapper,
  StyledList,
  ListItem,
  CommentAuthor,
  Comment,
  Selection,
} from './ReviewsPage.styled';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId)
      .then(({ results }) => setReviews(results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ListWrapper>
      <StyledList>
        {reviews?.length > 0 ? (
          reviews.map(({ author, content, id }) => (
            <ListItem key={id}>
              <CommentAuthor>
                <Selection>Author: </Selection>
                {author}
              </CommentAuthor>
              <Comment>
                <Selection>Comment: </Selection>
                {content}
              </Comment>
            </ListItem>
          ))
        ) : (
          <h2>Havent any review</h2>
        )}
      </StyledList>
    </ListWrapper>
  );
};

export default ReviewsPage;
