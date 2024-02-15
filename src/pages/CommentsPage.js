import React from "react";
import MessageBoard from "../component/comment/MessageBoard";
import ScrollToTopButton from "../component/ScrollToTop/ScrollToTopButton";

const CommentsPage = () => {
  return (
    <>
      <MessageBoard />
      <ScrollToTopButton />
    </>
  );
};

export default CommentsPage;
