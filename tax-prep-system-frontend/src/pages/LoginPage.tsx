import {GridContainer, Grid, Button, Link  } from '@trussworks/react-uswds';

import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useFindUserByEmailQuery } from '../api/userApi';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';


const LoginPage = (): React.ReactElement => {
    const [userEmail, setUserEmail] = useState('');

    const dispatch = useDispatch();
   
    const { t } = useTranslation();
    const navigate = useNavigate();

    function getUserEmail() {
        return fetch(' http://75.101.219.66.nip.io:8080/userEmail', { credentials: 'include', method: 'GET' })
            .then(data => data.text())
            .then(userEmail => {
                setUserEmail(userEmail);
                return userEmail; // Return the fetched userEmail
            })
            .catch(error => {
                console.error('Error fetching user email:', error);
                throw error; // Rethrow the error to propagate it
            });
    }

    
    function handleLogin() {
        // Perform OAuth login
        window.location.replace(' http://75.101.219.66.nip.io:8080/signin'); // will this work???

        // Fetch the user's email after the OAuth login
        getUserEmail()
            .then(() => {
                // Query user database by email
                const { data: user } = useFindUserByEmailQuery(userEmail);
                
                if (user) {
                    dispatch(setUser(user)); // Dispatch action to update the store
                    // Email exists, route to landing page
                    navigate('/landing'); 
                } else {
                    // Email doesn't exist, route to user setup page
                    navigate('/create-account');
                }
            })
            .catch(error => {
                // Handle any errors that occurred during fetching email
                console.error('Error fetching user email:', error);
        });
    }

    return (
        <>
            <main id="main-content">
                <div className="bg-base-lightest">
                    <GridContainer className="usa-section">
                        <Grid row={true} className="flex-justify-center">
                            <Grid col={12} tablet={{ col: 8 }} desktop={{ col: 6 }}>
                                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                                    <h1 className="margin-bottom-2">{t("sign-in")}</h1>
                                    <div className="usa-prose">
                                        <p className="margin-top-1">
                                            You can access your account through our secure sign in.
                                        </p>
                                    </div>

                                            <Label htmlFor="password-sign-in">{t("password")}</Label>
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
                                    <p>
                                        <Button type="button" outline={true} className="width-full" onClick={handleLogin}>
                                            Sign in with Google
                                        </Button>
                                    </p>
                                </div>

                                <p className="text-center">
                                    {t("dontHaveAccount")} <Link href="https://accounts.google.com/signup/v2/createaccount?flowName=GlifWebSignIn&flowEntry=SignUp">
                                    {t("createAccount")}</Link>
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