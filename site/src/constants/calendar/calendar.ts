const daysPt = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const monthsPt = [
    'janeiro',
    'fevereiro', 
    'março', 
    'abril', 
    'maio',
    'junho', 
    'julho', 
    'agosto',
    'setembro', 
    'outubro', 
    'novembro', 
    'dezembro'
];

const daysNotWorked = [{ daysOfWeek: [0, 6] }];

const daysAvailable = { daysOfWeek: [1, 2, 3, 4, 5]};

export { daysPt, monthsPt, daysNotWorked, daysAvailable};