import { Table } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';

interface AddressTableProps {
    user: {
        social: number;
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        street_address: string;
        city: string;
        state: string;
        zip: number;
    };
}

const AddressTable: React.FC<AddressTableProps> = ({ user }) => {
    const { t } = useTranslation();

    return(
        <>
           <Table stackedStyle="default">
                <thead>
                    <tr>
                        <th>{t('street1')}</th>
                        <th>{t('city')}</th>
                        <th>{t('state')}</th>
                        <th>{t('zip')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.street_address}</td>
                        <td>{user.city}</td>
                        <td>{user.state}</td>
                        <td>{user.zip}</td>
                    </tr>
                </tbody>
           </Table>
        </>
    );
}

export default AddressTable;