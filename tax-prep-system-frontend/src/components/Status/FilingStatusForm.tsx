import { Button, Fieldset, Form, Radio,} from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';

const FilingStatusForm = (): React.ReactElement => {
    const { t } = useTranslation();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Handle form submission logic here
    };
    return(
        <>
            <Form onSubmit={handleSubmit} large>
                <Fieldset legend={t("filing-status")} legendStyle="large">

                <Radio
                    id="single"
                    name="filing-status"
                    defaultChecked
                    label={t("single")}
                    value="s"
                />
                <Radio
                    id="married"
                    name="filing-status"
                    label={t("married")}
                    value="m"
                />
                <Radio
                    id="head"
                    name="filing-status"
                    label={t("head")}
                    value="h"
                />
                
                </Fieldset>
                <Button type="submit">{t("save")}</Button>
            </Form>
        </>
    );
}

export default FilingStatusForm;