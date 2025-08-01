'use client'
import { useState } from 'react';
import { User, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebaseConfig';
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  const handleSignUp = async () => {
    setError('');
    
    if (password.length < 6) {
      setError('Password should be at least 6 characters long');
      return;
    }
    
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res && res.user) {
      console.log({ res });
      setEmail('');
      setPassword('');
      router.push('/dashboard')
      }
    } catch (e) {
      console.error(e);
      if (e.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters long');
      } else if (e.code === 'auth/email-already-in-use') {
        setError('Email is already registered');
      } else if (e.code === 'auth/invalid-email') {
        setError('Please enter a valid email address');
      } else {
        setError('Failed to create account. Please try again.');
      }
    }
  };

  const handleGoogleSignUp = async () => {
    setError('');
    try {
      const res = await signInWithGoogle();
      router.push('/dashboard');
      console.log(res)
    } catch (e) {
      console.error(e);
      setError('Failed to sign up with Google. Please try again.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-600">Join NEETPulse to start your college journey</p>
          </div>

          <div className="mt-8 space-y-6">
            {(error || googleError) && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-sm text-red-600">{error || googleError?.message}</p>
              </div>
            )}
            <div>
              <button
                type="button"
                onClick={handleGoogleSignUp}
                disabled={googleLoading}
                className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors disabled:opacity-50"
              >
                {googleLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </>
                )}
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">Or continue with email</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <p className="text-xs text-gray-500 mb-2">Password must be at least 6 characters long</p>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleSignUp}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
              >
                Create Account
              </button>
            </div>

            <div className="text-center">
              <span className="text-gray-600">Already have an account? </span>
              <a href="/auth/login" className="font-medium text-black hover:text-gray-800 transition-colors">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;