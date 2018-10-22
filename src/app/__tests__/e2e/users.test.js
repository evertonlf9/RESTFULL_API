import faker from 'faker'
import { setup, teardown } from '../../../../tests/setupApp'
import * as fakeResources from '../../../../tests/fakeResources'

describe('api', () => {
  let app
  let createUser

  beforeAll(async () => {
    app = await setup()

    const { user } = app

    createUser = async (data = {}) =>
      fakeResources.createUser({
        accountId: user.account.id,
        ...data,
      })
  })
  afterAll(async () => {
    await teardown(app)
  })

  describe('/users', () => {
    test('GET /', async () => {
      const res = await app.authedAxios.get('/users')

      expect(res.status).toBe(200)
      expect(res.data).toEqual({
        data: expect.any(Array),
        currentPage: 1,
        from: 0,
        lastPage: expect.any(Number),
        limit: 15,
        skip: 0,
        to: 15,
        total: expect.any(Number),
      })
    })

    test('POST /', async () => {
      const data = {
        name: 'Mathias Gomes',
        email: 'mathias@email.com',
        password: '3323',
      }
      const res = await app.authedAxios.post('/users', data)

      expect(res.status).toBe(200)
      expect(res.data).toEqual({
        id: expect.any(String),
        name: data.name,
        email: data.email,
        isSuperAdmin: false,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        deletedAt: null,
        accountId: expect.any(String),
      })
    })

    test('PUT /:id', async () => {
      const user = await createUser()
      const id = user.id

      const data = {
        name: 'changing name',
        email: faker.internet.email(),
      }
      const res = await app.authedAxios.put(`/users/${id}`, data)

      expect(res.status).toBe(200)
      expect(res.data).toMatchObject({
        id,
        name: data.name,
        email: data.email,
      })
      expect(res.data.updatedAt).not.toBe(res.data.createdAt)
    })

    test('GET /:id', async () => {
      const user = await createUser()
      const id = user.id

      const res = await app.authedAxios.get(`/users/${id}`)

      expect(res.status).toBe(200)
      expect(res.data).toMatchObject({
        id,
        name: user.name,
        email: user.email,
        isSuperAdmin: user.isSuperAdmin,
      })
    })

    test('DELETE /:id', async () => {
      const user = await createUser()
      const id = user.id

      const res = await app.authedAxios.delete(`/users/${id}`)

      expect(res.status).toBe(200)
      expect(res.data).toEqual('OK')
    })
  })
})
