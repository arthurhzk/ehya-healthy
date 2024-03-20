export const data = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    datasets: [
        {
            label: 'Glicemia',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40]
        },
        {
            label: 'Pressão',
            backgroundColor: '#7c4dff',
            data: [24, 53, 67, 90, 120, 140, 150]
        },
        {
            label: 'Batimentos Cardíacos',
            backgroundColor: '#4d7cff',
            data: [43, 52, 32, 41, 12, 32, 21]
        }
    ]
};

export const options = {
    responsive: true,
    maintainAspectRatio: false
};
