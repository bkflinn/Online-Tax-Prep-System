import { Accordion, Button, Grid, GridContainer, Header, StepIndicator, StepIndicatorStep, SummaryBox, SummaryBoxContent, SummaryBoxHeading, Title } from '@trussworks/react-uswds';
import { AccordionItemProps } from '@trussworks/react-uswds/lib/components/Accordion/Accordion';
import AddressForm from '../components/Address/AddressForm';
import FilingStatusForm from '../components/Status/FilingStatusForm';

const PersonalInfoPage = (): React.ReactElement =>{
    const userInfo: AccordionItemProps[] = [
        { 
            title: 'Address', 
            content: <AddressForm/>,
            expanded: false,
            id: 'accordion-address',
            headingLevel: 'h1',
        },
        { 
            title: 'Filing Status', 
            content: <FilingStatusForm/>,
            expanded: false,
            id: 'accordion-status',
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
                                <StepIndicator centered headingLevel="h4">
                                    <StepIndicatorStep label="Personal Information" status="current" />
                                    <StepIndicatorStep label="Documents"/>
                                    <StepIndicatorStep label="Review and Submit" />
                                </StepIndicator>
                                    <h1 className="margin-bottom-0 font-heading-2xl">Personal Information</h1>
                                    <SummaryBox>
                                        <SummaryBoxHeading headingLevel="h2">Instructions</SummaryBoxHeading>
                                        <SummaryBoxContent>
                                            <ul>
                                                <li>For each tab, fill in your information.</li>
        
                                                <li>When done, proceed to the next step.</li>
                                            </ul>
                                        </SummaryBoxContent>
                                    </SummaryBox>
                                    <br></br>

                                    <Accordion bordered={true} items={userInfo}></Accordion>
                                    
                                    <Button className="margin-top-3" type="button">Next</Button>
                                </div>
                                
                            </Grid>
                        </Grid>
                    </GridContainer>
                </div>
            </main>
        </>
    );
}

export default PersonalInfoPage;