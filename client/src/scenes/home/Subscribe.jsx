import React, { useState } from "react";
import {
  Box,
  InputBase,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [subscriptionMessage, setSubscriptionMessage] = useState("");

  const handleSubscribe = () => {
    // Perform your subscribe logic here if needed

    // Clear the email input field
    setEmail("");

    // Set the subscription message
    setSubscriptionMessage("Subscribed!");
  };

  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Become a Member Today!!</Typography>
      <Typography>
        and receive $50 coupon for your first order when you checkout
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography
          sx={{ p: "10px", ":hover": { cursor: "pointer" } }}
          onClick={handleSubscribe}
        >
          Subscribe
        </Typography>
      </Box>
      {subscriptionMessage && (
        <Typography sx={{ color: "green", marginTop: 2 }}>
          {subscriptionMessage}
        </Typography>
      )}
    </Box>
  );
};

export default Subscribe;
