import { useState } from 'react';
import {Header, Title, GridContainer, Grid, Form, Fieldset, Label, TextInput, Checkbox, Button, Link} from '@trussworks/react-uswds';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const CreateAccountPage = (): React.ReactElement => {
    const [showPassword, setShowPassword] = useState(false);
    const { t } = useTranslation();


    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Handle form submission logic here

        //After form submission, navigate to PersonalInfo page 
        navigate('/personal-info');
    };

    // Define the label content for the checkbox
    const checkboxLabel = t("agree");

    return (
        <>
            <Header extended>
                <div className="usa-navbar">
                    <Title id="extended-logo">
                        <a href="/" title="Home" aria-label="Home">
                        {t("title")}
                        </a>
                    </Title>
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
                            <h1 className="margin-bottom-0">{t("create")}</h1>
                            <Form onSubmit={handleSubmit}>
                                <Fieldset legend={t("get-started")}>
                                <p>
                                    <abbr
                                    title="required"
                                    className="usa-hint usa-hint--required">
                                    *
                                    </abbr>{' '}
                                    {t("indicate")}
                                </p>

                                <Label htmlFor="email">
                                    {t("email")}{' '}
                                    <abbr title="required" className="usa-label--required">
                                    *
                                    </abbr>
                                </Label>
                                <TextInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoCapitalize="off"
                                    autoCorrect="off"
                                    required={true}
                                />

                                <Label htmlFor="password-create-account">
                                    {t("create-password")}{' '}
                                    <abbr title="required" className="usa-label--required">
                                    *
                                    </abbr>
                                </Label>
                                <TextInput
                                    id="password-create-account"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoCapitalize="off"
                                    autoCorrect="off"
                                    required={true}
                                />

                                <p className="usa-form__note">
                                    <a
                                    title="Show password"
                                    href="javascript:void(0);"
                                    className="usa-show-password"
                                    aria-controls="password-create-account password-create-account-confirm"
                                    onClick={(): void =>
                                        setShowPassword((showPassword) => !showPassword)
                                    }>
                                    {showPassword ? t("hide-password") : t("show-password")}
                                    </a>
                                </p>

                                <Label htmlFor="password-create-account-confirm">
                                     {t("retype-password")}{' '}
                                    <abbr title="required" className="usa-label--required">
                                    *
                                    </abbr>
                                </Label>
                                <TextInput
                                    id="password-create-account-confirm"
                                    name="password-confirm"
                                    type={showPassword ? 'text' : 'password'}
                                    autoCapitalize="off"
                                    autoCorrect="off"
                                    required={true}
                                />

                                <Checkbox
                                    id="terms-and-conditions"
                                    name="terms-and-conditions"
                                    className="margin-y-3"
                                    required={true}
                                    label={checkboxLabel}
                                />

                                <Button type="submit">{t("create")}</Button>
                                </Fieldset>
                            </Form>
                            </div>

                            <p className="text-center">
                            {t("have-account")}{' '}
                            <Link href="/login">{t("sign-in")}</Link>.
                            </p>
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