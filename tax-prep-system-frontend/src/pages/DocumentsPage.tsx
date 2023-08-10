import { Accordion, Button, Grid, GridContainer, Header, StepIndicator, StepIndicatorStep, SummaryBox, SummaryBoxContent, SummaryBoxHeading} from '@trussworks/react-uswds';
import { AccordionItemProps } from '@trussworks/react-uswds/lib/components/Accordion/Accordion';
import W2Form from '../components/W2/W2Form';
import NECForm from '../components/1099/NECForm';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const DocumentsPage = (): React.ReactElement =>{
    const navigate = useNavigate();
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

    const handlePrev = () => {
        navigate('/personal-info');
    }

    const handleNext = () => {
        navigate('/review');
    }
    
    return (
        <>
            <Header extended className='bg-primary-dark'>
                <div className="usa-navbar">
                    <h3 className='margin-0'>
                        <a href="/homepage" title="Home" aria-label="Home" className='text-base-lightest usa-footer__primary-link'>
                            {t("home")}
                        </a>
                    </h3>
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
                                    <StepIndicatorStep label={t("documents")} status="current" />
                                    <StepIndicatorStep label={t("review")}/>
                                </StepIndicator>

                                    <h1 className="margin-bottom-0 font-heading-2xl">{t("documents")}</h1>
                                    <SummaryBox>
                                        <SummaryBoxHeading headingLevel="h2">{t("instructions")}</SummaryBoxHeading>
                                        <SummaryBoxContent>
                                            <ul>
                                                <li>{t("instruc-pt1")}</li>
                                                <li>
                                                {t("instruc-pt2-1")} <a href="https://www.irs.gov/forms-pubs/about-form-w-2" target="_blank">{t("instruc-pt2-2")}</a> {t("instruc-pt2-3")} <a href="https://www.irs.gov/forms-pubs/about-form-1099-nec" target="_blank">{t("instruc-pt2-4")}</a> {t("instruc-pt2-5")}
                                                </li>
                                                <li>{t("instruc-pt3")}</li>
                                            </ul>
                                        </SummaryBoxContent>
                                    </SummaryBox>
                                    <br></br>

                                    <Accordion bordered={true} items={userInfo}></Accordion>

                                    <div className="mobile-lg:grid-col-4">
                                        <Button className="margin-top-3 usa-button usa-button--outline" type="button" onClick={handlePrev}>{t("prev")}</Button>
                                        <Button className="margin-top-3" type="button" onClick={handleNext}>{t("next")}</Button>
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