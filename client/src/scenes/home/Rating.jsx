import React, { useState } from "react";
import { Box, InputBase, Divider, Typography } from "@mui/material";

const Subscribe = () => {
  const [review, setReview] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleSubmitReview = () => {
    // Perform your review submission logic here if needed

    // Set the review submitted message and clear the review input field
    setReviewSubmitted(true);
    setReview("");
  };

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3">Write a review</Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="150%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Write a review"
          onChange={(e) => setReview(e.target.value)}
          value={review}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography
          sx={{ p: "10px", ":hover": { cursor: "pointer" } }}
          onClick={handleSubmitReview}
        >
          Submit Review
        </Typography>
      </Box>
      {reviewSubmitted && (
        <Typography sx={{ color: "green", marginTop: 2 }}>
          Review submitted!
        </Typography>
      )}
    </Box>
  );
};

export default Subscribe;
