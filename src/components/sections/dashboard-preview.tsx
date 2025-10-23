"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown, 
  PieChart, 
  BarChart3, 
  Eye, 
  Settings, 
  DollarSign, 
  Target, 
  Clock, 
  RefreshCw,
  Grid3X3,
  List,
  Rocket,
  User
} from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, hoverLift, cardHover, parallax } from "@/lib/animations";
import { gradients, shadows } from "@/lib/visual-effects";

export function DashboardPreview() {
  const metrics = [
    { 
      icon: DollarSign, 
      label: "Portfolio Value", 
      value: "$28,551.50", 
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    { 
      icon: TrendingUp, 
      label: "Monthly Dividends", 
      value: "$80.48", 
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    { 
      icon: Target, 
      label: "Dividend Yield", 
      value: "5.58%", 
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50"
    },
    { 
      icon: Clock, 
      label: "Yearly Dividends", 
      value: "$965.80", 
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const dividendHistory = [
    { month: "Jan", amount: 45 },
    { month: "Feb", amount: 32 },
    { month: "Mar", amount: 28 },
    { month: "Apr", amount: 78 },
    { month: "May", amount: 35 },
    { month: "Jun", amount: 42 },
    { month: "Jul", amount: 38 },
    { month: "Aug", amount: 41 }
  ];

  const sectorAllocation = [
    { name: "Real Estate Investment", percentage: 38.73, color: "bg-blue-500" },
    { name: "Consumer Discretionary", percentage: 30.51, color: "bg-green-500" },
    { name: "Technology", percentage: 24.14, color: "bg-orange-500" },
    { name: "Consumer Staples", percentage: 2.33, color: "bg-red-500" },
    { name: "Real Estate Finance", percentage: 1.98, color: "bg-purple-500" },
    { name: "Residential Housing", percentage: 1.77, color: "bg-indigo-500" },
    { name: "Real Estate Industry", percentage: 0.40, color: "bg-emerald-500" },
    { name: "Communication Services", percentage: 0.08, color: "bg-pink-500" },
    { name: "Industrials", percentage: 0.07, color: "bg-rose-500" }
  ];

  const investmentCards = [
    { 
      ticker: "TSLA", 
      change: "-2.12%", 
      shares: "16.5", 
      value: "$6,878.025", 
      trend: "Declining",
      positive: false,
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      borderColor: "border-red-200"
    },
    { 
      ticker: "SLG", 
      change: "+1.94%", 
      shares: "80", 
      value: "$5,042.4", 
      trend: "Gaining",
      positive: true,
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      borderColor: "border-green-200"
    },
    { 
      ticker: "AAPL", 
      change: "+3.45%", 
      shares: "25", 
      value: "$4,250.00", 
      trend: "Gaining",
      positive: true,
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      borderColor: "border-green-200"
    },
    { 
      ticker: "MSFT", 
      change: "-1.23%", 
      shares: "15", 
      value: "$5,100.00", 
      trend: "Declining",
      positive: false,
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      borderColor: "border-red-200"
    },
    { 
      ticker: "NVDA", 
      change: "+5.67%", 
      shares: "8", 
      value: "$3,200.00", 
      trend: "Gaining",
      positive: true,
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      borderColor: "border-green-200"
    },
    { 
      ticker: "GOOGL", 
      change: "-0.89%", 
      shares: "12", 
      value: "$1,800.00", 
      trend: "Declining",
      positive: false,
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      borderColor: "border-red-200"
    }
  ];

  const recentTransactions = [
    { type: "Dividend", asset: "AAPL", amount: "+$45.20", date: "2 hours ago", positive: true },
    { type: "Purchase", asset: "BTC", amount: "-$1,200.00", date: "1 day ago", positive: false },
    { type: "Dividend", asset: "MSFT", amount: "+$32.50", date: "3 days ago", positive: true },
    { type: "Sale", asset: "TSLA", amount: "+$2,450.00", date: "1 week ago", positive: true },
  ];

  return (
    <section className="py-0 relative overflow-hidden bg-black px-24">

      <div className="container-custom relative z-10 py-24">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8 border border-gray-200 bg-white/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Eye className="w-5 h-5 mr-2 text-blue-600" />
            <span className="text-white">Behind the scenes</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-8">
            The best{" "}
            <span className="bg-gradient-to-r from-purple-500 via-lime-400 to-white bg-clip-text text-transparent">
              portfolio insights
            </span>
            <br />
            at the spot
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get a comprehensive view of your portfolio with real-time data, 
            AI insights, and powerful analytics that actually work.
          </p>
        </motion.div>

        {/* Modern Glass Dashboard */}
        <motion.div
          variants={parallax}
          className="backdrop-blur-3xl bg-black/30 rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
          style={{boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)'}}
        >
          {/* Navigation Header */}
          <div className="bg-black/20 backdrop-blur-2xl px-8 py-4 border-b border-white/20">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <span className="text-xl font-bold text-white">2GRW</span>
              </div>

              {/* Navigation */}
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500 text-white">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-sm font-medium">Dashboard</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-full text-white hover:bg-white/10">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm font-medium">Portfolio</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-full text-white hover:bg-white/10">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm font-medium">My Secret</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-full text-white hover:bg-white/10">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm font-medium">Dev Tools</span>
                  </button>
                </div>

                {/* User Profile */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-yellow-500 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">Gustavo Girard</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-8 bg-gradient-to-br from-gray-50/50 to-white/50">
            {/* Welcome Section */}
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-12"
            >
              <h1 className="text-4xl font-bold text-white mb-2">Welcome back, Gustavo Girard!</h1>
              <p className="text-lg text-gray-300">Here&apos;s your portfolio overview</p>
            </motion.div>

            {/* Metrics Cards */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  variants={staggerItem}
                  whileHover="hover"
                  className="group"
                >
                  <motion.div 
                    variants={hoverLift}
                    className="backdrop-blur-2xl bg-black/30 hover:bg-black/40 p-6 rounded-2xl border border-white/20 transition-all duration-500 shadow-lg"
                    style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-black/30 backdrop-blur-2xl border border-white/20">
                        <metric.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-300 mb-2">{metric.label}</div>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Charts Section */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            >
              {/* Dividend History Chart */}
              <motion.div variants={staggerItem} className="backdrop-blur-2xl bg-black/30 p-8 rounded-2xl border border-white/20 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-2">Dividend History</h3>
                <p className="text-sm text-gray-300 mb-6">Click on any bar to see detailed dividend information for that month</p>
                
                <div className="h-64 flex items-end space-x-2">
                  {dividendHistory.map((item, index) => (
                    <motion.div
                      key={item.month}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(item.amount / 100) * 200}px` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-blue-500 rounded-t-lg flex-1 hover:bg-blue-600 transition-colors"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-sm text-gray-600">
                  {dividendHistory.map((item) => (
                    <span key={item.month}>{item.month}</span>
                  ))}
                </div>
              </motion.div>

              {/* Sector Allocation */}
              <motion.div variants={staggerItem} className="backdrop-blur-2xl bg-black/30 p-8 rounded-2xl border border-white/20 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-6">Sector Allocation</h3>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">100%</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {sectorAllocation.slice(0, 5).map((sector, index) => (
                    <div key={sector.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded ${sector.color}`}></div>
                        <span className="text-sm text-gray-300">{sector.name}</span>
                      </div>
                      <span className="text-sm font-medium text-white">{sector.percentage}%</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Investment Cards */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    Your Investments Visualized 🚀
                  </h3>
                  <p className="text-gray-300 mt-2">
                    Each card shows today&apos;s performance for stocks in your portfolio. The color represents today&apos;s return.
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-black/30 backdrop-blur-2xl text-white rounded-lg border border-white/20 hover:bg-black/40 transition-colors">
                    <RefreshCw className="w-4 h-4" />
                    <span className="text-sm font-medium">Refresh</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-black/30 backdrop-blur-2xl text-white rounded-lg border border-white/20 hover:bg-black/40 transition-colors">
                    <Grid3X3 className="w-4 h-4" />
                    <span className="text-sm font-medium">Grid</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-black/30 backdrop-blur-2xl text-white rounded-lg border border-white/20 hover:bg-black/40 transition-colors">
                    <List className="w-4 h-4" />
                    <span className="text-sm font-medium">List</span>
                  </button>
                </div>
              </div>
              
              <div className="text-sm text-gray-400 flex items-center mb-6">
                <Clock className="w-4 h-4 mr-2" />
                Last updated: 9/19/2025, 12:10:11 AM
              </div>

              {/* Investment Cards Grid */}
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {investmentCards.map((investment, index) => (
                  <motion.div
                    key={investment.ticker}
                    variants={staggerItem}
                    whileHover="hover"
                    className="group"
                  >
                    <motion.div 
                      variants={hoverLift}
                      className="backdrop-blur-2xl bg-black/30 hover:bg-black/40 p-6 rounded-2xl border border-white/20 transition-all duration-500 shadow-lg"
                      style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'}}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-white">
                          {investment.ticker}
                        </h4>
                        <span className={`text-lg font-bold ${investment.positive ? 'text-green-400' : 'text-red-400'}`}>
                          {investment.change}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-300">
                            Shares:
                          </span>
                          <span className="text-sm font-semibold text-white">
                            {investment.shares}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-300">
                            Value:
                          </span>
                          <span className="text-sm font-semibold text-white">
                            {investment.value}
                          </span>
                        </div>
                      </div>

                      {/* Trend Indicator */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {investment.positive ? (
                            <TrendingUp className="w-4 h-4 text-green-400" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-400" />
                          )}
                          <span className="text-sm font-medium text-white">
                            {investment.trend}
                          </span>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${
                          investment.positive ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}