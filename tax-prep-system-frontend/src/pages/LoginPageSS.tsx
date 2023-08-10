import {GridContainer, Grid, Form, Fieldset, Label, TextInput, Button, Link} from '@trussworks/react-uswds';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useFindUserByEmailQuery } from '../api/userApi';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';

const LoginPage = (): React.ReactElement => {
    const [showPassword, setShowPassword] = useState(false)
    const [userEmail, setUserEmail] = useState('');

    const dispatch = useDispatch();
   
    const { t } = useTranslation();
    const navigate = useNavigate();

    function getUserEmail() {
        return fetch(' http://75.101.219.66.nip.io:8080/userEmail', { method: 'GET' })
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
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
                    // Email doesn't exist, route to user setup pag
                }
            })
            .catch(error => {
                // Handle any errors that occurred during fetching email
                console.error('Error fetching user email:', error);
        });
    };

    return (
        <>  
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