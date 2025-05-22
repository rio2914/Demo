import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 50,  //virtual users
    duration: '1s',  // Fix the typo here
};

export default function () {
    const url = 'https://businessdevapi.stable-life.com/api/v1/transfer/file-transaction/?individualPayment=true&scheduleTime=2024-11-20T15:19:10.661Z&categoryName=TRANSPORT&instantPayment=true';
    const payload = JSON.stringify({
        amount: 10,
        description: 'Fix rate testing.',
        accountNumber: '100000',
       
    });

    const params = {
        headers: {  // Fix the case here
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjMwZDk4MTJlMzU1NDYwNGQ5ZDM0YTciLCJsYW5ndWFnZSI6ImVuIiwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3MzIwNzc5NDAsImV4cCI6MTczMjE2NDM0MH0.iNUjRCRNjrhooyPmvk-NczGrxCV8oplGS1zLN4PxlKM',
       
        },
    };

    const res = http.post(url, payload, params);
    
    // Log the full response
    console.log(`Response Status: ${res.status}`);
    console.log(`Response Body: ${res.body}`);
}
