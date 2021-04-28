function PeriodButton ({period, handlePeriod}) {
    const periodButtons = ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5', 'All']
    return (
        <div>
        <button onClick={handlePeriod}>{period}</button>
        </div>
    )
}

export default PeriodButton