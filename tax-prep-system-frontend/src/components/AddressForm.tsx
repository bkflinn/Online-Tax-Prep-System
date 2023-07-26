import { Button, Dropdown, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds";

const AddressForm = (): React.ReactElement => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Handle form submission logic here
    };
    return(
        <>
            <Form onSubmit={handleSubmit} large>
                <Fieldset legend="Mailing address" legendStyle="large">
                <Label htmlFor="mailing-address-1">Street address 1</Label>
                <TextInput id="mailing-address-1" name="mailing-address-1" type="text" />

                <Label htmlFor="mailing-address-2" hint=" (optional)">
                    Street address 2
                </Label>
                <TextInput id="mailing-address-2" name="mailing-address-2" type="text" />

                <div className="grid-row grid-gap">
                    <div className="mobile-lg:grid-col-8">
                    <Label htmlFor="city">City</Label>
                    <TextInput id="city" name="city" type="text" />
                    </div>
                    <div className="mobile-lg:grid-col-4">
                    <Label htmlFor="state">State</Label>
                    <Dropdown id="state" name="state">
                        <option>- Select -</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                        <option value="AA">AA - Armed Forces Americas</option>
                        <option value="AE">AE - Armed Forces Africa</option>
                        <option value="AE">AE - Armed Forces Canada</option>
                        <option value="AE">AE - Armed Forces Europe</option>
                        <option value="AE">AE - Armed Forces Middle East</option>
                        <option value="AP">AP - Armed Forces Pacific</option>
                    </Dropdown>
                    </div>
                </div>

                <Label htmlFor="zip">ZIP</Label>
                <TextInput
                    id="zip"
                    name="zip"
                    type="text"
                    inputSize="medium"
                    pattern="[\d]{5}(-[\d]{4})?"
                />
                </Fieldset>
                <Button type="submit">Save</Button>
            </Form>
        </>
    );
}

export default AddressForm;