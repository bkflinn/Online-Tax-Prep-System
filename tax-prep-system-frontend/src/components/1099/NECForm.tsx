import { Button, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';

const NECForm = (): React.ReactElement => {
    const { t } = useTranslation();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Handle form submission logic here
    };
    return(
        <>
            <Form onSubmit={handleSubmit} large>
                <Fieldset legend="1099 Form" legendStyle="large">

                <Label htmlFor="tin">{t("payer-tin")}</Label>
                <TextInput id="tin" name="tin" type="number" />

                <Label htmlFor="wages">{t("compensation")}</Label>
                <TextInput id="wages" name="wages" type="number" />
                
                </Fieldset>
                <Button type="submit">{t("save")}</Button>
            </Form>
        </>
    );
}

export default NECForm;