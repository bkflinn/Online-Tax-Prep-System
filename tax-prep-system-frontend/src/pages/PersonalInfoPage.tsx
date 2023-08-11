import { Accordion, Button, Grid, GridContainer, StepIndicator, StepIndicatorStep, SummaryBox, SummaryBoxContent, SummaryBoxHeading} from '@trussworks/react-uswds';
import { AccordionItemProps } from '@trussworks/react-uswds/lib/components/Accordion/Accordion';
import AddressForm from '../components/Address/AddressForm';
import FilingStatusForm from '../components/Status/FilingStatusForm';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import NavHeader from '../components/NavHeader';

const PersonalInfoPage = (): React.ReactElement =>{

    const navigate = useNavigate();
    const { t } = useTranslation();
    
    //contains the needed forms
    const userInfo: AccordionItemProps[] = [
        { 
            title: t("address"), 
            content: <AddressForm/>,
            expanded: false,
            id: 'accordion-address',
            headingLevel: 'h1',
        },
        { 
            title: t("filing-status"), 
            content: <FilingStatusForm/>,
            expanded: false,
            id: 'accordion-status',
            headingLevel: 'h1',
        }
        
    ];

    const handleNext = () => {
        navigate('/documents');
    }

    return (
        <>  
            <NavHeader/>
            <main id="main-content">
                <div className="bg-base-lightest">
                    <GridContainer className="usa-section">
                        
                        <Grid row={true} className="flex-justify-center">
                            
                            <Grid col={12} tablet={{ col: 8 }} desktop={{ col: 12 }}>
                                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                                <StepIndicator centered headingLevel="h4">
                                    <StepIndicatorStep label={t("personal-info")} status="current" />
                                    <StepIndicatorStep label={t("documents")}/>
                                    <StepIndicatorStep label={t("review")} />
                                </StepIndicator>
                                    <h1 className="margin-bottom-0 font-heading-2xl">{t("personal-info")}</h1>
                                    <SummaryBox>
                                        <SummaryBoxHeading headingLevel="h2">{t("instructions")}</SummaryBoxHeading>
                                        <SummaryBoxContent>
                                            <ul>
                                                <li>{t("instruc-pt1")}</li>
        
                                                <li>{t("proceed")}</li>
                                            </ul>
                                        </SummaryBoxContent>
                                    </SummaryBox>
                                    <br></br>

                                    <Accordion bordered={true} items={userInfo}></Accordion>
                                    
                                    <Button className="margin-top-3" type="button" onClick={handleNext}>
                                        {t("next")}
                                    </Button>
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