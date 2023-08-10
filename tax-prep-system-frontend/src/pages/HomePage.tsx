import { Button, Card, CardBody, CardFooter, CardHeader, Grid, GridContainer, Header, Icon,} from "@trussworks/react-uswds";
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
        navigate('/personal-info')
    }
    return(
        <>  
            <Header extended className='bg-primary-dark'>
                <div className="usa-navbar">
                    <h3 className='margin-0'>
                        <a href="/homepage" title="Home" aria-label="Home" className='text-base-lightest usa-footer__primary-link'>
                            {t("Home")}
                        </a>
                    </h3>
                </div>
            </Header>
            <GridContainer className="usa-header" >
                <h1 > Welcome to the Tax Preparation System </h1>
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
                        <h1>About</h1>
                        <p> 
                            Most U.S. citizens – and permanent residents who work in the United States – need to file a tax return if they make more than a certain amount for the year.
                            <br/>
                            <br/>
                            You may want to file even if you make less than that amount, because you may get money back if you file. This could apply to you if you:
                        </p>
                        <ul>
                            <li>Have had federal income tax withheld from your pay</li>
                            <li>Made estimated tax payments</li>
                            <li>Qualify to claim tax credits such as the Earned Income Tax Credit and Child Tax Credit</li>
                        </ul>
                        <Button type={"button"} onClick={handleButtonClick}>
                            Determine your filing requirement 
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
                                    Tax Calculator Tool
                                </h3>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    Use our tax calculator to get a breakdown of the amount you owe or will be refunded based on your yearly income
                                    and filing status.
                                </p>
                                <h3>
                                    What you need
                                </h3>
                                <ul className="usa-list">
                                    <li>
                                        Address information
                                    </li>
                                    <li>
                                        Filing Status
                                    </li>
                                    <li>
                                        If applicable: your yearly W2 form
                                    </li>
                                    <li>
                                        If applicable: your yearly 1099 form
                                    </li>
                                </ul>
                            </CardBody>
                            <CardFooter>
                                <Button type="button" onClick={handleNext}>Begin</Button>
                            </CardFooter>
                        </Card>
                    </Grid>
                </Grid>
            </GridContainer>
        </>
    )
}

export default HomePage;