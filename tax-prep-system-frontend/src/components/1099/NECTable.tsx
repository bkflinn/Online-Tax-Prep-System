import { Table } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';

interface NECTableProps {
    nec: {
        payer_tin: number;
        compensation: number;
    };
}

const NECTable: React.FC<NECTableProps> = ({ nec }) => {
    const { t } = useTranslation();

    return(
        <>
           <Table stackedStyle="default">
                <thead>
                    <tr>
                        <th>{t("payer-tin")}</th>
                        <th>{t("compensation")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{nec.payer_tin}</td>
                        <td>{nec.compensation}</td>
                    </tr>
                </tbody>
           </Table>
        </>
    );
}

export default NECTable;