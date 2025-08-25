import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import Input from './Input';
import Card from './Card';
import { calculateEMI, calculateTotalInterest, calculateTotalAmount, formatCurrency, getChartData, getMonthlyBreakdownData } from '../utils/loanCalculations';

const LoanCalculator = ({ 
  title = 'Loan Calculator',
  defaultAmount = 10000,
  defaultRate = 12,
  defaultTenure = 12,
  minAmount = 1000,
  maxAmount = 1000000,
  minRate = 1,
  maxRate = 30,
  minTenure = 6,
  maxTenure = 360,
  amountStep = 1000,
  rateStep = 0.1,
  tenureStep = 1,
}) => {
  const [loanAmount, setLoanAmount] = useState(defaultAmount);
  const [interestRate, setInterestRate] = useState(defaultRate);
  const [tenure, setTenure] = useState(defaultTenure);
  const [chartType, setChartType] = useState('pie');
  
  const [results, setResults] = useState({
    emi: 0,
    totalInterest: 0,
    totalAmount: 0,
  });
  
  useEffect(() => {
    const emi = calculateEMI(loanAmount, interestRate, tenure);
    const totalInterest = calculateTotalInterest(loanAmount, emi, tenure);
    const totalAmount = calculateTotalAmount(loanAmount, emi, tenure);
    
    setResults({ emi, totalInterest, totalAmount });
  }, [loanAmount, interestRate, tenure]);
  
  const pieData = getChartData(loanAmount, interestRate, tenure);
  const barData = getMonthlyBreakdownData(loanAmount, interestRate, tenure);
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Input Section */}
        <Card>
          <h3 className="text-lg font-semibold mb-4">Loan Details</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Amount: {formatCurrency(loanAmount)}
              </label>
              <input
                type="range"
                min={minAmount}
                max={maxAmount}
                step={amountStep}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{formatCurrency(minAmount)}</span>
                <span>{formatCurrency(maxAmount)}</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate: {interestRate}% per annum
              </label>
              <input
                type="range"
                min={minRate}
                max={maxRate}
                step={rateStep}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{minRate}%</span>
                <span>{maxRate}%</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Tenure: {tenure} months ({(tenure / 12).toFixed(1)} years)
              </label>
              <input
                type="range"
                min={minTenure}
                max={maxTenure}
                step={tenureStep}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{minTenure} months</span>
                <span>{maxTenure} months</span>
              </div>
            </div>
          </div>
          
          {/* Quick Input Fields */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <Input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              min={minAmount}
              max={maxAmount}
              step={amountStep}
              prefix="$"
            />
            <Input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              min={minRate}
              max={maxRate}
              step={rateStep}
              suffix="%"
            />
            <Input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              min={minTenure}
              max={maxTenure}
              step={tenureStep}
              suffix="mo"
            />
          </div>
        </Card>
        
        {/* Results Section */}
        <div className="space-y-4">
          <Card className="bg-primary-50 border-primary-200">
            <h3 className="text-lg font-semibold mb-4">Monthly EMI</h3>
            <p className="text-3xl font-bold text-primary-600">
              {formatCurrency(results.emi)}
            </p>
          </Card>
          
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <h4 className="text-sm font-medium text-gray-600">Total Interest</h4>
              <p className="text-xl font-semibold text-red-600">
                {formatCurrency(results.totalInterest)}
              </p>
            </Card>
            
            <Card>
              <h4 className="text-sm font-medium text-gray-600">Total Amount</h4>
              <p className="text-xl font-semibold text-gray-900">
                {formatCurrency(results.totalAmount)}
              </p>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Charts Section */}
      <Card>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Loan Breakdown</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setChartType('pie')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                chartType === 'pie' 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pie Chart
            </button>
            <button
              onClick={() => setChartType('bar')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                chartType === 'bar' 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Bar Chart
            </button>
          </div>
        </div>
        
        <div className="h-80">
          {chartType === 'pie' ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Legend />
                <Bar dataKey="principal" fill="#3b82f6" name="Principal" />
                <Bar dataKey="interest" fill="#ef4444" name="Interest" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </Card>
    </div>
  );
};

export default LoanCalculator;