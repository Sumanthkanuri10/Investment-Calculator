import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
    const resultData = calculateInvestmentResults(input);
    const InitialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((yearData, index) => {
                    const totalInterest = yearData.valueEndOfYear - InitialInvestment - (input.AnnualInvestment * (index + 1));
                    const investedCapital = InitialInvestment + (input.AnnualInvestment * index);
                    
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
