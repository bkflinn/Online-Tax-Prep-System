import {GridContainer, Grid, Form, Fieldset, Label, TextInput, Button, Link} from '@trussworks/react-uswds';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useFindUserByEmailQuery } from '../api/userApi';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import NavHeader from '../components/NavHeader';


const LoginPage = (): React.ReactElement => {
    const [showPassword, setShowPassword] = useState(false)

    const dispatch = useDispatch();
   
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleCreate = () => {
        navigate('/create-account')
    }

    const { data: user} = useFindUserByEmailQuery(formData.email, { skip: !formData.email });

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        
        if (user) {
            if (user.password === formData.password) {
                dispatch(setUser(user));
                navigate('/personal-info');
            } else {
                console.log('Incorrect password');
            }
        } else {
            console.log('User not found');
        }
    };


    return (
        <>  
            <NavHeader/>
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
                                                onChange={handleFormChange}
                                            />

                                            <Label htmlFor="email">{t("password")}</Label>
                                            <TextInput
                                                id="password-sign-in"
                                                name="password"
                                                type={showPassword ? 'text' : 'password'}
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                required={true}
                                                onChange={handleFormChange}
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

                                            <Button type="submit">{t("sign-in")}</Button>
                                        </Fieldset>
                                    </Form>
                                </div>

                                <p className="text-center">
                                    {t("dontHaveAccount")}  <Button type={'button'} unstyled onClick={handleCreate}>
                                        {t("createAccount")}
                                    </Button>
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