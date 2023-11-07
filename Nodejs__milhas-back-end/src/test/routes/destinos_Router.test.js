/* eslint-disable no-undef */
import mongoose from "mongoose";
import request from "supertest";
import { describe, expect, it, jest } from '@jest/globals';
import app from "../../app.js";
import "dotenv/config"

beforeEach(async () => {
    await mongoose.connect(process.env.STRING_MONGODB);
});

afterEach(async () => {
    await mongoose.connection.close();
});

describe('GET em /destinos', () => {
    it('Deve retornar uma lista de destinos', async () => {
        const res = await request(app).get('/destinos').expect(200);
    
        expect(res.body.length).toBeGreaterThan(0);
    });
});

let id;
describe('POST em /destinos', () => {
    it('Deve criar um destino', async () => {
        const res = await request(app).post('/destinos').send({
            imagem: 'imagem.png',
            nome: 'jest test',
            preco: 100,
        }).expect(201);

        id = res.body.destinoCriado._id;
    });

    it('Deve adicionar nada ao passar um body vazio', async () => {
        await request(app)
          .post('/destinos')
          .send({})
          .expect(500);
      });
});

describe('PUT em /destinos/:id', () => {
    it.each([
        ['nome', { nome: 'jest test 2' }],
        ['preco', { preco: 1000 }],
    ])('Deve alterar o campo %s', async (key, param) => {
        const req = { request };
        const spy = jest.spyOn(req, 'request');
        await req.request(app).put(`/destinos/${id}`).send(param).expect(200);

        expect(spy).toHaveBeenCalled();
    });
});

describe('DELETE em /destinos/:id', () => {
    it('Deve retornar uma lista de destinos', async () => {
        await request(app).delete(`/destinos/${id}`).expect(200);
    });
});
