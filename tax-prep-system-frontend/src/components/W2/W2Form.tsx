import { Button, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';
import { useFindW2BySocialQuery, useUpdateW2Mutation } from "../../api/w2Api";
import { useState,useEffect} from "react";

const W2Form = (): React.ReactNode => {
    const { t } = useTranslation();

    const socialValue = 1;
    const { data : w2 } = useFindW2BySocialQuery(socialValue);

    const [formData, setFormData] = useState({
        'emp_tin' : '',
        'employer' : '',
        'wages' : '',
        'fed_withheld' : '',
    });

    const [updateW2] = useUpdateW2Mutation();

    useEffect(() => {
        if (w2) {
            setFormData((prevData) => ({
                ...prevData,
                'emp_tin' : w2.emp_tin.toString() || '',
                'employer' : w2.employer || '',
                'wages' : w2.wages.toString() || '',
                'fed_withheld' : w2.fed_withheld.toString() || '',
            }));
        }
    }, [w2]);

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        
        if (w2) {
            const updatedW2 = {
                ...w2,
                ...formData,
                emp_tin: Number(formData.emp_tin),
                wages: Number(formData.wages),
                fed_withheld: Number(formData.fed_withheld),
            };

            try {
                await updateW2(updatedW2);
            } catch (error) {
                // Handle error
            };
        }
    };
    return w2 ? (
        <>
            <Form onSubmit={handleSubmit} large>
                <Fieldset legend="W2 Form" legendStyle="large">

                <Label htmlFor="tin">{t("employer-tin")}</Label>
                <TextInput 
                    id="tin" name="emp_tin" type="number" 
                    value={formData.emp_tin}
                    onChange={handleFormChange}/>

                <Label htmlFor="employer">{t("employer")}</Label>
                <TextInput 
                    id="employer" name="employer" type="text"
                    value={formData.employer}
                    onChange={handleFormChange}/>

                <Label htmlFor="wages">{t("wages")}</Label>
                <TextInput 
                    id="wages" name="wages" type="number"
                    value={formData.wages}
                    onChange={handleFormChange}/>

                <Label htmlFor="fed-withholding">{t("withholding")}</Label>
                <TextInput 
                    id="fed-withholding" name="fed_withheld" type="number" 
                    value={formData.fed_withheld}
                    onChange={handleFormChange}/>
                
                </Fieldset>
                <Button type="submit">{t("save")}</Button>
            </Form>
        </>
    ) : null;
}

export default W2Form;