import { Button, Header } from "@trussworks/react-uswds";
import {useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

const NavHeader = (): React.ReactElement => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    
    const returnHome = () => {
        navigate('/homepage');
    }

    return(
        <>
            <Header extended className='bg-primary-dark'>
          <div className="usa-navbar">
              <h3 className='margin-0'>
                  <Button  className='bg-primary-dark' type={"button"} onClick={returnHome}>
                      {t("home")}
                  </Button>
              </h3>
          </div>
            </Header>
        </>
    )
}

export default NavHeader;