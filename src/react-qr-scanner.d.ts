declare module 'react-qr-scanner' {
    import React from 'react';
  
    interface QrReaderProps {
      delay?: number | false;
      onError?: (error: any) => void;
      onScan?: (data: any) => void;
      style?: React.CSSProperties;
      className?: string;
    }
  
    const QrReader: React.FC<QrReaderProps>;
  
    export default QrReader;
  }
  