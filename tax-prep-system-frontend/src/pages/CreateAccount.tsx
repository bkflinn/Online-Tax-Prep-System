import React, { useState } from 'react';
import {Header, Title, GridContainer, Grid, Form, Fieldset, Label, TextInput, Checkbox, Button, Link, MediaBlockBody} from '@trussworks/react-uswds';

const CreateAccount = (): React.ReactElement => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Handle form submission logic here
    };

    // Define the label content for the checkbox
    const checkboxLabel = "I agree to the terms and conditions";

    return (
        <>
            <Header extended>
                <div className="usa-navbar">
                    <Title id="extended-logo">
                        <a href="/" title="Home" aria-label="Home">
                            Tax Preparation System
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
                                Conveniently store and access your information.
                            </h1>

                            <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                            <h1 className="margin-bottom-0">Create account</h1>
                            <Form onSubmit={handleSubmit}>
                                <Fieldset legend="Get started with an account.">
                                <p>
                                    <abbr
                                    title="required"
                                    className="usa-hint usa-hint--required">
                                    *
                                    </abbr>{' '}
                                    indicates a required field.
                                </p>

                                <Label htmlFor="email">
                                    Email address{' '}
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
                                    Create password{' '}
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
                                    {showPassword ? 'Hide password' : 'Show password'}
                                    </a>
                                </p>

                                <Label htmlFor="password-create-account-confirm">
                                    Re-type password{' '}
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

                                <Button type="submit">Create account</Button>
                                </Fieldset>
                            </Form>
                            </div>

                            <p className="text-center">
                            Already have an account?{' '}
                            <Link href="javascript:void(0);">Sign in</Link>.
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
                                    Conveniently store and access your information.
                                </h2>

                                <div className="usa-prose">
                                    <p>
                                         Create an account to securely store and access your personal and tax
                                         information. Change your information at any time and get fast and easy
                                         access to your tax preparation.
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

export default CreateAccount;