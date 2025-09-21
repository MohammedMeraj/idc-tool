'use client'

import React, { useState } from 'react';
import { 
  Camera, 
  Download, 
  FolderOpen, 
  Video, 
  Image as ImageIcon, 
  Star, 
  Github, 
  Monitor,
  Play,
  CheckCircle,
  Zap,
  Shield,
  Settings,
  Info
} from './components/icons';
import { MockScreenshot1, MockScreenshot2, MockScreenshot3, IdcToolLogo } from './components/mockAssets';

// Navigation Component with Glass Effect
const Navigation = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 glass rounded-2xl shadow-lg animate-fade-in-down">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Camera className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-slate-700">IDC Tool</span>
        </div>
        <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">Features</a>
        <a href="#preview" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">Preview</a>
        <a href="#download" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">Download</a>
        <a 
          href="https://github.com/MohammedMeraj/idc-tool" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 transition-colors duration-300"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl animate-scale-in">
            <Camera className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-slate-800 mb-6 animate-fade-in-up">
            IDC <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Tool</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
            Create image datasets fast and efficiently with our Interactive Data Capture Tool. 
            Capture high-quality images and videos with your webcam in seconds.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up stagger-2">
          <a 
            href="/idc_tool.exe" 
            download="IDC_Tool.exe"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span>Download for Windows</span>
          </a>
          <button className="px-8 py-4 glass-strong text-slate-700 rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span>Watch Demo</span>
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 animate-fade-in-up stagger-3">
          <div className="flex items-center space-x-2 hover:text-green-600 transition-colors duration-200">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Windows Compatible</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-green-600 transition-colors duration-200">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Free to Use</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-green-600 transition-colors duration-200">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Open Source</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Live Camera Feed",
      description: "Real-time webcam preview with crystal clear quality for perfect shots every time."
    },
    {
      icon: <FolderOpen className="w-8 h-8" />,
      title: "Smart Organization",
      description: "Automatically organize your captures into folders and subfolders for easy management."
    },
    {
      icon: <ImageIcon className="w-8 h-8" />,
      title: "Single-Shot Burst",
      description: "Capture 6-second image sequences at 10 FPS for comprehensive dataset creation."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Recording",
      description: "Record high-quality videos at 24 FPS with customizable duration settings."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance ensures smooth operation even during intensive capture sessions."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Easy Configuration",
      description: "Intuitive interface with helpful tooltips and status indicators for seamless workflow."
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to create professional image datasets with speed and precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glass rounded-3xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-fade-in-up stagger-${((index % 6) + 1)}`}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Software Preview Section
const PreviewSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const previews = [
    { title: "Main Interface", component: <MockScreenshot1 className="w-full h-auto rounded-lg" /> },
    { title: "File Organization", component: <MockScreenshot2 className="w-full h-auto rounded-lg" /> },
    { title: "Settings & Config", component: <MockScreenshot3 className="w-full h-auto rounded-lg" /> }
  ];

  return (
    <section id="preview" className="py-24 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            See IDC Tool in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Take a look at the clean, intuitive interface designed for productivity and ease of use.
          </p>
        </div>
        
        <div className="flex justify-center mb-8 animate-fade-in-up stagger-1">
          <div className="glass rounded-2xl p-2 flex space-x-2">
            {previews.map((preview, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
                }`}
              >
                {preview.title}
              </button>
            ))}
          </div>
        </div>
        
        <div className="glass-strong rounded-3xl p-8 mb-8 shadow-2xl animate-fade-in-up stagger-2">
          <div className="bg-white rounded-2xl p-4 shadow-inner">
            {previews[activeTab].component}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up stagger-3">
          <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
              <FolderOpen className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-slate-800 mb-2">Smart Organization</h4>
            <p className="text-slate-600 text-sm">Automatically organize captures into folders and subfolders</p>
          </div>
          
          <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-4">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-slate-800 mb-2">Capture Controls</h4>
            <p className="text-slate-600 text-sm">Single-shot and video capture with real-time status indicators</p>
          </div>
          
          <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
              <Info className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-slate-800 mb-2">Helpful Tooltips</h4>
            <p className="text-slate-600 text-sm">Built-in help system with contextual information</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Download Section
const DownloadSection = () => {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Download IDC Tool now and start creating professional image datasets in minutes.
          </p>
        </div>
        
        <div className="glass-strong rounded-3xl p-8 mb-8 shadow-2xl animate-fade-in-up stagger-1">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <IdcToolLogo className="w-16 h-16 mr-4" />
                <h3 className="text-2xl font-bold text-slate-800">IDC Tool v1.0</h3>
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center space-x-2 text-slate-600">
                  <Monitor className="w-4 h-4" />
                  <span>Windows 10/11 Compatible</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <Shield className="w-4 h-4" />
                  <span>Safe & Secure</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <Download className="w-4 h-4" />
                  <span>86.8 MB Download</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4">
              <a 
                href="/idc_tool.exe"
                download="IDC_Tool.exe"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Now</span>
              </a>
              
              <a 
                href="https://github.com/MohammedMeraj/idc-tool" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 glass text-slate-700 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Star className="w-4 h-4" />
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-slate-500 animate-fade-in-up stagger-2">
          Free and open-source software. No registration required.
        </p>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PreviewSection />
      <DownloadSection />
      
      <footer className="py-12 px-6 border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-slate-700">IDC Tool</span>
          </div>
          <p className="text-slate-600 mb-4">
            Interactive Data Capture Tool - Making dataset creation fast and efficient.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/MohammedMeraj/idc-tool" className="text-slate-600 hover:text-blue-600 transition-colors">GitHub</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Documentation</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
