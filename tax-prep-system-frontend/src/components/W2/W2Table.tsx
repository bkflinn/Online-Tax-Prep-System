import { Table } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';

interface W2TableProps {
    w2: {
        emp_tin: number,
        employer: string,
        wages: number,
        fed_withheld: number,
    };
}

const W2Table: React.FC<W2TableProps> = ({ w2 }) => {
    const { t } = useTranslation();

    return(
        <>
           <Table scrollable>
                <thead>
                    <tr>
                        <th>{t("employer-tin")}</th>
                        <th>{t("employer")}</th>
                        <th>{t("wages")}</th>
                        <th>{t("withholding")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{w2.emp_tin}</td>
                        <td>{w2.employer}</td>
                        <td>{w2.wages}</td>
                        <td>{w2.fed_withheld}</td>
                    </tr>
                </tbody>
           </Table>
        </>
    );
}

export default W2Table;