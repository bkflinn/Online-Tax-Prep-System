import { useState, useEffect} from 'react';
import { Button, Fieldset, Form, Radio,} from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';
import { useFindUserBySocialQuery, useUpdateUserMutation} from "../../api/userApi";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const FilingStatusForm = (): React.ReactNode => {
    const { t } = useTranslation();

    // Retrieve the user's social security number from the Redux store
    const socialValue = useSelector((state: RootState) => state.user.user?.social);

    // Ensure socialValue is a valid number, or a default value
    const validSocialValue = socialValue || 0; // Use a default value of 0 or adjust as needed
    const { data: user, refetch} = useFindUserBySocialQuery(validSocialValue);

    const [formData, setFormData] = useState({
        'filing-status': user?.status || '',
    });

    const [updateUser] = useUpdateUserMutation();

    useEffect(() => {
        if (user) {
          setFormData((prevData) => ({
            ...prevData,
            'filing-status': user.status || '',
          }));
        }
    }, [user]);

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();


        if (user) {
            console.log(user)
            const updatedUser = {
                ...user,
                status: formData['filing-status'],
            };

            try {
                await updateUser(updatedUser);
                refetch();
            } catch (error) {
                // Handle error
            }
        }
    };

    return user ? (
        <>
            <Form onSubmit={handleSubmit} large>
                <Fieldset legend={t("filing-status")} legendStyle="large">

                <Radio
                    id="single"
                    name="filing-status"
                    defaultChecked={user?.status === 'S'}
                    label={t("single")}
                    value="S"

                    onChange={handleFormChange}
                />
                <Radio
                    id="married"
                    name="filing-status"
                    defaultChecked={user?.status === 'M'}
                    label={t("married")}
                    value="M"
                    onChange={handleFormChange}
                />
                <Radio
                    id="head"
                    name="filing-status"
                    defaultChecked={user?.status === 'H'}
                    label={t("head")}
                    value="H"
                    onChange={handleFormChange}
                />
                
                </Fieldset>
                <Button type="submit">{t("save")}</Button>
            </Form>
        </>
    ) : null;
}

export default FilingStatusForm;