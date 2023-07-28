import { Button, Fieldset, Form, Radio,} from "@trussworks/react-uswds";

const FilingStatusForm = (): React.ReactElement => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Handle form submission logic here
    };
    return(
        <>
            <Form onSubmit={handleSubmit} large>
                <Fieldset legend="Filing Status" legendStyle="large">

                <Radio
                    id="single"
                    name="filing-status"
                    defaultChecked
                    label="Single"
                    value="s"
                />
                <Radio
                    id="married"
                    name="filing-status"
                    label="Married Filing Jointly"
                    value="m"
                />
                <Radio
                    id="head"
                    name="filing-status"
                    label="Head of Household"
                    value="h"
                />
                
                </Fieldset>
                <Button type="submit">Save</Button>
            </Form>
        </>
    );
}

export default FilingStatusForm;