import React, { useContext, useState } from 'react';
import { Wallet } from 'lucide-react';
import { AuthContext } from '../../component/context/AuthContext';
import { useNavigate, useLocation } from 'react-router'; // 1. Import useNavigate and useLocation
import { toast } from 'react-toastify';

const Login = () => {
    const { createUserWithGoogle } = useContext(AuthContext);
    const [errore, setErrore] = useState('');
    
    // 2. Initialize hooks
    const navigate = useNavigate();
    const location = useLocation();

    const handleUserWithGoogle = () => {
        setErrore("");
        createUserWithGoogle()
            .then(() => {
                toast.success("LogIn successfully!");
                
                // 3. Use navigate function instead of Navigate component
                const destination = location?.state?.from?.pathname || "/";
                navigate(destination, { replace: true });
            })
            .catch((error) => {
                setErrore(error.message);
                toast.error(error.message); // Fixed to show the actual error message
            });
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-center">
                
                {/* App Branding Icon */}
                <div className="mx-auto w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6">
                    <Wallet className="w-6 h-6" />
                </div>

                {/* Header Titles */}
                <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
                    Welcome to SpendSmart
                </h2>
                <p className="text-sm text-slate-400 mb-8">
                    Sign in securely with your Google account to manage your expenses.
                </p>

                {/* Google Sign-In Button */}
                <button
                    onClick={handleUserWithGoogle}
                    className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 font-semibold py-3 px-4 rounded-xl transition-all shadow-md active:scale-95 group cursor-pointer"
                >
                    {/* Official Google G Logo SVG */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                            fill="#4285F4"
                            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.18v3.15C3.15 21.3 7.22 24 12 24z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.6H1.18C.43 8.12 0 9.82 0 12s.43 3.88 1.18 5.4l4.09-3.16z"
                        />
                        <path
                            fill="#EA4335"
                            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.22 0 3.15 2.7 1.18 6.6l4.09 3.15c.95-2.85 3.6-4.96 6.73-4.96z"
                        />
                    </svg>
                    <span>Continue with Google</span>
                </button>

                {/* Error message display if needed */}
                {errore && (
                    <p className="text-xs text-rose-400 mt-4">{errore}</p>
                )}

                {/* Footer Policy Note */}
                <p className="text-xs text-slate-500 mt-6">
                    By signing in, you agree to our Terms of Service and Privacy Policy.
                </p>

            </div>
        </div>
    );
};

export default Login;