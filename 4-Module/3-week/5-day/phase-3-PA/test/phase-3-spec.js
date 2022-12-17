const chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
chai.use(chaiHttp);
const expect = chai.expect;

const { WarehouseItem } = require('../db/models');
const { resetDB, seedAllDB } = require('./utils/test-utils');

describe('Phase 3 Specs - WarehouseItems', () => {
  let currentId = 3;

  before(async function () {
    await resetDB();
    return seedAllDB();
  });

  it('passes the API specs for GET /items', async () => {
    await chai.request(server)
      .get('/items')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.eql([
          { id: 1, name: 'Paint', price: 12.12, quantity: 12, isUsed: false },
          { id: 3, name: 'Webcam', price: 50.5, quantity: 5, isUsed: false }
        ]);
      });

    const usedItemInfo = {
      name: 'Test Used WarehouseItem',
      price: 1.01,
      quantity: 1,
      isUsed: true
    };
    await WarehouseItem.create(usedItemInfo);
    currentId++;
    await chai.request(server)
      .get('/items')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.eql([
          { id: 1, name: 'Paint', price: 12.12, quantity: 12, isUsed: false },
          { id: 3, name: 'Webcam', price: 50.5, quantity: 5, isUsed: false },
        ]);
      });

    const newItemInfo = {
      name: 'Test Used WarehouseItem',
      price: 1.01,
      quantity: 1,
      isUsed: false
    };
    await WarehouseItem.create(newItemInfo);
    currentId++;
    return await chai.request(server)
      .get('/items')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.eql([
          { id: 1, name: 'Paint', price: 12.12, quantity: 12, isUsed: false },
          { id: 3, name: 'Webcam', price: 50.5, quantity: 5, isUsed: false },
          { id: currentId, ...newItemInfo },
        ]);
      });
  });

  it('passes the API specs for GET /items/:name', async () => {
    await chai.request(server)
      .get('/items/Paint')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.eql({ id: 1, name: 'Paint', price: 12.12, quantity: 12, isUsed: false });
      });

    const newItemInfo = {
      name: 'NewItem',
      price: 1.01,
      quantity: 1,
      isUsed: true
    };
    await WarehouseItem.create(newItemInfo);
    currentId++;
    await chai.request(server)
      .get('/items/NewItem')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.eql({
          id: currentId,
          ...newItemInfo
        });
      });

    return await chai.request(server)
      .get('/items/notfound')
      .then((res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json;
        expect(res.body).to.eql({
          "message": "Warehouse Item not found"
        });
      });
  });

  it('passes the API specs for PUT /items/:id', async () => {
    const reqBody = {
      name: 'Changed Name',
      price: 1.01,
      quantity: 1,
      isUsed: true,
    };
    await chai.request(server)
      .put('/items/2')
      .send(reqBody)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.eql({ id: 2, ...reqBody });
      });
    const foundItem = await WarehouseItem.findByPk(2);
    expect(foundItem.name).to.eq(reqBody.name);
    expect(foundItem.price).to.eq(reqBody.price);
    expect(foundItem.quantity).to.eq(reqBody.quantity);
    expect(foundItem.isUsed).to.eq(reqBody.isUsed);

    return await chai.request(server)
      .put('/items/100')
      .then((res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json;
        expect(res.body).to.eql({
          "message": "Warehouse Item not found"
        });
      });
  });

  it('passes the API specs for DELETE /items/:id', async () => {
    await chai.request(server)
      .delete('/items/3')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.eql({ message: 'Successfully deleted' });
      });
    const foundItem = await WarehouseItem.findByPk(3);
    expect(foundItem).to.be.null;

    return await chai.request(server)
      .delete('/items/100')
      .then((res) => {
        expect(res).to.have.status(404);
        expect(res).to.be.json;
        expect(res.body).to.eql({
          "message": "Warehouse Item not found"
        });
      });
  });
})