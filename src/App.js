import React, { useState, useRef, useEffect } from 'react';
import { 
  ClipboardCheck, Printer, ArrowLeft, Save, CheckCircle, 
  AlertCircle, FileText, X, PenTool, Upload, Plus, 
  Trash2, Lock, Unlock, LogIn, Download, Loader2,
  ChevronRight, Shield, Activity // Tambahan icon baru
} from 'lucide-react';

const standardItems = [
  { id: 1, name: '5 Triangular bandages 130cm x 90cm x 90cm', image: 'https://drive.google.com/thumbnail?id=1IyFPpaWLtq51nme8q6DQQOdTDu0mOz3z&sz=w800' },
  { id: 2, name: 'Sterile eye pads', image: 'https://drive.google.com/thumbnail?id=19jaJIGHWt8mRsMwWxtEcdW8zPa-hT_iz&sz=w800' },
  { id: 3, name: 'Non-sterile 4x4” gauze pads', image: 'https://drive.google.com/thumbnail?id=1Bc7cPasiyxJG9wwaVeN8PBRitd37nC-n&sz=w800' },
  { id: 4, name: 'Sterile 4x4” gauze pads', image: 'https://drive.google.com/thumbnail?id=1n9v6I-U1SAF9AZTV1z89WUdSpKZp8K9y&sz=w800' },
  { id: 5, name: 'Sterile 10x10” gauze pads', image: 'https://drive.google.com/thumbnail?id=1NRKaVuy2H-2BqmUus72FNc1Amx7a38QZ&sz=w800' },
  { id: 6, name: 'Elastic bandage', image: 'https://drive.google.com/thumbnail?id=1OqBHVjHDCampxgYpBActObLS0Di3EOpM&sz=w800' },
  { id: 7, name: '4 Roller bandages 7.5 cm', image: 'https://drive.google.com/thumbnail?id=1mawGW95m_RZrI0eW3j8ELFDoQKA_g8H3&sz=w800' },
  { id: 8, name: '4 Roller bandages 3 cm', image: 'https://drive.google.com/thumbnail?id=1mawGW95m_RZrI0eW3j8ELFDoQKA_g8H3&sz=w800' },
  { id: 9, name: '4 Roller bandages 2.5 cm', image: 'https://drive.google.com/thumbnail?id=1mawGW95m_RZrI0eW3j8ELFDoQKA_g8H3&sz=w800' },
  { id: 10, name: 'Cold pack compress gel', image: 'https://drive.google.com/thumbnail?id=1a3ulTsPTCZvwCkbq6wGauTCbZtgRb_Hr&sz=w800' },
  { id: 11, name: 'Burn sheet/dressing', image: 'https://drive.google.com/thumbnail?id=1uV8LuK00FmQmtxxRahFEEEmvgn7jfCFX&sz=w800' },
  { id: 12, name: 'Pairs of gloves (disposable/ non-sterile)', image: 'https://drive.google.com/thumbnail?id=1rhtvje-Ts8tgNf55ZGQG0mo6kuvaDbUX&sz=w800' },
  { id: 13, name: 'Stainless steel bandage scissors', image: 'https://drive.google.com/thumbnail?id=1kIQwxpxNCuNk3F2Re_CYw5YNajwDMn93&sz=w800' },
  { id: 14, name: 'Adhesive tape', image: 'https://drive.google.com/thumbnail?id=131ppXAeCY9ZIfqh59APBeNgMXWyyj50F&sz=w800' },
  { id: 15, name: 'Sterile multi-trauma dressing/gauze', image: 'https://drive.google.com/thumbnail?id=1i7ECjAV7poUPThij3cQfqhuEcLBmuIJi&sz=w800' },
  { id: 16, name: 'Alcohol prep pads', image: 'https://drive.google.com/thumbnail?id=1SPzHcf-VL5kdrijOeKd87I-u4tLOmj-c&sz=w800' },
  { id: 17, name: 'Cetavlon', image: 'https://drive.google.com/thumbnail?id=1YUn6KpKxro_Rl2ffNpr24ctaSJzsKvqB&sz=w800' },
  { id: 18, name: 'Cotton buds', image: 'https://drive.google.com/thumbnail?id=10oLWcRZm1t3kho6zM8F9evLunZlvjXwV&sz=w800' },
  { id: 19, name: 'Barrier device for CPR (pocket mask, face shield)', image: 'https://drive.google.com/thumbnail?id=1P8r39vqO5bIkTppUTr98hQEH1iZHAEew&sz=w800' },
  { id: 20, name: 'Elastoplasts/sterile adhesive dressing', image: 'https://drive.google.com/thumbnail?id=1hVVqsPK1ArVOsjFKUZ39pQlBeZHILnK2&sz=w800' },
  { id: 21, name: 'Safety pin for triangular bandages', image: 'https://drive.google.com/thumbnail?id=1LiPUZZ71QOShYeKQMsXmetWwTQJWEVmd&sz=w800' },
  { id: 22, name: 'Thermometer', image: 'https://drive.google.com/thumbnail?id=1UJwv1gb5kMIdUSOQbaBYteTbS_rKjADb&sz=w800' },
  { id: 23, name: 'First aid manual', image: 'https://drive.google.com/thumbnail?id=1UNrSGTnarWsDcKORY1ePMsUprD5xa7jq&sz=w800' },
  { id: 24, name: 'Waterproof waste bag', image: 'https://drive.google.com/thumbnail?id=1tsSnTfuU3w8Xu2Za0bEobGFOLaiKucNi&sz=w800' }
];

const senaraiLokasi = [
  'Teknologi Elektrik (TE)',
  'Teknologi Penyejukbekuan dan Penyamanan Udara (TPPU)',
  'Teknologi Telekomunikasi (TELCOM)',
  'Teknologi Komputer Rangkaian (TKR)',
  'Teknologi Kimpalan (TKIM)',
  'Teknologi Automotif (TAUTO)',
  'Teknologi Fabrikasi Struktur Logam (Minyak & Gas)',
  'Pentadbiran',
  'BPSM',
  'ASRAMA'
];

const senaraiPemeriksa = [
  'Norashsikin binti Mohd Arsad',
  'Mohd Hakimin Mohd Hussin',
  'Omrei bin Okong',
  'Ibrahim bin Lamusa',
  'Isabella Francis Xavier',
  'Ts. Syed Mohd Yusri bin Syed Yusoff',
  'Tc. Johannes Belili',
  'Azryzan bin Besri',
  'Lynn Noell Ending',
  'Sakinah binti Pitungut',
  'Nasri bin Kipple',
  'Rusyieni @ Wendy Binti Payah'
];

export default function App() {
  const [view, setView] = useState('landing'); // Tukar initial state kepada 'landing'
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); 
  
  const [metadata, setMetadata] = useState({
    jabatan: '',
    namaPemeriksa: '',
    tarikh: new Date().toISOString().split('T')[0]
  });

  const [checklist, setChecklist] = useState(
    standardItems.map(item => ({
      ...item,
      status: 'Memuaskan',
      catatan: '',
      tindakan: ''
    }))
  );

  // --- LOGIK MEMUATKAN PUSTAKA HTML2PDF ---
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.html2pdf) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const [isDownloading, setIsDownloading] = useState(false);
  const [isPdfGenerating, setIsPdfGenerating] = useState(false);

  // --- LOGIK MUAT TURUN PDF ---
  const handleDownloadPDF = async () => {
    if (!window.html2pdf) {
      window.print();
      return;
    }

    setIsDownloading(true);
    setIsPdfGenerating(true);

    // Short delay to ensure state update renders any print-specific adjustments
    await new Promise(resolve => setTimeout(resolve, 1200));

    const element = document.getElementById('pdf-content');

    const opt = {
      margin: [5, 10, 5, 10], // Margin: [Atas, Kanan, Bawah, Kiri] dalam mm
      filename: `Borang_BKKP-06-03_${metadata.jabatan || 'Laporan'}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        scale: 2, // Adjusted scale to balance size and quality
        useCORS: true,
        letterRendering: true,
        scrollY: 0,
        windowWidth: 1200 // Paksa saiz paparan desktop supaya format jadual tidak lari
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
      pagebreak: { mode: ['css', 'legacy'] } // Buang 'avoid-all' untuk benarkan pemotongan page
    };

    try {
      await window.html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsDownloading(false);
      setIsPdfGenerating(false);
    }
  };

  // --- LOGIK PENGESAHAN ADMIN ---
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'abc@12345') {
      setIsAdmin(true);
      setShowLogin(false);
      setLoginData({ username: '', password: '' });
      setLoginError('');
    } else {
      setLoginError('ID Pengguna atau Kata Laluan tidak sah.');
    }
  };

  const handleAddItem = () => {
    const newId = checklist.length > 0 ? Math.max(...checklist.map(i => i.id)) + 1 : 1;
    setChecklist(prev => [...prev, {
      id: newId,
      name: '',
      image: '', 
      status: 'Memuaskan',
      catatan: '',
      tindakan: ''
    }]);
  };

  const handleRemoveItem = (id) => {
    setChecklist(prev => prev.filter(item => item.id !== id));
  };

  // --- LOGIK MUAT NAIK GAMBAR ITEM ---
  const itemFileInputRef = useRef(null);
  const [uploadingItemId, setUploadingItemId] = useState(null);

  const triggerItemImageUpload = (id) => {
    setUploadingItemId(id);
    if (itemFileInputRef.current) {
      itemFileInputRef.current.click();
    }
  };

  const handleItemImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file || uploadingItemId === null) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      handleChecklistChange(uploadingItemId, 'image', event.target.result);
      setUploadingItemId(null);
      if (itemFileInputRef.current) itemFileInputRef.current.value = '';
    };
    reader.readAsDataURL(file);
  };

  // --- LOGIK TANDATANGAN DIGITAL ---
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [signature, setSignature] = useState(null);
  const [signatureMode, setSignatureMode] = useState('draw'); // 'draw' atau 'upload'

  const clearSignature = () => {
    if (signatureMode === 'draw') {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    setSignature(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; 
    }
  };

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    setIsDrawing(true);
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000000'; // Dakwat hitam
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault(); 
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      setSignature(canvasRef.current.toDataURL('image/png'));
      if (errorMsg) setErrorMsg('');
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        const MAX_WIDTH = 600;
        let width = img.width;
        let height = img.height;
        if (width > MAX_WIDTH) {
          height = Math.round((height * MAX_WIDTH) / width);
          width = MAX_WIDTH;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          const brightness = (r * 0.299 + g * 0.587 + b * 0.114);

          if (brightness > 160) {
            data[i + 3] = 0; 
          } else {
            data[i] = 0;       
            data[i + 1] = 0;   
            data[i + 2] = 0;   
            data[i + 3] = 255 - brightness; 
          }
        }
        
        ctx.putImageData(imageData, 0, 0);
        setSignature(canvas.toDataURL('image/png'));
        if (errorMsg) setErrorMsg('');
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };
  // --- TAMAT LOGIK TANDATANGAN ---

  const handleMetadataChange = (e) => {
    const { name, value } = e.target;
    setMetadata(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(''); 
  };

  const handleChecklistChange = (id, field, value) => {
    setChecklist(prev => 
      prev.map(item => item.id === id ? { ...item, [field]: value } : item)
    );
  };

  // --- LOGIK HALAMAN UTAMA (LANDING PAGE) ---
  const renderLanding = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://wsrv.nl/?url=drive.google.com/thumbnail?id=1i9Pz_cC5m-D9y55m_chsPG4t6CFj_PAe&sz=w1000" 
              alt="Logo ADTEC" 
              className="h-10 md:h-12 object-contain" 
            />
            <div className="hidden sm:block border-l-2 border-gray-200 pl-3">
              <span className="text-sm font-bold text-blue-900 tracking-tight">ADTEC Sandakan</span>
            </div>
          </div>
          <button
            onClick={() => setShowLogin(true)}
            className="text-gray-500 hover:text-blue-700 font-medium text-sm transition-colors flex items-center space-x-1.5 bg-gray-50 hover:bg-blue-50 px-3 py-2 rounded-lg"
          >
            <Lock size={16} />
            <span className="hidden sm:inline">Log Masuk Admin</span>
          </button>
        </div>
      </header>

      {/* Main Hero */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-100/50 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-200">
            <Activity size={16} className="text-blue-600" />
            <span>Sistem Pengurusan Keselamatan (OSHA)</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">eKitCare</span>
          </h1>
          
          <h2 className="text-blue-700 font-semibold text-lg md:text-xl italic mb-6 tracking-wide">
            "Empowering Skills, Igniting Futures"
          </h2>

          <p className="mt-2 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Platform digital berpusat untuk merekod, memantau dan mengurus pemeriksaan kelengkapan peti pertolongan cemas (BKKP-06-03) secara sistematik di semua bengkel dan bahagian.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => {
                setView('form');
                window.scrollTo(0,0);
              }}
              className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              <span>Mula Pemeriksaan</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24 max-w-5xl mx-auto w-full">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all group">
            <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <ClipboardCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Semakan Digital</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">Lakukan pemeriksaan senarai semak dengan pantas menggunakan peranti pintar anda tanpa memerlukan borang fizikal lagi.</p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-green-100 hover:shadow-md transition-all group">
            <div className="bg-green-50 w-14 h-14 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Pengesahan Sah</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">Sokongan tandatangan digital terbina dalam. Lukis atau muat naik tandatangan anda untuk pengesahan rasmi.</p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-purple-100 hover:shadow-md transition-all group">
            <div className="bg-purple-50 w-14 h-14 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
              <FileText size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Janaan PDF</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">Laporan akan dijana dan diformat secara automatik ke dalam susun atur PDF dokumen BKKP-06-03 berkualiti tinggi.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 mt-auto bg-white/50">
        <p>&copy; {new Date().getFullYear()} Kolej Teknologi Termaju Jabatan Tenaga Manusia (ADTEC) Kampus Sandakan.<br className="md:hidden" /> Hak cipta terpelihara.</p>
      </footer>

      {/* Modal Log Masuk Admin (Digunakan di Landing Page) */}
      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 relative">
            <button 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full p-1 transition-colors"
              onClick={() => setShowLogin(false)}
            >
              <X size={20} />
            </button>
            <div className="flex flex-col items-center mb-6 pt-2">
              <div className="bg-blue-100 p-3.5 rounded-2xl mb-4 text-blue-600 shadow-sm border border-blue-200">
                <Lock size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Log Masuk Admin</h3>
              <p className="text-sm text-slate-500 text-center mt-1.5">Akses untuk kemaskini senarai kemudahan dan kelengkapan.</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              {loginError && (
                <div className="bg-red-50 text-red-600 border border-red-100 text-sm p-3 rounded-xl flex items-start">
                  <AlertCircle size={18} className="mr-2 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{loginError}</span>
                </div>
              )}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">ID Pengguna</label>
                <input 
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                  placeholder="Masukkan ID Pengguna"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Kata Laluan</label>
                <input 
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg mt-4 flex justify-center items-center space-x-2"
              >
                <LogIn size={18} />
                <span>Log Masuk Ruang Admin</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  const renderForm = () => (
    <div className="bg-gray-100 min-h-screen pb-24 md:pb-28">
      
      {/* APP HEADER - STICKY */}
      <div className="sticky top-0 z-30 bg-blue-800 text-white shadow-md border-b-4 border-yellow-500">
        <div className="max-w-5xl mx-auto px-4 py-3 sm:p-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-2 rounded-full hidden sm:block">
              <ClipboardCheck size={32} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold leading-tight">eKitCare</h1>
              <p className="text-blue-100 text-xs sm:text-sm mt-0.5">BKKP-06-03 (Borang Senarai Semak Kemudahan & Peralatan Pertolongan Cemas) </p>
            </div>
          </div>
          <button 
            onClick={() => isAdmin ? setIsAdmin(false) : setShowLogin(true)}
            className="flex items-center space-x-1.5 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors"
          >
            {isAdmin ? <Unlock size={16} /> : <Lock size={16} />}
            <span className="hidden sm:inline">{isAdmin ? 'Log Keluar' : 'Log Masuk Admin'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-2 sm:px-6 mt-4">
        
        {/* SECTION A: MAKLUMAT */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center space-x-2">
            <FileText size={18} className="text-blue-600" />
            <h2 className="text-sm sm:text-base font-bold text-gray-800">A. Maklumat Bahagian & Pemeriksa</h2>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Jabatan/Bengkel</label>
              <select 
                name="jabatan" 
                value={metadata.jabatan} 
                onChange={handleMetadataChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm text-sm"
              >
                <option value="">-- Sila Pilih --</option>
                {senaraiLokasi.map((lokasi, index) => (
                  <option key={index} value={lokasi}>{lokasi}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Pemeriksa</label>
              <select 
                name="namaPemeriksa" 
                value={metadata.namaPemeriksa} 
                onChange={handleMetadataChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm text-sm"
              >
                <option value="">-- Sila Pilih --</option>
                {senaraiPemeriksa.map((nama, index) => (
                  <option key={index} value={nama}>{nama}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Tarikh</label>
              <input 
                type="date" 
                name="tarikh" 
                value={metadata.tarikh} 
                onChange={handleMetadataChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm text-sm"
              />
            </div>
          </div>
        </div>

        {/* SECTION B: SENARAI SEMAK */}
        <div className="mb-2">
          <h2 className="text-sm sm:text-base font-bold text-gray-800 ml-2 mb-3">B. Senarai Semak Kelengkapan ({checklist.length} Item)</h2>
        </div>
        
        {/* Paparan Mobile */}
        <div className="md:hidden space-y-3">
          {checklist.map((item, index) => (
            <div key={item.id} className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm relative group">
              
              <div className="flex items-start space-x-3 mb-4">
                <div className="relative flex-shrink-0">
                  <img 
                    src={item.image || 'https://placehold.co/150x150/f8fafc/1e293b?text=Tiada+Gambar'} 
                    alt={item.name} 
                    onClick={() => item.image ? setSelectedImage({ src: item.image, alt: item.name }) : (isAdmin && triggerItemImageUpload(item.id))}
                    className={`w-16 h-16 object-cover rounded-lg border border-gray-200 bg-gray-50 transition-opacity ${item.image || isAdmin ? 'cursor-pointer hover:opacity-80' : ''}`}
                    onError={(e) => { e.target.src = 'https://placehold.co/150x150/f8fafc/1e293b?text=Tiada+Gambar'; }}
                  />
                  {isAdmin && (
                    <button
                      onClick={() => triggerItemImageUpload(item.id)}
                      className="absolute -bottom-2 -right-2 bg-blue-100 text-blue-600 p-1.5 rounded-full shadow-sm hover:bg-blue-200 border border-white"
                      title="Muat Naik Gambar"
                    >
                      <Upload size={12} />
                    </button>
                  )}
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full inline-block">Item {index + 1}</span>
                    {isAdmin && (
                      <button 
                        onClick={() => handleRemoveItem(item.id)} 
                        className="text-red-400 hover:text-red-600 p-1 bg-red-50 hover:bg-red-100 rounded transition-colors"
                        title="Padam Item"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                  {isAdmin ? (
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleChecklistChange(item.id, 'name', e.target.value)}
                      className="font-semibold text-gray-800 text-sm leading-tight w-full bg-white border border-gray-300 hover:border-blue-400 focus:border-blue-500 rounded p-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Nama peralatan..."
                    />
                  ) : (
                    <h3 className="font-semibold text-gray-800 text-sm leading-tight px-1.5 py-1">{item.name}</h3>
                  )}
                </div>
              </div>

              {/* Butang Togol Status */}
              <div className="flex space-x-2 mb-3 bg-gray-50 p-1 rounded-lg">
                <button
                  onClick={() => handleChecklistChange(item.id, 'status', 'Memuaskan')}
                  className={`flex-1 flex justify-center items-center space-x-1 py-2 px-1 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    item.status === 'Memuaskan' 
                      ? 'bg-green-500 text-white shadow-sm' 
                      : 'text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  <CheckCircle size={16} />
                  <span>Memuaskan</span>
                </button>
                <button
                  onClick={() => handleChecklistChange(item.id, 'status', 'Tidak Memuaskan')}
                  className={`flex-1 flex justify-center items-center space-x-1 py-2 px-1 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    item.status === 'Tidak Memuaskan' 
                      ? 'bg-red-500 text-white shadow-sm' 
                      : 'text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  <AlertCircle size={16} />
                  <span>Tidak Memuaskan</span>
                </button>
              </div>

              <div className="space-y-2">
                <input 
                  type="text" 
                  value={item.catatan}
                  onChange={(e) => handleChecklistChange(item.id, 'catatan', e.target.value)}
                  placeholder="Catatan tambahan..."
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {item.status === 'Tidak Memuaskan' && (
                  <input 
                    type="text" 
                    value={item.tindakan}
                    onChange={(e) => handleChecklistChange(item.id, 'tindakan', e.target.value)}
                    placeholder="Tindakan yang perlu diambil..."
                    className="w-full p-2.5 bg-red-50 border border-red-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Paparan Desktop */}
        <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider w-12">Bil</th>
                <th className="px-4 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Item & Peralatan</th>
                <th className="px-4 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider w-64">Status</th>
                <th className="px-4 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Catatan</th>
                <th className="px-4 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Tindakan</th>
                {isAdmin && <th className="px-2 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider w-10"></th>}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {checklist.map((item, index) => (
                <tr key={item.id} className="hover:bg-blue-50/50 transition-colors group">
                  <td className="px-4 py-3 text-sm text-center font-bold text-gray-400">{index + 1}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <div className="flex items-center space-x-3">
                      <div className="relative flex-shrink-0">
                        <img 
                          src={item.image || 'https://placehold.co/150x150/f8fafc/1e293b?text=Tiada+Gambar'} 
                          alt={item.name} 
                          onClick={() => item.image ? setSelectedImage({ src: item.image, alt: item.name }) : (isAdmin && triggerItemImageUpload(item.id))}
                          className={`w-12 h-12 object-cover rounded shadow-sm border border-gray-200 bg-white transition-transform ${item.image || isAdmin ? 'cursor-pointer hover:scale-105' : ''}`}
                          onError={(e) => { e.target.src = 'https://placehold.co/150x150/f8fafc/1e293b?text=Tiada+Gambar'; }}
                        />
                        {isAdmin && (
                          <button
                            onClick={() => triggerItemImageUpload(item.id)}
                            className="absolute -bottom-1 -right-1 bg-blue-100 text-blue-600 p-1 rounded-full shadow border border-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-200"
                            title="Tukar Gambar"
                          >
                            <Upload size={10} />
                          </button>
                        )}
                      </div>
                      {isAdmin ? (
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => handleChecklistChange(item.id, 'name', e.target.value)}
                          className="font-semibold w-full bg-transparent border border-transparent hover:border-gray-300 hover:bg-white focus:bg-white focus:border-blue-500 rounded p-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                          placeholder="Masukkan nama item..."
                        />
                      ) : (
                        <span className="font-semibold px-1.5">{item.name}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-center">
                    <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                      <button
                        onClick={() => handleChecklistChange(item.id, 'status', 'Memuaskan')}
                        className={`flex-1 py-1.5 px-2 rounded font-medium text-xs transition-colors ${
                          item.status === 'Memuaskan' ? 'bg-green-500 text-white shadow' : 'text-gray-500 hover:bg-gray-200'
                        }`}
                      >
                        Memuaskan
                      </button>
                      <button
                        onClick={() => handleChecklistChange(item.id, 'status', 'Tidak Memuaskan')}
                        className={`flex-1 py-1.5 px-2 rounded font-medium text-xs transition-colors ${
                          item.status === 'Tidak Memuaskan' ? 'bg-red-500 text-white shadow' : 'text-gray-500 hover:bg-gray-200'
                        }`}
                      >
                        Tidak Memuaskan
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <input 
                      type="text" 
                      value={item.catatan}
                      onChange={(e) => handleChecklistChange(item.id, 'catatan', e.target.value)}
                      placeholder="Catatan..."
                      className="w-full p-2 border border-gray-200 rounded-md text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <input 
                      type="text" 
                      value={item.tindakan}
                      disabled={item.status === 'Memuaskan'}
                      onChange={(e) => handleChecklistChange(item.id, 'tindakan', e.target.value)}
                      placeholder={item.status === 'Memuaskan' ? "-" : "Tindakan..."}
                      className={`w-full p-2 border rounded-md text-xs focus:ring-1 ${
                        item.status === 'Memuaskan' 
                          ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
                          : 'bg-red-50 border-red-200 focus:ring-red-500 focus:border-red-500'
                      }`}
                    />
                  </td>
                  {isAdmin && (
                    <td className="px-2 py-3 text-center align-middle">
                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded transition-colors"
                        title="Padam Item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add New Item Button */}
        {isAdmin && (
          <div className="mt-4 flex justify-center md:justify-end">
            <button
              onClick={handleAddItem}
              className="flex items-center space-x-2 text-blue-700 bg-blue-100 hover:bg-blue-200 px-5 py-2.5 rounded-lg font-bold transition-transform active:scale-95 shadow-sm border border-blue-200"
            >
              <Plus size={18} />
              <span>Tambah Item Baru</span>
            </button>
          </div>
        )}

        {/* SECTION C: TANDATANGAN */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 mb-6 overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <PenTool size={18} className="text-blue-600" />
              <h2 className="text-sm sm:text-base font-bold text-gray-800">C. Pengesahan & Tandatangan</h2>
            </div>
            <div className="flex space-x-1 bg-white p-1 rounded-lg border border-gray-200 shadow-sm self-start sm:self-auto">
              <button
                onClick={() => { setSignatureMode('draw'); clearSignature(); }}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${signatureMode === 'draw' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                Lukis
              </button>
              <button
                onClick={() => { setSignatureMode('upload'); clearSignature(); }}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${signatureMode === 'upload' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                Muat Naik
              </button>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <p className="text-xs text-gray-500 mb-3 font-medium text-center">
              {signatureMode === 'draw' 
                ? "Sila turunkan tandatangan digital anda di dalam ruangan di bawah:"
                : "Muat naik gambar tandatangan. Latar belakang akan dibuang secara automatik."}
            </p>
            
            {signatureMode === 'draw' ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 overflow-hidden touch-none shadow-inner">
                <canvas
                  ref={canvasRef}
                  width={320}
                  height={150}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="bg-transparent cursor-crosshair"
                />
              </div>
            ) : (
              <div className="w-full max-w-sm">
                {signature ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 p-2 flex justify-center items-center h-[154px]">
                    <img src={signature} alt="Tandatangan Diproses" className="max-h-full max-w-full object-contain drop-shadow-sm" />
                  </div>
                ) : (
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-blue-300 rounded-lg bg-blue-50/50 hover:bg-blue-50 cursor-pointer flex flex-col items-center justify-center h-[154px] transition-colors"
                  >
                    <Upload size={32} className="text-blue-400 mb-2" />
                    <span className="text-sm text-blue-600 font-bold mb-1">Pilih Imej Tandatangan</span>
                    <span className="text-xs text-gray-500">Sokongan: JPG, PNG</span>
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
            )}

            <div className="mt-4">
              <button 
                onClick={clearSignature} 
                className="text-sm text-red-600 hover:text-red-800 hover:bg-red-100 font-semibold px-4 py-1.5 bg-red-50 rounded-md transition-colors"
              >
                Padam Semula
              </button>
            </div>
          </div>
        </div>

        {/* Hidden Input for Item Image Upload */}
        <input 
          type="file" 
          ref={itemFileInputRef} 
          onChange={handleItemImageUpload} 
          accept="image/*" 
          className="hidden" 
        />

      </div>

      {/* ACTION BAR - STICKY */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.1)] z-30">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <div className="w-full sm:w-auto">
            {errorMsg ? (
              <div className="text-red-600 text-xs sm:text-sm font-semibold flex items-center bg-red-50 px-3 py-2 rounded-lg">
                <AlertCircle size={16} className="mr-2 flex-shrink-0" />
                {errorMsg}
              </div>
            ) : (
              <div className="text-gray-500 text-xs sm:text-sm hidden sm:block">
                Pastikan semua maklumat tepat sebelum menjana borang.
              </div>
            )}
          </div>
          <button 
            onClick={() => {
              if(!metadata.jabatan || !metadata.namaPemeriksa) {
                setErrorMsg("Sila isi Jabatan dan Nama Pemeriksa di Bahagian A.");
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
              }
              if(!signature) {
                setErrorMsg("Sila turunkan tandatangan anda di Bahagian C.");
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                return;
              }
              setErrorMsg('');
              setView('report');
              window.scrollTo(0,0);
            }}
            className="w-full sm:w-auto flex justify-center items-center space-x-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 py-3.5 rounded-xl font-bold transition-transform active:scale-95 shadow-md"
          >
            <Save size={20} />
            <span>Simpan & Jana Borang BKKP</span>
          </button>
        </div>
      </div>

      {/* Paparan Gambar Penuh (Modal Pop-up) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-2xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 p-2 text-white hover:text-red-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl bg-white p-2"
            />
            <div className="mt-4 text-center text-white text-base md:text-lg font-medium px-4 py-2 bg-black bg-opacity-60 rounded-lg">
              {selectedImage.alt}
            </div>
          </div>
        </div>
      )}

      {/* Modal Log Masuk Admin */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 relative">
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setShowLogin(false)}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mb-3 text-blue-600">
                <Lock size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Log Masuk Admin</h3>
              <p className="text-sm text-gray-500 text-center mt-1">Urus senarai kemudahan dan peralatan.</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              {loginError && (
                <div className="bg-red-50 text-red-600 text-xs p-3 rounded-lg flex items-start">
                  <AlertCircle size={14} className="mr-1.5 flex-shrink-0 mt-0.5" />
                  <span>{loginError}</span>
                </div>
              )}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5">ID Pengguna</label>
                <input 
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Masukkan ID Pengguna"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1.5">Kata Laluan</label>
                <input 
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors shadow-md mt-2 flex justify-center items-center space-x-2"
              >
                <LogIn size={18} />
                <span>Log Masuk</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  const renderReport = () => {
    const formatDate = (dateString) => {
      if(!dateString) return '';
      const [year, month, day] = dateString.split('-');
      return `${day}/${month}/${year}`;
    };

    const renderReportPage = (pageItems, startIndex, isLastPage, itemsPerPage = 10, pageNum, totalPages) => {
      const displayItems = [...pageItems];
      if (isLastPage) {
        // Pad with empty rows to fill up the last page table
        while(displayItems.length < itemsPerPage) {
          displayItems.push({ id: `empty-${displayItems.length}`, isEmpty: true });
        }
      }

      return (
        <div 
          className={`bg-white ${isPdfGenerating ? 'px-6 py-2 shadow-none m-0 border-0' : 'p-8 md:p-10 shadow-lg mb-8'} print:shadow-none print:p-0 print:m-0 w-full print:mb-0 flex flex-col relative`}
          style={{ minHeight: isPdfGenerating ? '175mm' : 'auto', pageBreakInside: 'avoid' }}
        >
          
          <div className={`relative ${isPdfGenerating ? 'mb-2 pt-2' : 'mb-6 pt-4'} flex flex-col items-center justify-center select-none`}>
            <img 
              src="https://wsrv.nl/?url=drive.google.com/thumbnail?id=1i9Pz_cC5m-D9y55m_chsPG4t6CFj_PAe&sz=w1000" 
              alt="Logo ADTEC JTM Kampus Sandakan" 
              crossOrigin="anonymous"
              className={`w-auto object-contain ${isPdfGenerating ? 'h-24' : 'h-24 md:h-30 print:h-30'}`}
              onError={(e) => {
                e.target.onerror = null; 
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
            <div style={{ display: 'none' }} className="w-full text-center">
              <div className="flex justify-center items-end leading-none tracking-tighter mb-1">
                <span className="text-[#203487] font-extrabold text-5xl md:text-6xl" style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}>ADTEC</span>
                <span className="text-[#fbb034] font-extrabold text-4xl md:text-5xl pb-1 ml-1" style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}>JTM</span>
              </div>
              <div className="bg-[#203487] text-white text-center font-bold py-1 px-2 text-[10px] md:text-xs tracking-wider uppercase mb-1">
                Kolej Teknologi Termaju Jabatan Tenaga Manusia
              </div>
              <div className="text-center text-[#203487] font-semibold text-lg md:text-xl tracking-[0.2em] uppercase" style={{ fontFamily: 'Arial, sans-serif' }}>
                Kampus Sandakan
              </div>
            </div>

            <div className="absolute right-0 bottom-0 text-right text-sm font-bold text-black leading-tight">
              No. Dokumen:<br/>
              BKKP-06-03
            </div>
          </div>

          <div className={`text-center ${isPdfGenerating ? 'mb-3' : 'mb-5'} px-4`}>
            <h1 className="text-base md:text-lg font-bold uppercase">SENARAI SEMAK KEMUDAHAN DAN PERALATAN PERTOLONGAN CEMAS</h1>
          </div>

          <div className={`${isPdfGenerating ? 'mb-2' : 'mb-3'} text-sm flex items-center`}>
            <span className="mr-1">Jabatan/Bahagian/Bengkel :</span>
            <span className="font-semibold underline underline-offset-4 decoration-1">{metadata.jabatan || '<<Jabatan>>'}</span>
          </div>

          <table className={`w-full border-collapse border border-black ${isPdfGenerating ? 'mb-3' : 'mb-6'} text-sm`}>
            <thead>
              <tr className="bg-gray-200 print:bg-[#e5e7eb] print:text-black">
                <th className="border border-black px-2 py-2 w-10 text-center align-middle font-bold">Bil.</th>
                <th className="border border-black px-2 py-2 text-center align-middle font-bold">Kemudahan / Peralatan</th>
                <th className="border border-black px-2 py-2 w-28 text-center align-middle font-bold">Memuaskan</th>
                <th className="border border-black px-2 py-2 w-32 text-center align-middle font-bold">Tidak<br/>Memuaskan</th>
                <th className="border border-black px-2 py-2 w-1/5 text-center align-middle font-bold">Catatan</th>
                <th className="border border-black px-2 py-2 w-1/5 text-center align-middle font-bold">Tindakan</th>
              </tr>
            </thead>
            <tbody>
              {displayItems.map((item, idx) => (
                <tr key={item.id || idx} className="h-8">
                  <td className="border border-black px-2 py-1 text-center align-top">
                    {item.isEmpty ? '' : startIndex + idx + 1}
                  </td>
                  <td className="border border-black px-2 py-1 align-top">{item.name || ''}</td>
                  <td className="border border-black px-2 py-1 text-center align-middle text-xl font-bold">
                    {!item.isEmpty && item.status === 'Memuaskan' ? '✓' : ''}
                  </td>
                  <td className="border border-black px-2 py-1 text-center align-middle text-xl font-bold">
                    {!item.isEmpty && item.status === 'Tidak Memuaskan' ? '✓' : ''}
                  </td>
                  <td className="border border-black px-2 py-1 align-top text-xs">{item.catatan || ''}</td>
                  <td className="border border-black px-2 py-1 align-top text-xs">{item.tindakan || ''}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between text-sm mt-auto px-2 pb-2">
            <div className="w-1/2">
              <div className="flex mb-4">
                <span className="w-32">Nama Pemeriksa</span>
                <span>: {metadata.namaPemeriksa}</span>
              </div>
              <div className="flex items-end">
                <span className="w-32">Tandatangan</span>
                <span className="flex-1 flex items-end">
                  : {signature ? (
                      <img src={signature} alt="Tandatangan Digital" className={`object-contain ml-2 -mb-2 ${isPdfGenerating ? 'h-10' : 'h-12 print:h-12'}`} />
                    ) : (
                      ' …………………………………'
                    )}
                </span>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex mb-4">
                <span className="w-16">Tarikh</span>
                <span>: {formatDate(metadata.tarikh)}</span>
              </div>
            </div>
          </div>
          
          {/* Nombor muka surat di bahagian bawah kanan */}
          <div className="text-right text-sm font-bold px-2 pt-2 text-gray-800">
            {pageNum}
          </div>
        </div>
      );
    };

    const renderReportPages = () => {
      const pages = [];
      const itemsPerPage = 10; // Tukar kepada 10 supaya jadual tidak melimpah
      
      // Pecahkan item kepada kumpulan (chunk) 10 item per muka surat
      for (let i = 0; i < checklist.length; i += itemsPerPage) {
        pages.push(checklist.slice(i, i + itemsPerPage));
      }
      
      if (pages.length === 0) {
        pages.push([]);
      }

      return pages.map((pageItems, index) => {
        const isLastPage = index === pages.length - 1;
        return (
          <React.Fragment key={`page-${index}`}>
            {renderReportPage(pageItems, index * itemsPerPage, isLastPage, itemsPerPage, index + 1, pages.length)}
            {!isLastPage && (
              <div className="html2pdf__page-break" style={{ pageBreakAfter: 'always', height: 0, clear: 'both' }}></div>
            )}
          </React.Fragment>
        );
      });
    };

    return (
      <div className={`bg-gray-100 min-h-screen py-8 print:py-0 print:bg-white flex justify-center pb-24 ${isPdfGenerating ? 'bg-white' : ''}`}>
        
        {/* ACTION BAR ATAS */}
        <div className={`fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto bg-white border-t md:border-b border-gray-200 p-4 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.1)] md:shadow-md z-30 print:hidden ${isPdfGenerating ? 'hidden' : ''}`}>
          <div className="max-w-6xl mx-auto flex justify-between items-center px-2">
            <button 
              onClick={() => setView('form')}
              disabled={isDownloading}
              className="flex items-center space-x-2 text-gray-700 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 px-4 py-2.5 rounded-lg font-medium transition disabled:opacity-50"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Kembali Edit</span>
              <span className="sm:hidden">Kembali</span>
            </button>
            
            <div className="flex space-x-2 md:space-x-3">
              <button 
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="flex items-center space-x-2 text-white bg-green-600 hover:bg-green-700 active:bg-green-800 px-4 md:px-6 py-2.5 rounded-lg font-bold shadow-md transition-transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                title="Muat turun sebagai PDF terus"
              >
                {isDownloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                <span className="hidden sm:inline">{isDownloading ? 'Memproses PDF...' : 'Muat Turun PDF'}</span>
                <span className="sm:hidden">{isDownloading ? 'Tunggu...' : 'Muat Turun'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* CONTAINER KANDUNGAN PDF */}
        <div id="pdf-content" className={`w-full max-w-6xl mx-auto ${isPdfGenerating ? 'bg-white' : 'md:mt-20'}`}>
          {renderReportPages()}
        </div>
        
      </div>
    );
  };

  return (
    <>
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background-color: white !important; }
          @page { size: A4 landscape; margin: 1cm; }
        }
      `}</style>
      {view === 'landing' ? renderLanding() : view === 'form' ? renderForm() : renderReport()}
    </>
  );
}