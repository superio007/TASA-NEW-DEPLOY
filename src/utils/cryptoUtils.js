import CryptoJS from "crypto-js";

// Secret key (Must be 32 characters for AES-256)
const SECRET_KEY = CryptoJS.enc.Utf8.parse(import.meta.env.VITE_SECRET_KEY);
const IV = CryptoJS.enc.Utf8.parse(import.meta.env.VITE_IV);

// Function to encrypt data
export const encryptData = (data) => {
    const jsonString = JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(jsonString, SECRET_KEY, {
        iv: IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();

    return encrypted;
};

// Function to decrypt data
export const decryptData = (cipherText) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY, {
        iv: IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
