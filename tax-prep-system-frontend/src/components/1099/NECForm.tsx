import { Button, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';
import { useFindNECBySocialQuery, useUpdateNECMutation } from "../../api/necApi";
import { useState, useEffect } from "react";

const NECForm = (): React.ReactNode => {
    const { t } = useTranslation();

    const socialValue = 1; //placeholder
    const { data: nec } = useFindNECBySocialQuery(socialValue);

    const [formData, setFormData] = useState({
        'payer_tin' : '',
        'compensation' : '',
    });

    const [updateNec] = useUpdateNECMutation();

    useEffect(() => {
        if (nec) {
            setFormData((prevData) => ({
                ...prevData,
                'payer_tin' : nec.payer_tin.toString() || '',
                'compensation' : nec.compensation.toString() || '',
            }));
        }
    }, [nec]);


    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        console.log({nec});
        if (nec) {
            const updatedNEC = {
                ...nec,
                ...formData,
                payer_tin: Number(formData.payer_tin),
                compensation: Number(formData.compensation),
            };

            try {
                await updateNec(updatedNEC);
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
                        id="tin" name="payer_tin" type="number"
                        value={formData.payer_tin}
                        onChange={handleFormChange}/>

                    <Label htmlFor="compensation">{t("compensation")}</Label>
                    <TextInput 
                        id="wages" name="compensation" type="number" 
                        value={formData.compensation}
                        onChange={handleFormChange}/>
                
                </Fieldset>
                <Button type="submit">{t("save")}</Button>
            </Form>
        </>
    ) : null;
}

export default NECForm;