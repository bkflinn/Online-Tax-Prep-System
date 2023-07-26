import { Accordion, Grid, GridContainer, Header, Link, Title } from '@trussworks/react-uswds';
import { AccordionItemProps } from '@trussworks/react-uswds/lib/components/Accordion/Accordion';
import { useState } from 'react';
import AddressForm from '../components/AddressForm';
import W2Form from '../components/W2Form';

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
                                    <p> Open each tab to begin filling in your information</p>
                                    <br></br>

                                    <Accordion bordered={true} items={userInfo}></Accordion>
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