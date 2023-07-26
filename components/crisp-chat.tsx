'use client';
import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
    useEffect(() => {
      Crisp.configure("84e7f84f-2ddc-4ae0-b90b-20b5fbcbc71a");
    }, []);
    
  return null;
}

export default CrispChat 