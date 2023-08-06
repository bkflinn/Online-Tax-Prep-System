import { Button, Grid, GridContainer, Header, StepIndicator, StepIndicatorStep, SummaryBox, SummaryBoxContent, SummaryBoxHeading, Title } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";


const ReviewPage = (): React.ReactElement =>{
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handlePrev = () => {
        navigate('/documents');
    }

    const handleNext = () => {
        navigate('/results');
    }

   
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
                                    <StepIndicatorStep label={t("personal-info")} status="complete" />
                                    <StepIndicatorStep label={t("documents")} status="complete" />
                                    <StepIndicatorStep label={t("review")} status= "current"/>
                                </StepIndicator>

                                    <h1 className="margin-bottom-0 font-heading-2xl">{t("review")}</h1>
                                    <SummaryBox>
                                        <SummaryBoxHeading headingLevel="h2">{t("instructions")}</SummaryBoxHeading>
                                        <SummaryBoxContent>
                                            <ul>
                                                <li>{t("review-desc")}</li>
                                            </ul>
                                        </SummaryBoxContent>
                                    </SummaryBox>
                                    <br></br>

                                    

                                    <div className="mobile-lg:grid-col-4">
                                        <Button className="margin-top-3 usa-button usa-button--outline" type="button" onClick={handlePrev}>{t("prev")}</Button>
                                        <Button className="margin-top-3" type="button" onClick={handleNext}>{t("submit")}</Button>
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