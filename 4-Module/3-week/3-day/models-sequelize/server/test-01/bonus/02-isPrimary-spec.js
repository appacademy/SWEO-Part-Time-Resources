const { setupBefore, setupChai, removeTestDB } = require('../utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Bonus: isPrimary Spec', async () => {
    let DB_TEST_FILE, models, server;
    before(async () => ({ server, models, DB_TEST_FILE } = await setupBefore(__filename)));
    after(async () => await removeTestDB(DB_TEST_FILE));

    describe('Check for Primary colors', () => {

        it('Test primary colors', async () => {
            await expect(models.Color.create({name: 'Red', isPrimary: true})).to.be.fulfilled
            const red = await models.Color.findOne({where: {
                name: 'Red'
            }});
            await expect(models.Color.create({name: 'Blue', isPrimary: true})).to.be.fulfilled
            const blue = await models.Color.findOne({where: {
                name: 'Blue'
            }});
            await expect(models.Color.create({name: 'Yellow', isPrimary: true})).to.be.fulfilled
            const yellow = await models.Color.findOne({where: {
                name: 'Yellow'
            }});
            expect(red.isPrimary).to.be.true
            expect(blue.isPrimary).to.be.true
            expect(yellow.isPrimary).to.be.true
        });

        it('Test non-primary colors', async () => {
            await expect(models.Color.create({name: 'Green', isPrimary: false})).to.be.fulfilled
            const green = await models.Color.findOne({where: {
                name: 'Green'
            }});
            expect(green.isPrimary).to.be.false
        });

        it('Checks default value of isPrimary to be false', async () => {
            await expect(models.Color.create({name: 'Black'})).to.be.fulfilled
            const black = await models.Color.findOne({where: {
                name: 'Black'
            }});
            expect(black.isPrimary).to.be.false
        });

        it('Check allowNull of isPrimary', async () => {
            await expect(models.Color.create({name: 'White', isPrimary: null})).to.be.rejected
        });
    });
});
