import { Button, Grid, GridContainer, Header, StepIndicator, StepIndicatorStep, SummaryBox, SummaryBoxContent, SummaryBoxHeading, Title } from "@trussworks/react-uswds";


const ReviewPage = (): React.ReactElement =>{
   
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
                                    <StepIndicatorStep label="Personal Information" status="complete" />
                                    <StepIndicatorStep label="Documents" status="complete" />
                                    <StepIndicatorStep label="Review and Submit" status= "current"/>
                                </StepIndicator>

                                    <h1 className="margin-bottom-0 font-heading-2xl">Review and Submit</h1>
                                    <SummaryBox>
                                        <SummaryBoxHeading headingLevel="h2">Instructions</SummaryBoxHeading>
                                        <SummaryBoxContent>
                                            <ul>
                                                <li>Review your information to ensure that it is accurate.</li>
                                            </ul>
                                        </SummaryBoxContent>
                                    </SummaryBox>
                                    <br></br>

                                    

                                    <div className="mobile-lg:grid-col-4">
                                        <Button className="margin-top-3 usa-button usa-button--outline" type="button">Prev</Button>
                                        <Button className="margin-top-3" type="button">Submit</Button>
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

export default ReviewPage;