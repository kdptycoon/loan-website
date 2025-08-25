// EMI Calculation Formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
// Where: P = Principal Amount, r = Monthly Interest Rate, n = Number of Months

export const calculateEMI = (principal, annualRate, tenureMonths) => {
  if (!principal || !annualRate || !tenureMonths) return 0;
  
  const monthlyRate = annualRate / 12 / 100;
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) / 
              (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  
  return Math.round(emi);
};

export const calculateTotalInterest = (principal, emi, tenureMonths) => {
  const totalAmount = emi * tenureMonths;
  return Math.round(totalAmount - principal);
};

export const calculateTotalAmount = (principal, emi, tenureMonths) => {
  return Math.round(emi * tenureMonths);
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const generateAmortizationSchedule = (principal, annualRate, tenureMonths) => {
  const monthlyRate = annualRate / 12 / 100;
  const emi = calculateEMI(principal, annualRate, tenureMonths);
  
  let balance = principal;
  const schedule = [];
  
  for (let month = 1; month <= tenureMonths; month++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = emi - interestPayment;
    balance -= principalPayment;
    
    schedule.push({
      month,
      emi: Math.round(emi),
      principal: Math.round(principalPayment),
      interest: Math.round(interestPayment),
      balance: Math.round(Math.max(0, balance)),
    });
  }
  
  return schedule;
};

export const getChartData = (principal, annualRate, tenureMonths) => {
  const emi = calculateEMI(principal, annualRate, tenureMonths);
  const totalInterest = calculateTotalInterest(principal, emi, tenureMonths);
  
  return [
    { name: 'Principal', value: principal, fill: '#3b82f6' },
    { name: 'Interest', value: totalInterest, fill: '#ef4444' },
  ];
};

export const getMonthlyBreakdownData = (principal, annualRate, tenureMonths) => {
  const schedule = generateAmortizationSchedule(principal, annualRate, tenureMonths);
  
  // Get data for every 12th month or last month
  const monthlyData = schedule.filter((item, index) => 
    index === 0 || (index + 1) % 12 === 0 || index === schedule.length - 1
  );
  
  return monthlyData.map(item => ({
    month: `Month ${item.month}`,
    principal: item.principal,
    interest: item.interest,
    balance: item.balance,
  }));
};