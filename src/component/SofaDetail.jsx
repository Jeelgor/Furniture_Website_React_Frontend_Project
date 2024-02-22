import React from "react";
import { useParams } from "react-router-dom";

const SofaDetail = ({ sofas }) => {
    const { id } = useParams();
    console.log("Received sofas prop:", sofas);

    const selectedSofa = sofas.find((sofa) => sofa.id.toString() === id);

    if (!selectedSofa) {
        return <p>Sofa not found</p>;
    }

    return (
        <div>
            <img src={selectedSofa.image} alt={selectedSofa.title} />
            <h2>{selectedSofa.title}</h2>
            <p>{selectedSofa.description}</p>
            <p>Price: {selectedSofa.price}</p>

        </div>

    );
};
export default SofaDetail;
