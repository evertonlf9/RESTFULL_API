import { validateCreate, validateUpdate } from '../../../routes/users'

const mockRes = { locals: { user: {} } }

describe('users', () => {
  describe('validation', () => {
    describe('create', () => {
      it('test rules with empty input', async () => {
        const mockReq = { body: {} }
        const mockNext = jest.fn()

        await validateCreate(mockReq, mockRes, mockNext)

        const expectedErrors = {
          body: {
            name: expect.objectContaining({
              types: ['required'],
            }),
            email: expect.objectContaining({
              types: ['required'],
            }),
            password: expect.objectContaining({
              types: ['required'],
            }),
          },
        }

        const actualErrors = mockNext.mock.calls[0][0].errors

        expect(actualErrors).toEqual(expectedErrors)
      })

      it.skip('test rules with invalid type for all inputs', async () => {
        const mockReq = {
          body: {
            name: 1,
            password: 1,
            email: 1,
            isSuperAdmin: 1,
          },
        }

        const mockNext = jest.fn()

        await validateCreate(mockReq, mockRes, mockNext)

        const expectedErrors = {
          body: {
            name: expect.objectContaining({
              types: ['string'],
            }),
            password: expect.objectContaining({
              types: ['string'],
            }),
            email: expect.objectContaining({
              types: ['string'],
            }),
            isSuperAdmin: expect.objectContaining({
              types: ['boolean'],
            }),
          },
        }

        const actualErrors = mockNext.mock.calls[0][0].errors

        expect(actualErrors).toEqual(expectedErrors)
      })

      it('test rules with text overflow of 300 characters for "name", "password", "email"', async () => {
        const mockReq = {
          body: {
            name:
              'tt8vCAza0twkUQE4SNwyQmQL8vf6xBVaPZtF0oD6076W7tNIg21dC6weHKNatbGd2wEAMcBN2EwYy0j9cihlbVn1KWeWwZ6OEcFep7UM3r3fi6ZCAmrrX0yy4eW21xEnXOYdYpkhHl1PD5GKb8x7jCUg8ZK5cJgEJSsYSUv8ClIQS7gw2X31cEHTgQeHCEl8mJvMgUyPJ5SVzRx7mU78pZHNbjdGFR0FaN2L8FS91DJDQvVlFr0OxgRf0WCJtbFRoS6ULsiOn2EFoniXeBla9E8U3suwarCYH2MfGGYHEsVa',
            password:
              'tt8vCAza0twkUQE4SNwyQmQL8vf6xBVaPZtF0oD6076W7tNIg21dC6weHKNatbGd2wEAMcBN2EwYy0j9cihlbVn1KWeWwZ6OEcFep7UM3r3fi6ZCAmrrX0yy4eW21xEnXOYdYpkhHl1PD5GKb8x7jCUg8ZK5cJgEJSsYSUv8ClIQS7gw2X31cEHTgQeHCEl8mJvMgUyPJ5SVzRx7mU78pZHNbjdGFR0FaN2L8FS91DJDQvVlFr0OxgRf0WCJtbFRoS6ULsiOn2EFoniXeBla9E8U3suwarCYH2MfGGYHEsVa',
            email:
              'tt8vCAza0twkUQE4SNwyQmQL8vf6xBVaPZtF0oD6076W7tNIg21dC6weHKNatbGd2wEAMcBN2EwYy0j9cihlbVn1KWeWwZ6OEcFep7UM3r3fi6ZCAmrrX0yy4eW21xEnXOYdYpkhHl1PD5GKb8x7jCUg8ZK5cJgEJSsYSUv8ClIQS7gw2X31cEHTgQeHCEl8mJvMgUyPJ5SVzRx7mU78pZHNbjdGFR0FaN2L8FS91DJDQvVlFr0OxgRf0WCJtbFRoS6ULsiOn2EFoniXeBla9E8U3suwarCYH2MfGGYHEsVa',
          },
        }

        const mockNext = jest.fn()

        await validateCreate(mockReq, mockRes, mockNext)

        const expectedErrors = {
          body: {
            name: expect.objectContaining({
              types: ['hasLengthLesserThanOrEqual'],
            }),
            password: expect.objectContaining({
              types: ['hasLengthLesserThanOrEqual'],
            }),
            email: expect.objectContaining({
              types: ['hasLengthLesserThanOrEqual'],
            }),
          },
        }

        const actualErrors = mockNext.mock.calls[0][0].errors

        expect(actualErrors).toEqual(expectedErrors)
      })

      it('test rules with valid input', async () => {
        const mockReq = {
          body: {
            name: 'valid name',
            password: 'valid password',
            email: 'valid email',
            isSuperAdmin: true,
          },
        }

        const mockNext = jest.fn()

        await validateCreate(mockReq, mockRes, mockNext)

        expect(mockNext).toBeCalledWith()
      })
    })

    describe('update', () => {
      it('test rules with invalid type for all inputs', async () => {
        const mockReq = {
          body: {
            name: 1,
            password: 1,
            email: 1,
            isSuperAdmin: 1,
          },
        }

        const mockNext = jest.fn()

        await validateUpdate(mockReq, mockRes, mockNext)

        const expectedErrors = {
          body: {
            name: expect.objectContaining({
              types: ['string'],
            }),
            password: expect.objectContaining({
              types: ['string'],
            }),
            email: expect.objectContaining({
              types: ['string'],
            }),
            isSuperAdmin: expect.objectContaining({
              types: ['boolean'],
            }),
          },
        }

        const actualErrors = mockNext.mock.calls[0][0].errors

        expect(actualErrors).toEqual(expectedErrors)
      })

      it('test rules with text overflow of 300 characters for "name", "password", "email"', async () => {
        const mockReq = {
          body: {
            name:
              'tt8vCAza0twkUQE4SNwyQmQL8vf6xBVaPZtF0oD6076W7tNIg21dC6weHKNatbGd2wEAMcBN2EwYy0j9cihlbVn1KWeWwZ6OEcFep7UM3r3fi6ZCAmrrX0yy4eW21xEnXOYdYpkhHl1PD5GKb8x7jCUg8ZK5cJgEJSsYSUv8ClIQS7gw2X31cEHTgQeHCEl8mJvMgUyPJ5SVzRx7mU78pZHNbjdGFR0FaN2L8FS91DJDQvVlFr0OxgRf0WCJtbFRoS6ULsiOn2EFoniXeBla9E8U3suwarCYH2MfGGYHEsVa',
            password:
              'tt8vCAza0twkUQE4SNwyQmQL8vf6xBVaPZtF0oD6076W7tNIg21dC6weHKNatbGd2wEAMcBN2EwYy0j9cihlbVn1KWeWwZ6OEcFep7UM3r3fi6ZCAmrrX0yy4eW21xEnXOYdYpkhHl1PD5GKb8x7jCUg8ZK5cJgEJSsYSUv8ClIQS7gw2X31cEHTgQeHCEl8mJvMgUyPJ5SVzRx7mU78pZHNbjdGFR0FaN2L8FS91DJDQvVlFr0OxgRf0WCJtbFRoS6ULsiOn2EFoniXeBla9E8U3suwarCYH2MfGGYHEsVa',
            email:
              'tt8vCAza0twkUQE4SNwyQmQL8vf6xBVaPZtF0oD6076W7tNIg21dC6weHKNatbGd2wEAMcBN2EwYy0j9cihlbVn1KWeWwZ6OEcFep7UM3r3fi6ZCAmrrX0yy4eW21xEnXOYdYpkhHl1PD5GKb8x7jCUg8ZK5cJgEJSsYSUv8ClIQS7gw2X31cEHTgQeHCEl8mJvMgUyPJ5SVzRx7mU78pZHNbjdGFR0FaN2L8FS91DJDQvVlFr0OxgRf0WCJtbFRoS6ULsiOn2EFoniXeBla9E8U3suwarCYH2MfGGYHEsVa',
          },
        }

        const mockNext = jest.fn()

        await validateUpdate(mockReq, mockRes, mockNext)

        const expectedErrors = {
          body: {
            name: expect.objectContaining({
              types: ['hasLengthLesserThanOrEqual'],
            }),
            password: expect.objectContaining({
              types: ['hasLengthLesserThanOrEqual'],
            }),
            email: expect.objectContaining({
              types: ['hasLengthLesserThanOrEqual'],
            }),
          },
        }

        const actualErrors = mockNext.mock.calls[0][0].errors

        expect(actualErrors).toEqual(expectedErrors)
      })

      it('test rules with valid input', async () => {
        const mockReq = {
          body: {
            name: 'valid name',
            password: 'valid password',
            email: 'valid email',
            isSuperAdmin: true,
          },
        }

        const mockNext = jest.fn()

        await validateUpdate(mockReq, mockRes, mockNext)

        expect(mockNext).toBeCalledWith()
      })
    })
  })
})
