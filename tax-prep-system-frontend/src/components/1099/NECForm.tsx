import { Button, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';
import { useFindNECBySocialQuery, useUpdateNECMutation } from "../../api/necApi";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const NECForm = (): React.ReactNode => {
    const { t } = useTranslation();

    // Retrieve the user's social security number from the Redux store
    const socialValue = useSelector((state: RootState) => state.user.user?.social);

    console.log(socialValue);

    // Ensure socialValue is a valid number, or a default value
    const validSocialValue = socialValue || 0; // Use a default value of 0 or adjust as needed

    //fetch NEC by ssn, grabs from redux store if exists
    const { data: nec, refetch } = useFindNECBySocialQuery(validSocialValue);

    //form state
    const [formData, setFormData] = useState({
        'payer_tin' : '',
        'compensation' : '',
    });

    //API hook to handle updating NEC
    const [updateNec] = useUpdateNECMutation();

    //prepopulating form data
    useEffect(() => {
        if (nec) {
            setFormData((prevData) => ({
                ...prevData,
                'payer_tin' : nec.payer_tin.toString() || '',
                'compensation' : nec.compensation.toString() || '',
            }));
        }
    }, [nec]);


    //handle form changes
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        if (nec) {
            const updatedNEC = {
                ...nec,
                ...formData,
                payer_tin: Number(formData.payer_tin),
                compensation: Number(formData.compensation),
            };

            try {
                await updateNec(updatedNEC);
                refetch();
            } catch (error) {
                //handle error
            };
        }
    };

    return nec ? (
        <>
            <Form onSubmit={handleSubmit} large>
                <Fieldset legend="1099 Form" legendStyle="large">

                    <Label htmlFor="tin">{t("payer-tin")}</Label>
                    <TextInput 
                        id="tin" name="payer_tin" type="number" data-testid="textInput-payer_tin"
                        value={Number(formData.payer_tin) === 0 ? '' : formData.payer_tin}
                        onChange={handleFormChange}
                        required={true}/>

                    <Label htmlFor="compensation">{t("compensation")}</Label>
                    <TextInput 
                        id="wages" name="compensation" type="number" data-testid="textInput-compensation"
                        value={formData.compensation}
                        onChange={handleFormChange}
                        required={true}/>
                
                </Fieldset>
                <Button type="submit">{t("save")}</Button>
            </Form>
        </>
    ) : null;
}

export default NECForm;