import React, { useEffect } from "react";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as reviewActions } from "../redux/modules/review";
import { actionCreators as bookActions } from "../redux/modules/book"

const ReviewList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((store) => store.review.review);
  const isEdit = useSelector((store) => store.review.is_edit)

  const { id } = props;

  useEffect(() => {
    dispatch(reviewActions.getReviewAPI(id));
    dispatch(bookActions.getBookDetailAPI(id));
    console.log("------------리뷰리스트 확인", isEdit);
  }, []);


  if (comment_list.length > 0) {
    return (
      <ListWrapper>
        {comment_list.map(c => {
          return (
            <ReviewItem key={c.id} {...c} cid={id} />
          )
        })}
      </ListWrapper>
    );
  } else {
    return null;
  }
}

export default ReviewList;

const ListWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto 100px auto;
  width: 800px;
`;