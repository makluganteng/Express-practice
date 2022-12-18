import express from 'express';
import axios from 'axios';
import {describe, expect, test} from '@jest/globals';

const app =  express();

app.use('/users',require('./users'));

describe('Test get all user',()=>{
    test("Should return a 200 OK response and return all user",async()=>{
        const response = await axios.get('http://localhost:3000/users');
        expect(response.status).toBe(200);
        
    })
})
