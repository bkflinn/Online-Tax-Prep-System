import {Header, Title, GridContainer, Grid, Form, Fieldset, Label, TextInput, Button, Link  } from '@trussworks/react-uswds';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const LoginPage = (): React.ReactElement => {
    const [showPassword, setShowPassword] = useState(false)
    const { t } = useTranslation();

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Handle form submission logic here

        //After form submission, navigate to PersonalInfo page (actually change this to results page)
        navigate('/personal-info');
    };

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
                        <Grid row={true} className="flex-justify-center">
                            <Grid col={12} tablet={{ col: 8 }} desktop={{ col: 6 }}>
                                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                                    <h1 className="margin-bottom-0">{t("sign-in")}</h1>
                                    <Form onSubmit={handleSubmit}>
                                        <Fieldset legend="Access your account" legendStyle="large">
                                            <Label htmlFor="email">{t("email")}</Label>
                                            <TextInput
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                required={true}
                                            />

                                            <Label htmlFor="email">{t("password")}</Label>
                                            <TextInput
                                                id="password-sign-in"
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                required={true}
                                            />

                                            <p className="usa-form__note">
                                                <a
                                                    title={t("show-password")}
                                                    href="javascript:void(0);"
                                                    className="usa-show-password"
                                                    aria-controls="password-create-account password-create-account-confirm"
                                                    onClick={(): void =>
                                                        setShowPassword((showPassword) => !showPassword)
                                                    }>
                                                    {showPassword ? t("hide-password") : t("show-password")}
                                                </a>
                                            </p>

                                            <Button type="submit">{t("sign-in")}</Button>
                                        </Fieldset>
                                    </Form>
                                </div>

                                <p className="text-center">
                                    {t("dontHaveAccount")}
                                    <Link href="/create-account">{t("createAccount")}</Link>
                                </p>
                            </Grid>
                        </Grid>
                    </GridContainer>
                </div>
            </main>
        </>
    )
};

export default LoginPage;