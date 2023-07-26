import { Button, Dropdown, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds";

const W2Form = (): React.ReactElement => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Handle form submission logic here
    };
    return(
        <>
            <Form onSubmit={handleSubmit} large>
                <Fieldset legend="W2 Form" legendStyle="large">

                <Label htmlFor="tin">Tax Identification Number (TIN)</Label>
                <TextInput id="tin" name="tin" type="number" />

                <Label htmlFor="employer">Employer</Label>
                <TextInput id="employer" name="employer" type="text" />

                <Label htmlFor="wages">Wages</Label>
                <TextInput id="wages" name="wages" type="number" />

                <Label htmlFor="fed-withholding">Federal Withholding</Label>
                <TextInput id="fed-withholding" name="fed-withholding" type="number" />
                
                </Fieldset>
                <Button type="submit">Save</Button>
            </Form>
        </>
    );
}

export default W2Form;