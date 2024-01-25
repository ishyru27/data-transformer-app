import styled from "styled-components";

const StyledFileDataTable = styled.div`
    max-height: 500px;
    margin: 2% 4%;

    & table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 1rem;
    }

    & th,
    & td {
        padding: 0.75rem;
        text-align: left;
        border: 1px solid #dee2e6;
        font-size: 16px; 
    }

    & th {
        background-color: #f8f9fa;
    }

    & tbody tr {
        &:nth-child(odd) {
            background-color: #f8f9fa;
        }

        &:hover {
            background-color: #e2e6ea;
        }
    }
`;

export default StyledFileDataTable;
