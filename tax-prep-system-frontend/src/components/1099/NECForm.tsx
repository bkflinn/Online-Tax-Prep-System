import { Button, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds";

const NECForm = (): React.ReactElement => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Handle form submission logic here
    };
    return(
        <>
            <Form onSubmit={handleSubmit} large>
                <Fieldset legend="1099 Form" legendStyle="large">

                <Label htmlFor="tin">Payer Tax Identification Number (TIN)</Label>
                <TextInput id="tin" name="tin" type="number" />

                <Label htmlFor="wages">Compensation</Label>
                <TextInput id="wages" name="wages" type="number" />
                
                </Fieldset>
                <Button type="submit">Save</Button>
            </Form>
        </>
    );
}

export default NECForm;