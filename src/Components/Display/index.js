import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import useDataTransformer from "../../Hooks/useDataTransformer";
import RenderSpinner from "../RenderSpinner";
import StyledFileDataTable from "../../Styles/DarkFileDataTable/index";

const DarkFileDataTable = () => {
    const { data, loading, error } = useDataTransformer();

    if (loading) {
        return <RenderSpinner />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (data.length === 0) {
        return <div>No hay datos disponibles.</div>;
    }

    return (
        <StyledFileDataTable>
            <Table striped bordered hover variant="white">
                <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Text</th>
                        <th>Number</th>
                        <th>Hex</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((file) => (
                        <tr key={file.file}>
                            <td>{file.file}</td>
                            <td>
                                {file.lines.map((line) => line.text).join(", ")}
                            </td>
                            <td>
                                {file.lines
                                    .map((line) => line.number)
                                    .join(", ")}
                            </td>
                            <td>
                                {file.lines.map((line) => line.hex).join(", ")}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </StyledFileDataTable>
    );
};

export default DarkFileDataTable;
