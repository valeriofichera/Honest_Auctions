import React from "react";
import { useNavigate } from "react-router-dom";

const EndAuctionButton = ({ product }) => {
  const navigate = useNavigate();

  handleClick = () => navigate(`/end/${product.name}/${product.owner}`);

  return;
};

export default EndAuctionButton;
