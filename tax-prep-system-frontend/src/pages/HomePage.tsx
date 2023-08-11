import { Button, Card, CardBody, CardFooter, CardHeader, Grid, GridContainer, Icon,} from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {} from '@trussworks/react-uswds';

const HomePage = (): React.ReactElement => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleButtonClick = () => {
        window.open('https://www.irs.gov/help/ita/do-i-need-to-file-a-tax-return', '_blank');
    };

    const handleNext = () => {
        navigate('/login')
    }
    return(
        <>  
            <GridContainer className="usa-header" >
                <h1 > {t("welcome")} </h1>
            </GridContainer>
            <GridContainer className="usa-section padding-top-1">
                <Grid row className="margin-x-neg-205 flex-justify-center">
                    <Grid
                    col={12}
                    mobileLg={{ col: 10 }}
                    tablet={{ col: 8 }}
                    desktop={{ col: 6 }}
                    style={{ lineHeight: '1.5' }}
                    className="padding-x-205 margin-bottom-6">
                        <h1>{t("about")}</h1>
                        <p> 
                        {t("about1")}
                            <br/>
                            <br/>
                            {t("about2")}
                        </p>
                        <ul>
                            <li>{t("about-bullet1")}</li>
                            <li>{t("about-bullet2")}</li>
                            <li>{t("about-bullet3")}</li>
                        </ul>
                        <Button type={"button"} onClick={handleButtonClick}>
                        {t("filing-req")} 
                        </Button> <Icon.Link/>
                    </Grid>
                    <Grid 
                    col={12}
                    mobileLg={{ col: 10 }}
                    tablet={{ col: 8 }}
                    desktop={{ col: 6 }}
                    className="padding-x-205 margin-top-6">
                        <Card gridLayout={{ tablet: { col: 12 } }} style={{ listStyle: 'none' }}>
                            <CardHeader>
                                <h3 className="usa-card__heading">
                                {t("tax-calc")}
                                </h3>
                            </CardHeader>
                            <CardBody>
                                <p>
                                {t("calc-info")}
                                </p>
                                <h3>
                                {t("what-need")}
                                </h3>
                                <ul className="usa-list">
                                    <li>
                                    {t("need1")}
                                    </li>
                                    <li>
                                    {t("need2")}
                                    </li>
                                    <li>
                                    {t("need3")}
                                    </li>
                                    <li>
                                    {t("need4")}
                                    </li>
                                </ul>
                            </CardBody>
                            <CardFooter>
                                <Button type="button" onClick={handleNext}>{t("begin")}</Button>
                            </CardFooter>
                        </Card>
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    )
}

export default HomePage;
