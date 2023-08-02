import { Table } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';

const ResultsTable = (): React.ReactElement => {
    const { t } = useTranslation();

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