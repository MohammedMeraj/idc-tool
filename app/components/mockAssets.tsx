export const IdcToolLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none">
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    {/* Camera body */}
    <rect x="30" y="60" width="140" height="100" rx="15" fill="url(#logoGrad)" />
    <rect x="40" y="70" width="120" height="80" rx="10" fill="white" fillOpacity="0.2" />
    
    {/* Camera lens */}
    <circle cx="100" cy="110" r="25" fill="white" fillOpacity="0.3" />
    <circle cx="100" cy="110" r="18" fill="white" fillOpacity="0.5" />
    <circle cx="100" cy="110" r="12" fill="#1d4ed8" />
    
    {/* Flash */}
    <rect x="130" y="75" width="15" height="8" rx="4" fill="white" fillOpacity="0.8" />
    
    {/* Viewfinder */}
    <rect x="75" y="45" width="50" height="12" rx="6" fill="url(#logoGrad)" />
    
    {/* Data visualization elements */}
    <circle cx="160" cy="40" r="3" fill="#10b981" />
    <circle cx="170" cy="35" r="2" fill="#f59e0b" />
    <circle cx="180" cy="42" r="2.5" fill="#ef4444" />
    
    {/* Grid pattern */}
    <g opacity="0.3">
      <line x1="60" y1="85" x2="140" y2="85" stroke="white" strokeWidth="1" />
      <line x1="60" y1="105" x2="140" y2="105" stroke="white" strokeWidth="1" />
      <line x1="60" y1="125" x2="140" y2="125" stroke="white" strokeWidth="1" />
      <line x1="80" y1="70" x2="80" y2="140" stroke="white" strokeWidth="1" />
      <line x1="120" y1="70" x2="120" y2="140" stroke="white" strokeWidth="1" />
    </g>
  </svg>
);

export const MockScreenshot1 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none">
    <rect width="400" height="300" fill="#f8fafc" rx="8" />
    <rect x="20" y="20" width="360" height="200" fill="#e2e8f0" rx="4" />
    
    {/* Mock camera feed */}
    <rect x="30" y="30" width="340" height="180" fill="#334155" rx="4" />
    <circle cx="200" cy="120" r="40" fill="#64748b" opacity="0.5" />
    <text x="200" y="125" textAnchor="middle" fill="white" fontSize="12">Live Feed</text>
    
    {/* Control buttons */}
    <rect x="30" y="230" width="80" height="30" fill="#3b82f6" rx="4" />
    <text x="70" y="248" textAnchor="middle" fill="white" fontSize="10">Single Shot</text>
    
    <rect x="120" y="230" width="80" height="30" fill="#10b981" rx="4" />
    <text x="160" y="248" textAnchor="middle" fill="white" fontSize="10">Video Short</text>
    
    <rect x="210" y="230" width="80" height="30" fill="#f59e0b" rx="4" />
    <text x="250" y="248" textAnchor="middle" fill="white" fontSize="10">Browse Folder</text>
    
    {/* Status indicator */}
    <circle cx="320" cy="245" r="8" fill="#10b981" />
    <text x="340" y="248" fill="#64748b" fontSize="10">Ready</text>
  </svg>
);

export const MockScreenshot2 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none">
    <rect width="400" height="300" fill="#f8fafc" rx="8" />
    
    {/* Folder structure */}
    <rect x="20" y="20" width="150" height="260" fill="#e2e8f0" rx="4" />
    <rect x="30" y="30" width="130" height="20" fill="#3b82f6" rx="2" />
    <text x="95" y="42" textAnchor="middle" fill="white" fontSize="10">Datasets</text>
    
    <rect x="40" y="60" width="110" height="15" fill="#64748b" rx="2" opacity="0.3" />
    <rect x="40" y="80" width="110" height="15" fill="#64748b" rx="2" opacity="0.3" />
    <rect x="40" y="100" width="110" height="15" fill="#64748b" rx="2" opacity="0.3" />
    
    {/* Image grid */}
    <rect x="190" y="20" width="190" height="260" fill="#ffffff" rx="4" stroke="#e2e8f0" />
    <text x="285" y="40" textAnchor="middle" fill="#64748b" fontSize="12">Captured Images</text>
    
    {/* Mock image thumbnails */}
    <rect x="200" y="50" width="40" height="30" fill="#cbd5e1" rx="2" />
    <rect x="250" y="50" width="40" height="30" fill="#cbd5e1" rx="2" />
    <rect x="300" y="50" width="40" height="30" fill="#cbd5e1" rx="2" />
    
    <rect x="200" y="90" width="40" height="30" fill="#cbd5e1" rx="2" />
    <rect x="250" y="90" width="40" height="30" fill="#cbd5e1" rx="2" />
    <rect x="300" y="90" width="40" height="30" fill="#cbd5e1" rx="2" />
    
    <text x="285" y="150" textAnchor="middle" fill="#64748b" fontSize="10">36 images captured</text>
  </svg>
);

export const MockScreenshot3 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none">
    <rect width="400" height="300" fill="#f8fafc" rx="8" />
    
    {/* Settings panel */}
    <rect x="20" y="20" width="360" height="260" fill="#ffffff" rx="4" stroke="#e2e8f0" />
    <text x="200" y="45" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="bold">IDC Tool Settings</text>
    
    {/* Setting items */}
    <rect x="40" y="70" width="320" height="30" fill="#f1f5f9" rx="4" />
    <text x="50" y="88" fill="#475569" fontSize="11">Video Duration: 10 seconds</text>
    <rect x="320" y="75" width="30" height="20" fill="#3b82f6" rx="10" />
    
    <rect x="40" y="110" width="320" height="30" fill="#f1f5f9" rx="4" />
    <text x="50" y="128" fill="#475569" fontSize="11">Frame Rate: 24 FPS</text>
    
    <rect x="40" y="150" width="320" height="30" fill="#f1f5f9" rx="4" />
    <text x="50" y="168" fill="#475569" fontSize="11">Auto-organize captures</text>
    <circle cx="335" cy="165" r="8" fill="#10b981" />
    
    {/* Tooltips */}
    <rect x="60" y="200" width="80" height="20" fill="#475569" rx="4" opacity="0.8" />
    <text x="100" y="212" textAnchor="middle" fill="white" fontSize="9">Helpful tooltips</text>
    
    <rect x="160" y="220" width="100" height="20" fill="#475569" rx="4" opacity="0.8" />
    <text x="210" y="232" textAnchor="middle" fill="white" fontSize="9">Available everywhere</text>
  </svg>
);