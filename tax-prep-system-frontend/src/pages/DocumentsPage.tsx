import { Accordion, Button, Grid, GridContainer, Header, StepIndicator, StepIndicatorStep, SummaryBox, SummaryBoxContent, SummaryBoxHeading, Title } from '@trussworks/react-uswds';
import { AccordionItemProps } from '@trussworks/react-uswds/lib/components/Accordion/Accordion';
import W2Form from '../components/W2/W2Form';
import NECForm from '../components/1099/NECForm';
import { useTranslation } from 'react-i18next';


const DocumentsPage = (): React.ReactElement =>{
    const { t } = useTranslation();

    const userInfo: AccordionItemProps[] = [
        { 
            title: 'W2 Form', 
            content: <W2Form/>,
            expanded: false,
            id: 'accordion-W2',
            headingLevel: 'h1',
        },
        { 
            title: '1099 Form', 
            content: <NECForm/>,
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
                        {t("title")}
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
                                    <StepIndicatorStep label="Personal Information" status="complete" />
                                    <StepIndicatorStep label="Documents" status="current" />
                                    <StepIndicatorStep label="Review and Submit"/>
                                </StepIndicator>

                                    <h1 className="margin-bottom-0 font-heading-2xl">Documents</h1>
                                    <SummaryBox>
                                        <SummaryBoxHeading headingLevel="h2">Instructions</SummaryBoxHeading>
                                        <SummaryBoxContent>
                                            <ul>
                                                <li>For each tab, fill in your information.</li>
                                                <li>
                                                    Additional information on the <a href="https://www.irs.gov/forms-pubs/about-form-w-2">W2 form</a> and <a href="https://www.irs.gov/forms-pubs/about-form-1099-nec">1099 form</a> can 
                                                    be found on the IRS website.
                                                </li>
                                                <li>When done, proceed to the next page to review your information.</li>
                                            </ul>
                                        </SummaryBoxContent>
                                    </SummaryBox>
                                    <br></br>

                                    <Accordion bordered={true} items={userInfo}></Accordion>

                                    <div className="mobile-lg:grid-col-4">
                                        <Button className="margin-top-3 usa-button usa-button--outline" type="button">Prev</Button>
                                        <Button className="margin-top-3" type="button">Next</Button>
                                    </div>
                                    
                                </div>
                                
                            </Grid>
                        </Grid>
                    </GridContainer>
                </div>
            </main>
        </>
    );
}

export default DocumentsPage;