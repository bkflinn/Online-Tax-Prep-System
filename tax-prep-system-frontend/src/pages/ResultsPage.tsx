import { Grid, GridContainer, Header, Title } from "@trussworks/react-uswds";
import { useTranslation } from 'react-i18next';
import { useFindW2BySocialQuery } from "../api/w2Api";
import { useFindNECBySocialQuery } from "../api/necApi";
import { useFindUserBySocialQuery } from "../api/userApi";

import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels'; // Import the datalabels plugin

import 'chart.js/auto';
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

// Create data for the chart
const createChartData = (totalIncome: number, taxLiability: number, totalWithholding: number, refundOrOwedAmount: number, refundOrOwedLabel: string) => ({
    labels: ['Taxable Income', 'Withheld Amount', 'Total Tax', refundOrOwedLabel],
    datasets: [
        {
            label: '',
            data: [totalIncome, totalWithholding, taxLiability,refundOrOwedAmount],
            backgroundColor: ['rgb(8,92,164)', 'rgb(8,92,164)', 'rgb(8,92,164)', 'rgb(8,92,164)'],
        },
    ],
});

const ResultsPage = (): React.ReactElement =>{
    const { t } = useTranslation();


    // Retrieve the user's social security number from the Redux store
    const socialValue = useSelector((state: RootState) => state.user.user?.social);

    // Ensure socialValue is a valid number, or a default value
    const validSocialValue = socialValue || 0; // Use a default value of 0 or adjust as needed

    const { data: user } = useFindUserBySocialQuery(validSocialValue);
    const { data: w2 } = useFindW2BySocialQuery(validSocialValue);
    const { data: nec } = useFindNECBySocialQuery(validSocialValue);

    // Calculate total income
    const calculateTotalIncome = () => (w2?.wages || 0) + (nec?.compensation || 0);
    const totalIncome = calculateTotalIncome();

    // Calculate total withholding
    const calculateTotalWithholding = () => w2?.fed_withheld || 0;
    const totalWithholding = calculateTotalWithholding();

    // Tax brackets based on filing status
    const taxBrackets: Record<string, { min: number; max: number; rate: number }[]> = {
        S: [
            { min: 0, max: 11000, rate: 0.1 },
            { min: 11000, max: 44725, rate: 0.12 },
            { min: 44725, max: 95375, rate: 0.22 },
            { min: 95375, max: 182100, rate: 0.24 },
            { min: 182100, max: 231250, rate: 0.32 },
            { min: 231250, max: 578125, rate: 0.35 },
            { min: 578125, max: Infinity, rate: 0.37 },
        ],
        M: [
            { min: 0, max: 22000, rate: 0.1 },
            { min: 22000, max: 89450, rate: 0.12 },
            { min: 89450, max: 190750, rate: 0.22 },
            { min: 190750, max: 364200, rate: 0.24 },
            { min: 364200, max: 462500, rate: 0.32 },
            { min: 462500, max: 693750, rate: 0.35 },
            { min: 693750, max: Infinity, rate: 0.37 },
        ],
        H: [
            { min: 0, max: 15700, rate: 0.1 },
            { min: 15700, max: 59850, rate: 0.12 },
            { min: 59850, max: 95350, rate: 0.22 },
            { min: 95350, max: 182100, rate: 0.24 },
            { min: 182100, max: 231250, rate: 0.32 },
            { min: 231250, max: 578100, rate: 0.35 },
            { min: 578100, max: Infinity, rate: 0.37 },
        ],
    };
    
    // Determine filing status based on user's status
    const calculateFilingStatus = () => user?.status || 'S';
    const filingStatus = calculateFilingStatus();

     // Calculate tax liability based on income and tax brackets
     const calculateTaxLiability = (income: number, filingStatus: string) => {
        const brackets = taxBrackets[filingStatus];
        let remainingIncome = income;
        let taxLiability = 0;

        for (const bracket of brackets) {
            const { min, max, rate } = bracket;
            if (remainingIncome <= 0) break;

            const taxableAmount = Math.min(remainingIncome, max - min);
            taxLiability += taxableAmount * rate;
            remainingIncome -= taxableAmount;
        }

        return taxLiability;
    };

    const taxLiability = calculateTaxLiability(totalIncome, filingStatus);


    // Calculate refund or owed amount
    const refundOrOwedAmount = totalWithholding - taxLiability;

    // Calculate refund or owed amount absolute value
    const refundOrOwedAmountPositive = Math.abs(refundOrOwedAmount);

    // Determine the label for the refundOrOwedAmount
    const refundOrOwedLabel = refundOrOwedAmount >= 0 ? 'Amount Refunded' : 'Amount Owed';

    // Create data for the chart
    const chartData = createChartData(totalIncome, taxLiability, totalWithholding, refundOrOwedAmountPositive, refundOrOwedLabel);


    return (
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

            <main id="main-content">
                <div className="bg-base-lightest">
                    <GridContainer className="usa-section">
                        
                        <Grid row={true} className="flex-justify-center">
                            
                            <Grid col={12} tablet={{ col: 8 }} desktop={{ col: 12 }}>
                                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">

                                    <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>
                                        {refundOrOwedLabel}: ${refundOrOwedAmountPositive.toFixed(2)}
                                    </div>

                                    <Bar 
                                        id="chart"
                                        data={chartData}
                                        options={{
                                            scales: {
                                                x: {
                                                    type: 'category',
                                                },
                                                y: {
                                                    beginAtZero: true, // This ensures the y-axis starts from zero
                                                },
                                            },
                                            plugins: {
                                                legend: {
                                                    display: false,
                                                    position: 'top',
                                                },
                                                datalabels: { // Configure the datalabels plugin
                                                    anchor: 'center', // Position the labels at the center of the bars
                                                    align: 'center', // Align the labels at the center of the bars
                                                    color: 'black', // Label text color
                                                    formatter: (value: any) => { // Format the label text (you can customize this as needed)
                                                        return value.toFixed(2); // Display numbers with 2 decimal places
                                                    },
                                                },
                                                
                                            },
                                        }}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </GridContainer>
                </div>
            </main>
        </>
    );
}

export default ResultsPage;