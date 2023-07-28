import { Table } from "@trussworks/react-uswds";


const ResultsTable = (): React.ReactElement => {

    return (
        <>
            <Table>
            <thead>
                <tr>
                    <th>State Refund</th>
                    <th>Federal Refund</th>
                    <th>Total Refund</th>
                </tr>
            </thead>
            </Table>
        </>
    );
}

export default ResultsTable;