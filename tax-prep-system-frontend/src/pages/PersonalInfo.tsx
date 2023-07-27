import { Accordion, Grid, GridContainer, Header, Link, SummaryBox, SummaryBoxContent, SummaryBoxHeading, Title, Button } from '@trussworks/react-uswds';
import { AccordionItemProps } from '@trussworks/react-uswds/lib/components/Accordion/Accordion';
import { useState } from 'react';
import AddressForm from '../components/Address/AddressForm';
import W2Form from '../components/W2/W2Form';
import { useNavigate } from "react-router-dom";

const PersonalInfo = (): React.ReactElement =>{
    const userInfo: AccordionItemProps[] = [
        { 
            title: 'Address', 
            content: <AddressForm/>,
            expanded: false,
            id: 'accordion-address',
            headingLevel: 'h1',
        },
        { 
            title: 'W2 Form', 
            content: <W2Form/>,
            expanded: false,
            id: 'accordion-W2',
            headingLevel: 'h1',
        },
        { 
            title: '1099 Forms', 
            content: '1099 table with modal that lets you add new 1099s here',
            expanded: false,
            id: 'accordion-1099',
            headingLevel: 'h1',
        }
        
    ];

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Handle form submission logic here

        //After form submission, navigate to Login page
        navigate('/login');
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
                            <Grid col={12} tablet={{ col: 8 }} desktop={{ col: 12 }}>
                                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                                    <h1 className="margin-bottom-0 font-heading-2xl">Personal Information</h1>
                                    <SummaryBox>
                                        <SummaryBoxHeading headingLevel="h2">Instructions</SummaryBoxHeading>
                                        <SummaryBoxContent>
                                            <ul>
                                                <li>For each tab, fill in your information.</li>
                                                <li>
                                                    Additional information on the <a href="https://www.irs.gov/forms-pubs/about-form-w-2">W2 form</a> and <a href="https://www.irs.gov/forms-pubs/about-form-1099-nec">1099 form</a> can 
                                                    be found on the IRS website.
                                                </li>
                                                <li>When done, proceed to the results page to see your returns.</li>
                                            </ul>
                                        </SummaryBoxContent>
                                    </SummaryBox>
                                    <br></br>

                                    <Accordion bordered={true} items={userInfo}></Accordion>

                                    <br></br>
                                    <form onSubmit={handleSubmit}>
                                    <Button type="submit">Submit</Button>
                                    </form>
                                </div>
                            </Grid>
                        </Grid>
                    </GridContainer>
                </div>
            </main>
        </>
    );
}

export default PersonalInfo;