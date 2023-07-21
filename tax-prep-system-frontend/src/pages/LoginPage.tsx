import { GovBanner, Header, Title, GridContainer, Grid, Form, Fieldset, Label, TextInput, Button, Link  } from '@trussworks/react-uswds';
import React, { useState } from 'react';

const LoginPage = (): React.ReactElement => {
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Handle form submission logic here
    };

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
                        <Grid row={true} className="flex-justify-center">
                            <Grid col={12} tablet={{ col: 8 }} desktop={{ col: 6 }}>
                                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                                    <h1 className="margin-bottom-0">Sign in</h1>
                                    <Form onSubmit={handleSubmit}>
                                        <Fieldset legend="Access your account" legendStyle="large">
                                            <Label htmlFor="email">Email address</Label>
                                            <TextInput
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                required={true}
                                            />

                                            <Label htmlFor="email">Password</Label>
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

                                            <Button type="submit">Sign in</Button>
                                        </Fieldset>
                                    </Form>
                                </div>

                                <p className="text-center">
                                    {"Don't have an account? "}
                                    <Link href="javascript:void();">Create your account now</Link>
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