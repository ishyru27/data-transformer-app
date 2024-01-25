import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import { StyledSpinnerContainer } from "../../Styles/SpinnerContainer.js";

const RenderSpinner = () => {
    return (
        <StyledSpinnerContainer>
            <Spinner animation="border" role="status" variant="dark">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </StyledSpinnerContainer>
    );
};

export default RenderSpinner;
