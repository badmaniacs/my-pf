/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVICEACCOUNT : 'firebase-adminsdk-jc1kt@mypfdb.iam.gserviceaccount.com',
    DBURL : "https://mypfdb-default-rtdb.asia-southeast1.firebasedatabase.app/",
    APIKEY : "AIzaSyCCrifUo8J1p5slCxBHzSnigAGqAU-aaeE",
    authDomain : "mypfdb.firebaseapp.com",
    SenderId : "223142218293",
    appId : "1:223142218293:web:859261850ad1320ec8ff7c",
    measurementId : "G-L0HKC1R726",
    projectId : 'mypfdb',
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
