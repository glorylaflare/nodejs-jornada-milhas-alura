/* eslint-disable no-undef */
import mongoose from "mongoose";
import request from "supertest";
import { jest } from '@jest/globals';
import app from "../../app.js";
import "dotenv/config"

beforeEach(async () => {
    await mongoose.connect(process.env.STRING_MONGODB);
});

afterEach(async () => {
    await mongoose.connection.close();
});

describe('GET em /depoimentos', () => {
    it('Deve retornar uma lista de depoimentos', async () => {
        const res = await request(app).get('/depoimentos').expect(200);
    
        expect(res.body.length).toBeGreaterThan(0);
    });
});

let id;

describe('POST em /depoimentos', () => {
    it('Deve criar um depoimento', async () => {
        const res = await request(app).post('/depoimentos').send({
            imagem: 'imagem.png',
            depoimento: 'jest test inicial',
            autor: 'jest test',
        }).expect(201);
    
        id = res.body.depoimentoCriado._id;
    });

    it('Deve adicionar nada ao passar um body vazio', async () => {
        await request(app)
          .post('/depoimentos')
          .send({})
          .expect(500);
      });
});

describe('PUT em /depoimentos/:id', () => {
    it.each([
        ['depoimento', { depoimento: 'novo depoimento teste.' }],
        ['autor', { autor: 'Jest'}],
    ])('Deve alterar o campo %s do depoimento', async (key, param) => {
        const req = { request };
        const spy = jest.spyOn(req, 'request');
        await req.request(app).put(`/depoimentos/${id}`).send(param).expect(200);

        expect(spy).toHaveBeenCalled();
    });
});

describe('DELETE em /depoimentos/:id', () => {
    it('Deve retornar uma lista de depoimentos', async () => {
        await request(app).delete(`/depoimentos/${id}`).expect(200);
    });
});
