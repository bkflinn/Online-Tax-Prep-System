import { Button, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';

const W2Form = (): React.ReactElement => {
    const { t } = useTranslation();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Handle form submission logic here
    };
    return(
        <>
            <Form onSubmit={handleSubmit} large>
                <Fieldset legend="W2 Form" legendStyle="large">

                <Label htmlFor="tin">{t("employer-tin")}</Label>
                <TextInput id="tin" name="tin" type="number" />

                <Label htmlFor="employer">{t("employer")}</Label>
                <TextInput id="employer" name="employer" type="text" />

                <Label htmlFor="wages">{t("wages")}</Label>
                <TextInput id="wages" name="wages" type="number" />

                <Label htmlFor="fed-withholding">{t("withholding")}</Label>
                <TextInput id="fed-withholding" name="fed-withholding" type="number" />
                
                </Fieldset>
                <Button type="submit">{t("save")}</Button>
            </Form>
        </>
    );
}

export default W2Form;