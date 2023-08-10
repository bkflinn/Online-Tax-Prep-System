import { Table } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';

const ResultsTable = (): React.ReactElement => {
    const { t } = useTranslation();

    return (
        <>
            <Table>
            <thead>
                <tr>
                    <th>{t("state-refund")}</th>
                    <th>{t("federal-refund")}</th>
                    <th>{t("total-refund")}</th>
                </tr>
            </thead>
            </Table>
        </>
    );
}

export default ResultsTable;