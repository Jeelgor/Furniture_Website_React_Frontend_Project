// ChairDetailPage.js

import React from "react";
import { useParams } from "react-router-dom";
import ChairDetail from "./ChairDetail"; // Assuming you have a ChairDetail component

const ChairDetailPage = ({ chairDetails }) => {
  const { id } = useParams();

  // Find the chair details based on the numeric ID
  const selectedChair = chairDetails.find((chair) => chair.id === parseInt(id, 10));

  if (!selectedChair) {
    // Handle case when chair details are not found
    return <div>Chair details not found</div>;
  }

  return <ChairDetail {...selectedChair} />;
};

export default ChairDetailPage;
