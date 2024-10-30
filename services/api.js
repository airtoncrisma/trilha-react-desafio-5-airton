import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ymaubtndgxvntvirvrvx.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltYXVidG5kZ3h2bnR2aXJ2cnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMjQ5MDMsImV4cCI6MjA0NTkwMDkwM30.uOIM19ulHFdsQmvO2cwtBYzFCPZRjfSQF6qrhMJeB6I",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltYXVidG5kZ3h2bnR2aXJ2cnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMjQ5MDMsImV4cCI6MjA0NTkwMDkwM30.uOIM19ulHFdsQmvO2cwtBYzFCPZRjfSQF6qrhMJeB6I"
    }
})