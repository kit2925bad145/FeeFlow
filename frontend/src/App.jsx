import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { 
  GraduationCap, ArrowRight, UserCircle, ShieldCheck, CheckCircle2, 
  BarChart3, Users, Clock, Mail, Phone, MapPin, Search, Edit2, Check, 
  X, FileText, CreditCard, QrCode, Home as HomeIcon, Receipt, History, 
  UserPlus, Download, LogOut, Settings, LayoutDashboard, PlusCircle, Trash2
} from 'lucide-react';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-x-hidden font-sans text-gray-800">
      
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-[#0f172a] italic tracking-tight">FeeFlow</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 font-semibold transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 font-semibold transition-colors">How it Works</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-semibold transition-colors">About Us</a>
            </div>
            <button 
              onClick={() => navigate('/login')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-colors shadow-lg shadow-blue-500/30"
            >
              Login Portal
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#e0efff] via-[#f0f7ff] to-[#d6eaff] relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/40 blur-3xl z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center pt-10">
          <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] tracking-tight mb-6 leading-tight">
            The Smartest Way to Manage <br/> <span className="text-blue-600 italic">School Fees</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
            FeeFlow digitizes your entire fee collection process. Automate reminders, track pending dues instantly, and provide a seamless payment experience for parents and students.
          </p>
          <div className="flex justify-center space-x-4">
            <button onClick={() => navigate('/login')} className="group flex items-center py-4 px-8 text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all shadow-xl shadow-blue-500/30">
              Get Started Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-500/50">
            <div>
              <div className="text-4xl font-black text-white mb-2">50+</div>
              <div className="text-blue-200 font-medium text-sm uppercase tracking-wider">Schools Trust Us</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">10k+</div>
              <div className="text-blue-200 font-medium text-sm uppercase tracking-wider">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">100%</div>
              <div className="text-blue-200 font-medium text-sm uppercase tracking-wider">Data Security</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">24/7</div>
              <div className="text-blue-200 font-medium text-sm uppercase tracking-wider">Dedicated Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Why Choose FeeFlow</h2>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-16">Everything you need to run your institution financially.</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all">
              <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-blue-600 w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Admin Dashboard</h4>
              <p className="text-gray-600 leading-relaxed">Complete control over fee structures, student database, and access management all from a secure centralized dashboard.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all">
              <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="text-green-600 w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Instant Reporting</h4>
              <p className="text-gray-600 leading-relaxed">Generate instant financial reports, track daily collections, and find overdue payments in a matter of seconds.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all">
              <div className="bg-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="text-purple-600 w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Automated Reminders</h4>
              <p className="text-gray-600 leading-relaxed">Never chase payments manually again. The system automatically notifies students and parents before due dates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-[#0f172a] text-gray-300 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="text-white w-8 h-8" />
              <span className="text-2xl font-black text-white italic tracking-tight">FeeFlow</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering educational institutions with modern, secure, and lightning-fast financial management tools.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a onClick={() => navigate('/login')} className="hover:text-blue-400 transition-colors cursor-pointer">Login Portal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-gray-500 shrink-0" />
                <span>123 Education Hub, Tech Park, Chennai 600001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gray-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Login({ students }) {
  const [activeTab, setActiveTab] = useState('student');
  const navigate = useNavigate();
  
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleStudentLogin = (e) => {
    e.preventDefault();
    setError('');
    
    const student = students.find(s => s.regNo === regNo);
    
    if (student) {
      const serialNumber = student.regNo.slice(-3);
      const expectedPassword = student.name.replace(/\s+/g, '').toLowerCase() + serialNumber;
      
      if (password === expectedPassword) {
        navigate('/dashboard', { state: { role: 'student', user: student } });
      } else {
        setError('Incorrect Password! Please try again.');
      }
    } else {
      setError('Invalid Register Number! Please check your ID.');
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard', { state: { role: 'admin', user: { name: 'Senthil' } } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0efff] via-[#f0f7ff] to-[#d6eaff] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/40 blur-3xl"></div>
      
      <div className="absolute top-6 left-6 flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
        <div className="bg-blue-600 p-2 rounded-lg">
          <GraduationCap className="text-white w-8 h-8" />
        </div>
        <div className="flex flex-col hidden sm:flex">
          <span className="text-2xl font-black text-[#0f172a] italic tracking-tight">FeeFlow</span>
        </div>
      </div>
      
      <div className="absolute top-6 right-6">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center px-4 py-2 bg-white/60 hover:bg-white text-gray-700 font-bold rounded-full shadow-sm transition-all border border-gray-200/50"
        >
          <HomeIcon className="w-4 h-4 mr-2" /> Back to Home
        </button>
      </div>

      <div className="max-w-md w-full space-y-6 p-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white relative z-10 mt-10">
        
        <div className="flex flex-col items-center pt-2">
          <h2 className="text-3xl font-black text-blue-600 tracking-tight">Login Portal</h2>
        </div>

        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button 
            onClick={() => setActiveTab('student')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg flex items-center justify-center transition-all ${activeTab === 'student' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <UserCircle className="w-5 h-5 mr-2" /> Student
          </button>
          <button 
            onClick={() => setActiveTab('admin')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg flex items-center justify-center transition-all ${activeTab === 'admin' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <ShieldCheck className="w-5 h-5 mr-2" /> Admin
          </button>
        </div>

        {activeTab === 'student' ? (
          <form className="mt-6 space-y-5" onSubmit={handleStudentLogin}>
            {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl text-center border border-red-100">{error}</div>}
            <div className="space-y-4 mt-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <UserCircle className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" required value={regNo} onChange={(e) => setRegNo(e.target.value)}
                  className="appearance-none block w-full pl-11 pr-4 py-3.5 border border-gray-200 bg-gray-50/50 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                  placeholder="Register Number (e.g. 11067)" 
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <input 
                  type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full pl-11 pr-4 py-3.5 border border-gray-200 bg-gray-50/50 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                  placeholder="Password" 
                />
              </div>
            </div>
            <div className="pt-4">
              <button type="submit" className="group w-full flex justify-center items-center py-3.5 px-4 text-sm font-bold text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-all shadow-lg shadow-blue-500/30">
                SIGN IN AS STUDENT
              </button>
            </div>
          </form>
        ) : (
          <form className="mt-6 space-y-5" onSubmit={handleAdminLogin}>
            <div className="space-y-4">
              <input type="email" required defaultValue="senthil@feeflow.com" className="w-full px-4 py-3.5 border border-gray-200 bg-gray-50/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Admin Email" />
              <input type="password" required defaultValue="admin123" className="w-full px-4 py-3.5 border border-gray-200 bg-gray-50/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Password" />
            </div>
            <div className="pt-2">
              <button type="submit" className="w-full py-3.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-full transition-all shadow-lg shadow-slate-900/30">
                ADMIN SIGN IN
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Dashboard({ students, setStudents }) {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};
  const { role, user } = state;

  const [paymentModal, setPaymentModal] = useState({ open: false, fee: null, status: 'scan' }); 
  
  // Admin Sidebar State
  const [activeAdminTab, setActiveAdminTab] = useState('overview');

  // Modals for Admin
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addGlobalFeeModal, setAddGlobalFeeModal] = useState(false);
  const [newStudent, setNewStudent] = useState({ regNo: '', name: '', std: '6th Std' });
  const [editingStudent, setEditingStudent] = useState(null);
  const [globalFee, setGlobalFee] = useState({ name: '', amount: '', targetStd: 'All' });
  const [searchQuery, setSearchQuery] = useState('');
  
  // Classes and Sections Data
  const [classesData, setClassesData] = useState([]);
  const [newClass, setNewClass] = useState({ className: '' });

  useEffect(() => {
    if (role === 'admin' && activeAdminTab === 'classes') {
      axios.get('http://localhost:8080/api/classes')
        .then(res => setClassesData(res.data))
        .catch(err => console.error('Failed to fetch classes:', err));
    }
  }, [role, activeAdminTab]);

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (!newClass.className) return;
    try {
      const res = await axios.post('http://localhost:8080/api/classes', { className: newClass.className });
      setClassesData([...classesData, res.data]);
      setNewClass({ className: '' });
    } catch (err) {
      console.error('Failed to add class:', err);
    }
  };
  
  // Dashboard Analytics Data
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    if (role === 'admin') {
      axios.get('http://localhost:8080/api/admin/dashboard')
        .then(res => setDashboardData(res.data))
        .catch(err => console.error('Failed to fetch dashboard data:', err));
    }
  }, [role]);

  if (!role || !user) {
    return <Navigate to="/login" replace />;
  }

  const standardsList = ['6th Std', '7th Std', '8th Std', '9th Std', '10th Std', '11th Std', '12th Std'];

  // PDF Generation function (Bill)
  const generateBillPDF = (studentData, txn) => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.setTextColor(37, 99, 235);
    doc.text('FeeFlow School', 105, 20, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('123 Education Hub, Tech Park, Chennai 600001 | Phone: +91 98765 43210', 105, 27, { align: 'center' });
    
    doc.line(20, 32, 190, 32);
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Payment Receipt', 105, 42, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Receipt No: ${txn.id}`, 20, 55);
    doc.text(`Date: ${txn.date}`, 140, 55);
    
    doc.text(`Student Name: ${studentData.name}`, 20, 65);
    doc.text(`Register No: ${studentData.regNo}`, 140, 65);
    doc.text(`Standard: ${studentData.std}`, 20, 75);
    
    autoTable(doc, {
      startY: 85,
      head: [['Sl No', 'Fee Description', 'Amount Paid']],
      body: [
        ['1', txn.purpose, `Rs. ${txn.amount.toLocaleString()}`],
        ['', { content: 'Total Amount', styles: { fontStyle: 'bold', halign: 'right' } }, { content: `Rs. ${txn.amount.toLocaleString()}`, styles: { fontStyle: 'bold' } }],
      ],
      theme: 'grid',
      headStyles: { fillColor: [37, 99, 235] },
    });
    
    doc.setFontSize(10);
    doc.text('This is a computer generated receipt and does not require a physical signature.', 105, doc.lastAutoTable ? doc.lastAutoTable.finalY + 30 : 150, { align: 'center' });
    
    doc.save(`Receipt_${txn.id}_${studentData.regNo}.pdf`);
  };

  // --- ADMIN DASHBOARD ---
  if (role === 'admin') {
    const totalStudents = students.length;
    const fullyPaid = students.filter(s => s.fees.every(f => f.amount === f.paid)).length;
    const pending = totalStudents - fullyPaid;

    const handleImportStudents = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://localhost:8080/api/students/import", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            alert(response.data.message);
            // Optionally, refresh students list here if we implement fetch logic
        } catch (error) {
            console.error("Error importing students:", error);
            alert("Failed to import students. Check console for details.");
        }
        e.target.value = ""; // Reset input
    };

    const handleAddStudentSubmit = (e) => {
      e.preventDefault();
      const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
      const newS = {
        id: newId,
        regNo: newStudent.regNo,
        name: newStudent.name,
        std: newStudent.std,
        fees: [
          { id: 'f1', name: 'First Term Fee', amount: 10000, paid: 0 },
          { id: 'f2', name: 'Second Term Fee', amount: 10000, paid: 0 }
        ],
        paymentHistory: []
      };
      setStudents([...students, newS]);
      setAddModalOpen(false);
      setNewStudent({ regNo: '', name: '', std: '6th Std' });
    };

    const handleEditSubmit = (e) => {
      e.preventDefault();
      setStudents(students.map(s => s.id === editingStudent.id ? editingStudent : s));
      setEditModalOpen(false);
    };

    const handleAddGlobalFee = (e) => {
      e.preventDefault();
      const newFeeAmount = Number(globalFee.amount);
      if (newFeeAmount <= 0) return;

      const updatedStudents = students.map(s => {
        if (globalFee.targetStd === 'All' || globalFee.targetStd === s.std) {
          const newFeeId = 'gf' + Date.now();
          return {
            ...s,
            fees: [...s.fees, { id: newFeeId, name: globalFee.name, amount: newFeeAmount, paid: 0 }]
          };
        }
        return s;
      });
      setStudents(updatedStudents);
      setAddGlobalFeeModal(false);
      setGlobalFee({ name: '', amount: '', targetStd: 'All' });
    };

    return (
      <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex">
        
        {/* Sidebar Navigation */}
        <aside className="w-72 bg-white border-r border-gray-200 fixed h-full flex flex-col z-10 shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <span className="font-black text-2xl text-gray-900 italic tracking-tight">FeeFlow</span>
            </div>
            <div className="mt-4 px-3 py-1.5 bg-blue-50 text-blue-800 text-xs font-bold rounded-lg inline-flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1" /> Admin Panel
            </div>
          </div>
          
          <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <button 
              onClick={() => setActiveAdminTab('overview')}
              className={`w-full flex items-center px-4 py-3.5 rounded-xl font-bold transition-all ${activeAdminTab === 'overview' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <LayoutDashboard className="w-5 h-5 mr-3" /> Dashboard
            </button>
            <button 
              onClick={() => setActiveAdminTab('students')}
              className={`w-full flex items-center px-4 py-3.5 rounded-xl font-bold transition-all ${activeAdminTab === 'students' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Users className="w-5 h-5 mr-3" /> Manage Students
            </button>
            <button 
              onClick={() => setActiveAdminTab('fees')}
              className={`w-full flex items-center px-4 py-3.5 rounded-xl font-bold transition-all ${activeAdminTab === 'fees' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Receipt className="w-5 h-5 mr-3" /> Manage Fees
            </button>
            <button 
              onClick={() => setActiveAdminTab('classes')}
              className={`w-full flex items-center px-4 py-3.5 rounded-xl font-bold transition-all ${activeAdminTab === 'classes' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <GraduationCap className="w-5 h-5 mr-3" /> Manage Classes
            </button>
          </div>

          <div className="p-4 border-t border-gray-200">
            {/* Box styled logout button */}
            <button 
              onClick={() => navigate('/login')} 
              className="w-full flex items-center justify-center px-4 py-3 border-2 border-red-100 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-bold transition-all group"
            >
              <LogOut className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Logout
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="ml-72 flex-1 p-8">
          
          <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div>
              <h1 className="text-2xl font-black text-gray-900 capitalize">{activeAdminTab.replace('-', ' ')}</h1>
              <p className="text-gray-500 text-sm mt-1">FeeFlow School Management System</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm font-bold text-gray-600 bg-gray-100 px-4 py-2 rounded-full">Hello, Senthil</span>
            </div>
          </div>

          {activeAdminTab === 'overview' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4 rounded-xl mr-4"><Users className="w-8 h-8 text-blue-600" /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Students</p>
                    <h3 className="text-3xl font-black text-gray-900">{dashboardData ? dashboardData.totalStudents : totalStudents}</h3>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center hover:shadow-md transition-shadow">
                  <div className="bg-green-100 p-4 rounded-xl mr-4"><CheckCircle2 className="w-8 h-8 text-green-600" /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Today's Collection</p>
                    <h3 className="text-3xl font-black text-green-600">₹{dashboardData ? (dashboardData.todaysCollection || 0).toLocaleString() : 0}</h3>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center hover:shadow-md transition-shadow">
                  <div className="bg-orange-100 p-4 rounded-xl mr-4"><Clock className="w-8 h-8 text-orange-600" /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Pending Dues</p>
                    <h3 className="text-3xl font-black text-orange-600">₹{dashboardData ? (dashboardData.overdueAmount || 0).toLocaleString() : pending}</h3>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center hover:shadow-md transition-shadow">
                  <div className="bg-purple-100 p-4 rounded-xl mr-4"><CreditCard className="w-8 h-8 text-purple-600" /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">This Month Revenue</p>
                    <h3 className="text-3xl font-black text-purple-600">
                      ₹{dashboardData ? (dashboardData.thisMonthsCollection || 0).toLocaleString() : 0}
                    </h3>
                  </div>
                </div>
              </div>

              {dashboardData && dashboardData.monthlyCollectionTrend && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Monthly Collection Trend</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={Object.entries(dashboardData.monthlyCollectionTrend).map(([k, v]) => ({ name: k, amount: v }))}>
                        <defs>
                          <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} tickFormatter={(v) => `₹${v/1000}k`} />
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                        <Tooltip 
                          contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                          formatter={(value) => [`₹${value.toLocaleString()}`, 'Collection']}
                        />
                        <Area type="monotone" dataKey="amount" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorAmount)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* Recent Transactions List */}
              <div className="bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden mb-8">
                <div className="px-6 py-5 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                  <h2 className="text-lg font-bold text-gray-900">Recent Transactions</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {(() => {
                     // Collect all transactions from all students
                     let allTxns = [];
                     students.forEach(s => {
                       s.paymentHistory.forEach(tx => {
                         allTxns.push({ ...tx, studentName: s.name, std: s.std });
                       });
                     });
                     // Sort by date descending
                     allTxns.sort((a, b) => new Date(b.date) - new Date(a.date));
                     
                     if (allTxns.length === 0) {
                        return <div className="p-8 text-center text-gray-500 font-medium">No recent transactions found.</div>
                     }

                     return allTxns.slice(0, 5).map((tx, idx) => (
                       <div key={idx} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                         <div className="flex items-center space-x-4">
                           <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-black text-xl shadow-sm">
                             {tx.studentName.charAt(0)}
                           </div>
                           <div>
                             <h4 className="font-bold text-gray-900">{tx.studentName} <span className="text-gray-400 text-xs font-bold ml-1 bg-gray-100 px-2 py-0.5 rounded">{tx.std}</span></h4>
                             <p className="text-sm text-gray-500 mt-0.5 font-medium">{tx.purpose} <span className="mx-1">•</span> <span className="text-gray-400">{tx.id}</span></p>
                           </div>
                         </div>
                         <div className="text-right">
                           <div className="font-black text-green-600 text-lg">+₹{tx.amount.toLocaleString()}</div>
                           <div className="text-xs text-gray-400 font-bold mt-1 uppercase tracking-wider">{tx.date}</div>
                         </div>
                       </div>
                     ));
                  })()}
                </div>
              </div>
            </>
          )}

          {activeAdminTab === 'students' && (
            <div className="bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden mb-12">
              <div className="px-6 py-5 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Student Directory</h2>
                <div className="flex space-x-2">
                  <label className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-colors flex items-center shadow-sm cursor-pointer">
                    <UserPlus className="w-4 h-4 mr-2" /> Import Excel
                    <input type="file" accept=".xlsx, .xls" onChange={handleImportStudents} className="hidden" />
                  </label>
                  <button onClick={() => setAddModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-colors flex items-center shadow-sm">
                    <UserPlus className="w-4 h-4 mr-2" /> Add New Student
                  </button>
                </div>
              </div>
              <div className="px-6 py-4 border-b border-gray-200 bg-white">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by Name, Register Number, or Standard..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Reg No</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Student Details</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Total Fees</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students.filter(s => {
                      const lowerQuery = searchQuery.toLowerCase();
                      return s.name.toLowerCase().includes(lowerQuery) || 
                             s.regNo.toLowerCase().includes(lowerQuery) || 
                             s.std.toLowerCase().includes(lowerQuery);
                    }).map((student) => {
                      const totalFees = student.fees.reduce((acc, f) => acc + f.amount, 0);
                      const paidFees = student.fees.reduce((acc, f) => acc + f.paid, 0);
                      const isFullyPaid = totalFees > 0 && totalFees === paidFees;
                      return (
                        <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap"><span className="text-sm font-bold text-gray-900">{student.regNo}</span></td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-bold text-gray-900">{student.name}</div>
                            <div className="text-xs text-gray-500 bg-gray-100 inline-block px-2 py-0.5 rounded mt-1">{student.std}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">₹{totalFees.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 inline-flex text-xs font-bold rounded-full ${isFullyPaid ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                              {isFullyPaid ? 'Fully Paid' : 'Pending'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <button onClick={() => { setEditingStudent({...student}); setEditModalOpen(true); }} className="text-blue-600 hover:text-blue-900 bg-blue-50 p-2 rounded-lg inline-flex transition-colors">
                              <Edit2 className="w-4 h-4" /> <span className="ml-2 text-xs font-bold">Edit</span>
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeAdminTab === 'fees' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <PlusCircle className="text-blue-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Add Global Fee</h3>
                <p className="text-gray-500 mb-6 text-sm">Assign a new fee category to all students or students of a specific standard instantly.</p>
                <button onClick={() => setAddGlobalFeeModal(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-blue-500/20">
                  Create New Fee Rule
                </button>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Edit2 className="text-purple-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Edit Individual Fees</h3>
                <p className="text-gray-500 mb-6 text-sm">To modify or add fees for a specific student, please go to 'Manage Students' and click Edit.</p>
                <button onClick={() => setActiveAdminTab('students')} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-xl transition-all">
                  Go to Manage Students
                </button>
              </div>
            </div>
          )}


          {activeAdminTab === 'classes' && (
            <div className="bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden mb-12">
              <div className="px-6 py-5 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Manage Classes & Sections</h2>
              </div>
              <div className="p-6">
                <form onSubmit={handleAddClass} className="flex space-x-4 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="flex-1">
                    <label className="block text-sm font-bold text-gray-700 mb-1">New Class Name</label>
                    <input type="text" required value={newClass.className} onChange={e => setNewClass({className: e.target.value})} className="w-full bg-white border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 1st Std, Kindergarten" />
                  </div>
                  <div className="flex items-end">
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all h-[46px]">Add Class</button>
                  </div>
                </form>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {classesData.map((cls) => (
                    <div key={cls.classId} className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors shadow-sm">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-xl text-gray-800">{cls.className}</h3>
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">Active</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">Class ID: {cls.classId}</p>
                      <button className="text-sm font-bold text-blue-600 hover:text-blue-800">Manage Sections →</button>
                    </div>
                  ))}
                  {classesData.length === 0 && (
                     <div className="col-span-full text-center py-8 text-gray-500">No classes found. Add your first class above.</div>
                  )}
                </div>
              </div>
            </div>
          )}

        </main>

        {/* Admin Modals */}

        {/* Add Student Modal */}
        {addModalOpen && (
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-2xl text-gray-900">Add Student</h3>
                <button onClick={() => setAddModalOpen(false)} className="bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-gray-200"><X className="w-5 h-5"/></button>
              </div>
              <form onSubmit={handleAddStudentSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Register Number</label>
                  <input type="text" required value={newStudent.regNo} onChange={e => setNewStudent({...newStudent, regNo: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="e.g. 06123" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Student Name</label>
                  <input type="text" required value={newStudent.name} onChange={e => setNewStudent({...newStudent, name: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="e.g. Arun Kumar" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Standard</label>
                  <select value={newStudent.std} onChange={e => setNewStudent({...newStudent, std: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all">
                    {standardsList.map(std => <option key={std} value={std}>{std}</option>)}
                  </select>
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">Create Profile</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Edit Student Modal */}
        {editModalOpen && editingStudent && (
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative p-8 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-2xl text-gray-900">Edit Student</h3>
                <button onClick={() => setEditModalOpen(false)} className="bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-gray-200"><X className="w-5 h-5"/></button>
              </div>
              <form onSubmit={handleEditSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Register Number</label>
                    <input type="text" required value={editingStudent.regNo} onChange={e => setEditingStudent({...editingStudent, regNo: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Standard</label>
                    <select value={editingStudent.std} onChange={e => setEditingStudent({...editingStudent, std: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                      {standardsList.map(std => <option key={std} value={std}>{std}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Student Name</label>
                  <input type="text" required value={editingStudent.name} onChange={e => setEditingStudent({...editingStudent, name: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
                
                <h4 className="font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2 text-lg">Fee Structure</h4>
                <div className="space-y-3">
                  {editingStudent.fees.map((fee, idx) => (
                    <div key={fee.id} className="grid grid-cols-12 gap-3 items-center bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                      <div className="col-span-5">
                        <label className="text-xs font-bold text-gray-400 block mb-1 uppercase">Fee Name</label>
                        <input type="text" value={fee.name} onChange={e => {
                          const newFees = [...editingStudent.fees];
                          newFees[idx].name = e.target.value;
                          setEditingStudent({...editingStudent, fees: newFees});
                        }} className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:border-blue-500 focus:outline-none" />
                      </div>
                      <div className="col-span-3">
                        <label className="text-xs font-bold text-gray-400 block mb-1 uppercase">Total (₹)</label>
                        <input type="number" value={fee.amount} onChange={e => {
                          const newFees = [...editingStudent.fees];
                          newFees[idx].amount = Number(e.target.value);
                          setEditingStudent({...editingStudent, fees: newFees});
                        }} className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:border-blue-500 focus:outline-none" />
                      </div>
                      <div className="col-span-3">
                        <label className="text-xs font-bold text-green-600 block mb-1 uppercase">Paid (₹)</label>
                        <input type="number" value={fee.paid} onChange={e => {
                          const newFees = [...editingStudent.fees];
                          newFees[idx].paid = Number(e.target.value);
                          setEditingStudent({...editingStudent, fees: newFees});
                        }} className="w-full border border-green-300 bg-green-50 rounded-lg p-2 text-sm focus:border-green-500 focus:outline-none font-bold" />
                      </div>
                      <div className="col-span-1 flex justify-center mt-5">
                         <button type="button" onClick={() => {
                           const newFees = editingStudent.fees.filter(f => f.id !== fee.id);
                           setEditingStudent({...editingStudent, fees: newFees});
                         }} className="text-gray-400 hover:text-red-600 bg-gray-100 hover:bg-red-50 p-2 rounded-lg transition-colors"><Trash2 className="w-4 h-4"/></button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button type="button" onClick={() => {
                  const newFee = { id: 'f' + Date.now(), name: 'New Fee', amount: 0, paid: 0 };
                  setEditingStudent({...editingStudent, fees: [...editingStudent.fees, newFee]});
                }} className="mt-4 flex items-center text-blue-600 text-sm font-bold hover:text-blue-800 transition-colors bg-blue-50 px-4 py-2 rounded-lg w-max">
                  <PlusCircle className="w-4 h-4 mr-2" /> Add Custom Fee Row
                </button>

                <div className="pt-8 flex space-x-4">
                  <button type="button" onClick={() => setEditModalOpen(false)} className="flex-1 bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors">Cancel</button>
                  <button type="submit" className="flex-1 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Global Fee Modal */}
        {addGlobalFeeModal && (
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-2xl text-gray-900">Add Global Fee</h3>
                <button onClick={() => setAddGlobalFeeModal(false)} className="bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-gray-200"><X className="w-5 h-5"/></button>
              </div>
              <form onSubmit={handleAddGlobalFee} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Fee Description</label>
                  <input type="text" required value={globalFee.name} onChange={e => setGlobalFee({...globalFee, name: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g. Annual Tour Fee" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Amount (₹)</label>
                  <input type="number" required value={globalFee.amount} onChange={e => setGlobalFee({...globalFee, amount: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g. 5000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Target Audience</label>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      type="button"
                      onClick={() => setGlobalFee({...globalFee, targetStd: 'All'})}
                      className={`px-4 py-2 rounded-xl text-sm font-bold border transition-colors ${globalFee.targetStd === 'All' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                    >
                      All Students
                    </button>
                    {standardsList.map(std => (
                      <button
                        key={std}
                        type="button"
                        onClick={() => setGlobalFee({...globalFee, targetStd: std})}
                        className={`px-4 py-2 rounded-xl text-sm font-bold border transition-colors ${globalFee.targetStd === std ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                      >
                        Only {std}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">Apply to Students</button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    );
  }

  // --- STUDENT DASHBOARD ---
  const student = students.find(s => s.regNo === user.regNo);
  const totalFeesAmount = student.fees.reduce((acc, f) => acc + f.amount, 0);
  const totalPaidAmount = student.fees.reduce((acc, f) => acc + f.paid, 0);
  const dueAmount = totalFeesAmount - totalPaidAmount;

  const handlePayClick = (fee) => {
    setPaymentModal({ open: true, fee, status: 'scan' });
  };

  const handleRazorpayPayment = async () => {
    const feeToUpdate = paymentModal.fee;
    const amountToPay = feeToUpdate.amount - feeToUpdate.paid;
    setPaymentModal(prev => ({ ...prev, status: 'processing' }));

    try {
      // 1. Create order on backend
      const { data: order } = await axios.post('http://localhost:8080/api/payments/create-order', {
        amount: amountToPay,
        receiptId: 'RCT-' + Math.floor(Math.random() * 100000)
      });

      // 2. Open Razorpay Checkout
      const options = {
        key: 'rzp_test_YourTestKeyIdHere', // Should come from env in production
        amount: order.amount,
        currency: order.currency,
        name: 'FeeFlow',
        description: 'Payment for ' + feeToUpdate.name,
        order_id: order.orderId,
        handler: async function (response) {
          // 3. Verify payment on backend
          try {
            const verifyPayload = {
              ...response,
              studentEmail: student.email || "student@example.com",
              studentName: student.name,
              amount: amountToPay
            };
            await axios.post('http://localhost:8080/api/payments/verify', verifyPayload);
            setPaymentModal(prev => ({ ...prev, status: 'success' }));
          } catch (error) {
            console.error("Payment verification failed", error);
            setPaymentModal({ open: false, fee: null, status: 'scan' });
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: student.name,
          email: student.email || "student@example.com",
          contact: student.phone || "9999999999"
        },
        theme: {
          color: '#2563eb'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response){
        console.error("Payment failed", response.error);
        setPaymentModal({ open: false, fee: null, status: 'scan' });
        alert("Payment Failed: " + response.error.description);
      });
      rzp.open();

    } catch (error) {
      console.error("Failed to create Razorpay order", error);
      setPaymentModal({ open: false, fee: null, status: 'scan' });
      alert("Error initiating payment.");
    }
  };

  const closePaymentAndSave = () => {
    const feeToUpdate = paymentModal.fee;
    const amountPaidNow = feeToUpdate.amount - feeToUpdate.paid;
    
    // Update Global State
    setStudents(prevStudents => prevStudents.map(s => {
      if (s.id === student.id) {
        const updatedFees = s.fees.map(f => {
          if (f.id === feeToUpdate.id) return { ...f, paid: f.amount };
          return f;
        });
        
        const newHistoryRecord = {
          id: 'TXN' + Math.floor(Math.random() * 1000000),
          date: new Date().toISOString().split('T')[0],
          amount: amountPaidNow,
          purpose: feeToUpdate.name
        };

        return { ...s, fees: updatedFees, paymentHistory: [newHistoryRecord, ...s.paymentHistory] };
      }
      return s;
    }));

    setPaymentModal({ open: false, fee: null, status: 'scan' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 relative">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="text-white w-7 h-7" />
              </div>
              <span className="font-black text-2xl text-gray-900 italic tracking-tight">FeeFlow</span>
              <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full">Student Portal</span>
            </div>
            <div className="flex items-center">
              {/* Box styled logout for Student too */}
              <button onClick={() => navigate('/login')} className="flex items-center px-4 py-2 border-2 border-red-100 text-red-600 hover:bg-red-50 text-sm font-bold rounded-xl transition-colors">
                 <LogOut className="w-4 h-4 mr-2"/> Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-0"></div>
          <div className="flex items-center space-x-6 z-10">
            <div className="w-24 h-24 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-4xl font-black shrink-0 shadow-lg shadow-blue-500/20 transform rotate-3">
              {student.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900 tracking-tight">{student.name}</h1>
              <div className="flex items-center mt-2 space-x-3">
                <span className="bg-gray-100 text-gray-600 font-bold px-3 py-1 rounded-lg text-sm">{student.std}</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-500 font-medium">Reg No: <span className="text-gray-900 font-bold">{student.regNo}</span></span>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 text-center md:text-right z-10 bg-white/80 p-4 rounded-2xl backdrop-blur-sm border border-gray-100">
             <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Total Balance Due</div>
             <div className={`text-4xl font-black tracking-tight ${dueAmount > 0 ? 'text-red-500' : 'text-green-500'}`}>₹{dueAmount.toLocaleString()}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Fee Breakdown */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center"><Receipt className="mr-3 w-6 h-6 text-blue-600"/> Fee Breakdown</h2>
            <div className="space-y-4">
              {student.fees.map(fee => {
                const balance = fee.amount - fee.paid;
                return (
                  <div key={fee.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row justify-between items-center group hover:border-blue-200 transition-colors">
                    <div className="mb-4 sm:mb-0 text-center sm:text-left w-full sm:w-auto">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{fee.name}</h3>
                      <div className="flex items-center justify-center sm:justify-start space-x-4 mt-2">
                        <span className="text-sm text-gray-500">Total: <strong className="text-gray-900">₹{fee.amount}</strong></span>
                        <span className="text-sm text-gray-500">Paid: <strong className="text-green-600">₹{fee.paid}</strong></span>
                      </div>
                    </div>
                    <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                      {balance > 0 ? (
                        <div className="flex items-center space-x-4 bg-gray-50 p-2 pr-4 rounded-full border border-gray-100">
                          <div className="text-right px-4 border-r border-gray-200">
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Due Amount</div>
                            <div className="text-lg font-black text-red-500">₹{balance}</div>
                          </div>
                          <button onClick={() => handlePayClick(fee)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-full transition-all shadow-md shadow-blue-500/20 whitespace-nowrap">
                            Pay Now
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center px-6 py-3 bg-green-50 text-green-700 rounded-full font-bold text-sm border border-green-100">
                          <CheckCircle2 className="w-5 h-5 mr-2" /> Fully Paid
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Payment History */}
          <div>
             <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center"><History className="mr-3 w-6 h-6 text-blue-600"/> Payment History</h2>
             <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden relative">
                {student.paymentHistory.length === 0 ? (
                  <div className="p-10 text-center text-gray-400">
                    <FileText className="w-12 h-12 mx-auto mb-3 opacity-20" />
                    <span className="font-medium">No previous payments found.</span>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {student.paymentHistory.map(tx => (
                      <div key={tx.id} className="p-5 hover:bg-gray-50 transition-colors group">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-bold text-gray-900 text-sm">{tx.purpose}</div>
                          <div className="font-black text-green-600 text-sm bg-green-50 px-2 py-0.5 rounded">₹{tx.amount}</div>
                        </div>
                        <div className="flex justify-between items-center text-xs text-gray-400">
                          <div className="font-medium">{tx.date} • {tx.id}</div>
                        </div>
                        <button 
                          onClick={() => generateBillPDF(student, tx)}
                          className="mt-4 w-full flex items-center justify-center py-2 bg-white border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all"
                        >
                          <Download className="w-4 h-4 mr-2" /> Download Bill
                        </button>
                      </div>
                    ))}
                  </div>
                )}
             </div>
          </div>

        </div>
      </main>

      {/* Payment Modal */}
      {paymentModal.open && paymentModal.fee && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative">
            
            {paymentModal.status === 'scan' && (
              <>
                <div className="p-6 bg-gray-900 text-white flex justify-between items-center">
                  <div className="flex items-center">
                    <ShieldCheck className="w-5 h-5 mr-2 text-green-400"/>
                    <h3 className="font-bold text-lg">Secure UPI Payment</h3>
                  </div>
                  <button onClick={() => setPaymentModal({open: false, fee: null, status: 'scan'})} className="text-white/50 hover:text-white bg-white/10 p-1.5 rounded-full"><X className="w-5 h-5"/></button>
                </div>
                <div className="p-8 text-center bg-gray-50">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Paying for</div>
                    <div className="text-lg font-black text-blue-600 mb-4">{paymentModal.fee.name}</div>
                    <div className="text-sm text-gray-500 font-medium mb-1">Total Due Amount</div>
                    <div className="text-5xl font-black text-gray-900 tracking-tighter">₹{paymentModal.fee.amount - paymentModal.fee.paid}</div>
                  </div>
                  
                  <div className="w-56 h-56 mx-auto bg-white rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center mb-6 shadow-inner relative group overflow-hidden p-2">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`upi://pay?pa=9363257710@ptyes&pn=Senthilkumaran&am=${paymentModal.fee.amount - paymentModal.fee.paid}&cu=INR`)}`} 
                      alt="UPI QR Code" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform rounded-xl"
                    />
                    <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-[1px] rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">Scan with GPay/PhonePe</span>
                    </div>
                  </div>
                  
                  <button onClick={handleRazorpayPayment} className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 text-lg flex justify-center items-center">
                    Pay Now with Razorpay <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </>
            )}

            {paymentModal.status === 'processing' && (
              <div className="p-16 text-center">
                <div className="w-20 h-20 border-4 border-gray-100 border-t-blue-600 rounded-full animate-spin mx-auto mb-6"></div>
                <h3 className="text-2xl font-black text-gray-900">Processing Payment</h3>
                <p className="text-gray-500 mt-2 font-medium">Connecting to secure gateway...</p>
              </div>
            )}

            {paymentModal.status === 'success' && (
              <div className="p-12 text-center bg-white relative overflow-hidden">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-100 via-white to-white -z-0"></div>
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/30 transform scale-110">
                    <Check className="w-12 h-12 stroke-[3]" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Payment Successful!</h3>
                  <p className="text-gray-500 mb-10 font-medium">Your fee record has been updated and a receipt has been generated.</p>
                  <button onClick={closePaymentAndSave} className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors text-lg">
                    Return to Dashboard
                  </button>
                </div>
              </div>
            )}
            
          </div>
        </div>
      )}

    </div>
  );
}

function App() {
  const [students, setStudents] = useState([
    { 
      id: 1, regNo: '11067', name: 'Jose Robin', std: '11th Std', 
      fees: [
        { id: 'f1', name: 'First Term Fee', amount: 15000, paid: 15000 },
        { id: 'f2', name: 'Second Term Fee', amount: 15000, paid: 0 },
        { id: 'f3', name: 'Uniform Fee', amount: 3000, paid: 0 },
        { id: 'f4', name: 'Exam Fee', amount: 2000, paid: 0 }
      ],
      paymentHistory: [
        { id: 'TXN839211', date: '2023-06-12', amount: 15000, purpose: 'First Term Fee' }
      ]
    },
    { 
      id: 2, regNo: '08184', name: 'Vishva', std: '8th Std', 
      fees: [
        { id: 'f1', name: 'First Term Fee', amount: 10000, paid: 10000 },
        { id: 'f2', name: 'Second Term Fee', amount: 10000, paid: 10000 },
      ],
      paymentHistory: [
        { id: 'TXN992833', date: '2023-08-01', amount: 10000, purpose: 'Second Term Fee' },
        { id: 'TXN112344', date: '2023-05-10', amount: 10000, purpose: 'First Term Fee' }
      ]
    },
    { 
      id: 3, regNo: '10147', name: 'Shailesh', std: '10th Std', 
      fees: [
        { id: 'f1', name: 'Annual Tuition Fee', amount: 30000, paid: 10000 },
        { id: 'f2', name: 'Lab Fee', amount: 2000, paid: 0 },
      ],
      paymentHistory: [
        { id: 'TXN667123', date: '2023-06-20', amount: 10000, purpose: 'Annual Tuition Fee (Part 1)' }
      ]
    },
    { 
      id: 4, regNo: '07117', name: 'Nivash', std: '7th Std', 
      fees: [
        { id: 'f1', name: 'Annual Tuition Fee', amount: 15000, paid: 15000 },
      ],
      paymentHistory: [
        { id: 'TXN445566', date: '2023-05-15', amount: 15000, purpose: 'Annual Tuition Fee' }
      ]
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login students={students} />} />
        <Route path="/dashboard" element={<Dashboard students={students} setStudents={setStudents} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
