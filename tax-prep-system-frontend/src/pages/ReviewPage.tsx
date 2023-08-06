import { Button, Grid, GridContainer, Header, StepIndicator, StepIndicatorStep, SummaryBox, SummaryBoxContent, SummaryBoxHeading, Title } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import AddressTable from "../components/Address/AddressTable";
import { useFindUserBySocialQuery } from "../api/userApi";
import NECTable from "../components/1099/NECTable";
import { useFindNECBySocialQuery } from "../api/necApi";
import { useFindW2BySocialQuery } from "../api/w2Api";
import W2Table from "../components/W2/W2Table";


const ReviewPage = (): React.ReactNode =>{
    const navigate = useNavigate();
    const { t } = useTranslation();

    const socialValue = 1; // placeholder for social number set by login
    const { data: user } = useFindUserBySocialQuery(socialValue);
    const { data: w2 } = useFindW2BySocialQuery(socialValue);
    const { data: nec} = useFindNECBySocialQuery(socialValue);

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
                                                <li>{t("review-done")}</li>
                                            </ul>
                                        </SummaryBoxContent>
                                    </SummaryBox>
                                    <br></br>

                                    <h2>{t("address")}</h2>
                                    {user && 
                                        <AddressTable user={user}></AddressTable>
                                    }

                                    <h2>W2 Form</h2>
                                    {w2 && 
                                        <W2Table w2={w2}></W2Table>
                                    }
                                    <h2>1099 Form</h2>
                                    {nec && 
                                        <NECTable nec={nec}></NECTable>
                                    }

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