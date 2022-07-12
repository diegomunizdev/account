import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { AppModule } from '../../src/app.module';

describe('AdminController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/v1/accounts/admins (POST)', async () => {
    return await request(app.getHttpServer())
      .post('/accounts/admins')
      .send({
        name: 'test',
        email: 'test100@email.com',
        password: '123456',
      })
      .expect(201)
      .then(({ body }) => expect(body).toBeDefined());
  });

  it('/v1/accounts/admins/:id (GET)', async () => {
    return await request(app.getHttpServer())
      .get('/accounts/admins/3')
      .expect(200)
      .then(({ body }) => expect(body).toBeDefined());
  });

  it('/v1/accounts/admins (GET)', async () => {
    return await request(app.getHttpServer())
      .get('/accounts/admins')
      .expect(200)
      .then(({ body }) => expect(body).toBeDefined());
  });

  it('/v1/accounts/admins (PUT)', async () => {
    return await request(app.getHttpServer())
      .put('/accounts/admins')
      .send({
        id: 8,
        name: 'test',
        email: 'test1234@email.com',
      })
      .expect(200)
      .then(({ body }) => expect(body).toBeDefined());
  });

  afterAll(async () => {
    return await app.close();
  });
});
