import React, { useState } from 'react';
import { 
  Wallet, 
  PlusCircle, 
  LayoutDashboard, 
  Receipt, 
  LogIn, 
  Menu, 
  X 
} from 'lucide-react';
import { NavLink } from 'react-router';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-slate-900 border-b w-full border-slate-800 text-white sticky top-0 z-50 shadow-md">
      <div className=" md:w-10/12 w-full md:mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 1. LOGO & BRAND NAME */}
          <NavLink to={'/'}>
            <div className="flex items-center space-x-3 cursor-pointer">
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
              <Wallet className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              SpendSmart
            </span>
          </div>
          </NavLink>

          {/* 2. DESKTOP NavLinkS (Hidden on mobile devices) */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            
            {/* Add Money NavLink */}
            <NavLink  to={'/addMoney'}
              onClick={() => console.log('Add Money Clicked')}
              className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-4 py-2 rounded-lg transition-all shadow-lg shadow-emerald-500/10 active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add Money</span>
            </NavLink>

            {/* Dashboard NavLink */}
            <NavLink to={'/dashboard'}
              onClick={() => console.log('Dashboard Clicked')}
              className="flex items-center space-x-2 text-slate-300 hover:text-white hover:bg-slate-800 px-3.5 py-2 rounded-lg transition-colors font-medium"
            >
              <LayoutDashboard className="w-4 h-4 text-emerald-400" />
              <span>Dashboard</span>
            </NavLink>

            {/* Daily Expense NavLink */}
            <NavLink to={'dailyExpense'}
              onClick={() => console.log('Daily Expense Clicked')}
              className="flex items-center space-x-2 text-slate-300 hover:text-white hover:bg-slate-800 px-3.5 py-2 rounded-lg transition-colors font-medium"
            >
              <Receipt className="w-4 h-4 text-amber-400" />
              <span>Daily Expense</span>
            </NavLink>

            {/* Login NavLink */}
            <NavLink  to={"/login"}
              
              className="flex items-center space-x-2 text-slate-300 hover:text-white bg-slate-800 border border-slate-700 hover:border-slate-600 px-4 py-2 rounded-lg transition-all font-medium"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
              
            </NavLink >
          </div>

          {/* 3. MOBILE HAMBURGER NavLink */}
          <div className="flex items-center md:hidden">
            <NavLink
              onClick={toggleMobileMenu}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-200" />
              ) : (
                <Menu className="w-6 h-6 text-slate-200" />
              )}
            </NavLink>
          </div>

        </div>
      </div>

      {/* 4. MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-md px-4 pt-3 pb-4 space-y-2">
          
          <NavLink  to={'/addMoney'}
            onClick={() => { console.log('Add Money Mobile'); setIsMobileMenuOpen(false); }}
            className="w-full flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-4 py-2.5 rounded-lg transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Money</span>
          </NavLink>

          <NavLink  to={'/dashboard'}
            onClick={() => { console.log('Dashboard Mobile'); setIsMobileMenuOpen(false); }}
            className="w-full flex items-center space-x-3 text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2.5 rounded-lg transition-colors font-medium"
          >
            <LayoutDashboard className="w-5 h-5 text-emerald-400" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to={'/dailyExpense'}
            onClick={() => { console.log('Daily Expense Mobile'); setIsMobileMenuOpen(false); }}
            className="w-full flex items-center space-x-3 text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2.5 rounded-lg transition-colors font-medium"
          >
            <Receipt className="w-5 h-5 text-amber-400" />
            <span>Daily Expense</span>
          </NavLink>

          <NavLink to={'/login'}
            onClick={() => { setIsMobileMenuOpen(false); }}
            className="w-full flex items-center justify-center space-x-2 text-slate-300 hover:text-white bg-slate-800 border border-slate-700 px-4 py-2.5 rounded-lg transition-all font-medium"
          >
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </NavLink>

        </div>
      )}
    </nav>
  );
}