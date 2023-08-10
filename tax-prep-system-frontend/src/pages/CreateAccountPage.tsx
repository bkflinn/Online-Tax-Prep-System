import {GridContainer, Grid, Form, Fieldset, Label, TextInput, Checkbox, Button, Header} from '@trussworks/react-uswds';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useCreateUserMutation } from '../api/userApi';
import { setUser } from '../store/userSlice';
import { useDispatch } from 'react-redux';
import { useCreateW2Mutation } from '../api/w2Api';
import { useCreateNECMutation } from '../api/necApi';

const CreateAccountPage = (): React.ReactElement => {
    const dispatch = useDispatch();
    
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [createUser, { isLoading: isCreating }] = useCreateUserMutation();
    const [createW2] = useCreateW2Mutation();
    const [createNEC] = useCreateNECMutation();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        
        // Form data collection
        const formData = new FormData(event.currentTarget);

        const newUser = {
            social: formData.get("ssn") ? Number(formData.get("ssn")) : 0,
            first_name: formData.get("first-name") as string,
            last_name: formData.get("last-name") as string,
            email: '', //placeholder
            phone: '',
            street_address: '',
            city: '',
            state: '',
            zip: 0,
            status: 'S',
        };

        const newW2 = {
            social : formData.get("ssn") ? Number(formData.get("ssn")) : 0,
            emp_tin : 0,
            employer : '',
            wages : 0,
            fed_withheld : 0,
        };


        const newNEC = {
            social : formData.get("ssn") ? Number(formData.get("ssn")) : 0,
            payer_tin: 0,
            compensation: 0,
            fed_withheld: 0,
        }

        try {
            // Use the createUser mutation to create a new user
            const userResult = await createUser(newUser);
            await createW2(newW2);
            await createNEC(newNEC);
    
            // Check if the userResult contains an error
            if ('error' in userResult) {
                console.error("Error creating user:", userResult.error);
            } else {
                // Handle success (e.g., show success message, navigate to next page)
                console.log("User created successfully:", userResult.data);
                dispatch(setUser(userResult.data)); // Dispatch action to update the store
                navigate('/personal-info');
            }
        } catch (error) {
            // Handle unexpected error
            console.error("Error creating user:", error);
        }
    };

    // Define the label content for the checkbox
    const checkboxLabel = t("agree");

    return (
        <>  
            <Header extended className='bg-primary-dark'>
                <div className="usa-navbar">
                    <h3 className='margin-0'>
                        <p></p>
                    </h3>
                </div>
            </Header>
            <main id="main-content">
                <div className="bg-base-lightest">
                <GridContainer className="usa-section">
                    <Grid row className="margin-x-neg-205 flex-justify-center">
                        <Grid
                            col={12}
                            mobileLg={{ col: 10 }}
                            tablet={{ col: 8 }}
                            desktop={{ col: 6 }}
                            className="padding-x-205 margin-bottom-4">
                            <h1 className="desktop:display-none font-sans-lg margin-bottom-4 tablet:margin-top-neg-3">
                                {t("convienient")}
                            </h1>

                            <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                            <h1 className="margin-bottom-1">{t("create")}</h1>
                            <Form onSubmit={handleSubmit}>
                                <Fieldset legend={t("get-started")}>
                                <p className="margin-bottom-0">
                                    <abbr
                                    title="required"
                                    className="usa-hint usa-hint--required">
                                    *
                                    </abbr>{' '}
                                    {t("indicate")}
                                </p>
                            
                                 <Grid row gap>
                                    <Grid col tablet={{ col: 6 }}>
                                        <Label htmlFor="first-name">
                                            First Name
                                            {' '}
                                            <abbr title="required" className="usa-label--required">
                                                *
                                            </abbr>
                                        </Label>
                                        <TextInput id="first-name" name="first-name" type="text" required={true} />
                                    </Grid>
                                    <Grid col tablet={{ col: 6 }}>
                                        <Label htmlFor="last-name">
                                            Last Name
                                            {' '}
                                            <abbr title="required" className="usa-label--required">
                                                *
                                            </abbr>
                                        </Label>
                                        <TextInput id="last-name" name="last-name" type="text" required={true} />
                                    </Grid>
                                </Grid>

                                <Label htmlFor="ssn">
                                    {t("ssn")}{' '}
                                    <abbr title="required" className="usa-label--required">
                                    *
                                    </abbr>
                                </Label>
                                <TextInput
                                    id="ssn"
                                    name="ssn"
                                    type="number"
                                    required={true}
                                />

                                <Label htmlFor="phone">
                                    {t("phone")}
                                </Label>
                                <TextInput
                                    id="phone"
                                    name="phone"
                                    type="number"
                                    required={true}
                                />

                                <Checkbox
                                    id="terms-and-conditions"
                                    name="terms-and-conditions"
                                    className="margin-y-3"
                                    required={true}
                                    label={checkboxLabel}
                                />

                                <Button type="submit">
                                    {isCreating ? "Creating..." : t("confirm")}
                                </Button>
                                </Fieldset>
                            </Form>
                            </div>

                        </Grid>

                        <Grid
                            col={12}
                            mobileLg={{ col: 10 }}
                            tablet={{ col: 8 }}
                            desktop={{ col: 6 }}
                            className="padding-x-205">
                            <div className="border-top border-base-lighter padding-top-4 desktop:border-0 desktop:padding-top-0">
                                <h2 className="display-none desktop:display-block">
                                    {t("convienient")}
                                </h2>

                                <div className="usa-prose">
                                    <p>
                                         {t("convienient-desc")}
                                    </p>
                                </div>

                            
                            </div>
                        </Grid>
                    </Grid>
                </GridContainer>
                </div>
            </main>

        </>
    );
};

export default CreateAccountPage;