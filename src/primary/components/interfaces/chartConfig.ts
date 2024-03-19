export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Monitoramento mensal',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40]
        },
        {
            label: 'Outro monitoramento',
            backgroundColor: '#7c4dff',
            data: [24, 53, 67, 90, 120, 140, 150]
        },
        {
            label: 'Mais um monitoramento',
            backgroundColor: '#4d7cff',
            data: [43, 52, 32, 41, 12, 32, 21]
        }
    ]
};

export const options = {
    responsive: true,
    maintainAspectRatio: false
};
