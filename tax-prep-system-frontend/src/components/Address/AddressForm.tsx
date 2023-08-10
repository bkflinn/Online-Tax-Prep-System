import { Button, Dropdown, Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds";
import { useState,useEffect} from "react";
import { useTranslation } from 'react-i18next';
import { useFindUserBySocialQuery, useUpdateUserMutation} from "../../api/userApi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";



const AddressForm = (): React.ReactNode => {
    const { t } = useTranslation();
    

    // Retrieve the user's social security number from the Redux store
    const socialValue = useSelector((state: RootState) => state.user.user?.social);

    // Ensure socialValue is a valid number, or a default value
    const validSocialValue = socialValue || 0; // Use a default value of 0 or adjust as needed

    const { data: user, refetch } = useFindUserBySocialQuery(validSocialValue);

    //console.log(user)

    const [formData, setFormData] = useState({
        'street_address': '',
        'city': '',
        'state': '',
        'zip': '',
    });

    const [updateUser] = useUpdateUserMutation();

    useEffect(() => {
        if (user) {
            setFormData((prevData) => ({
                ...prevData,
                'street_address': user.street_address || '',
                'city': user.city || '',
                'state': user.state || '',
                'zip': user.zip.toString() || '',
            }));
        }
    }, [user]);

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        // Make sure user is not null before merging
        if (user) {
            // Convert the JSON object to the User type
            const updatedUser = {
                ...user,
                ...formData,
                zip: Number(formData.zip),
            };
            
            try {
                await updateUser(updatedUser);
                refetch();
            } catch (error) {
                // Handle error
            };
        }
    };
   
    return user ? (
        <>
            <Form onSubmit={handleSubmit} large>
                <Fieldset legend={t("mailing-address")} legendStyle="large">
                <Label htmlFor="street_address">{t("street1")}</Label>
                <TextInput 
                    id="street_address" name="street_address" type="text" data-testid="street_address" value={formData.street_address} required={true} onChange={handleFormChange} />

                <div className="grid-row grid-gap">
                    <div className="mobile-lg:grid-col-8">
                    <Label htmlFor="city">{t("city")}</Label>
                    <TextInput id="city" name="city" type="text"  data-testid="city" value={formData.city} required={true} onChange={handleFormChange}/>
                    </div>
                    <div className="mobile-lg:grid-col-4">
                        <Label htmlFor="state">{t("state")}</Label>
                        <Dropdown id="state" name="state" data-testid="state" value={formData.state} required={true} onChange={handleFormChange}>
                            <option>- {t("select")} -</option>
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
                            <option value="AA">{t("af-america")}</option>
                            <option value="AE">{t("af-africa")}</option>
                            <option value="AE">{t("af-canada")}</option>
                            <option value="AE">{t("af-europe")}</option>
                            <option value="AE">{t("af-middle-east")}</option>
                            <option value="AP">{t("af-pacific")}</option>
                        </Dropdown>
                    </div>
                </div>

                <Label htmlFor="zip">{t("zip")}</Label>
                <TextInput
                    id="zip"
                    name="zip"
                    type="text"
                    data-testid="zip"
                    value={Number(formData.zip) === 0 ? '' : formData.zip}
                    inputSize="medium"
                    required={true}
                    pattern="[\d]{5}(-[\d]{4})?"
                    onChange={handleFormChange}
                />
                </Fieldset>
                <Button type="submit">{t("save")}</Button>
            </Form>
        </>
    ) : null;
};

export default AddressForm;