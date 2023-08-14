const { setupBefore, setupChai, removeTestDB } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('One-to-Many Specs', () => {
    let DB_TEST_FILE, models, server;
    before(async () => ({ server, models, DB_TEST_FILE } = await setupBefore(__filename)));
    after(async () => await removeTestDB(DB_TEST_FILE));

    describe('Musician -> Band relationship', () => {
        let adam;
        let fallingBox;

        before(async () => {
            adam = await models.Musician.build({firstName: 'Adam', lastName: 'Appleby'});
            fallingBox = await models.Band.findOne({where: {name: 'The Falling Box'}});
            adam.bandId = fallingBox.id;
            await adam.save();
        })

        it('implements the correct association from Musician to Band', async () => {
            const res = await models.Musician.findByPk(adam.id, { include: models.Band });
            const queryResult = res.toJSON();

            expect(queryResult).to.not.be.null;
            expect(queryResult).to.be.an('object');
            expect(queryResult.id).to.equal(adam.id);
            expect(queryResult.bandId).to.equal(fallingBox.id);

            expect(queryResult).to.have.own.property("Band");
            expect(queryResult.Band.id).to.equal(queryResult.bandId);
        });

        it('the foreign key reference is the only band info in the musician record', async () => {
            const res = await models.Musician.findByPk(adam.id);
            const queryResult = res.toJSON();

            expect(queryResult).to.not.be.null;
            expect(queryResult).to.be.an('object');
            expect(queryResult.id).to.equal(adam.id);
            expect(queryResult.bandId).to.equal(fallingBox.id);

            expect(queryResult).to.not.have.own.property("Band");
            expect(Object.values(queryResult)).to.not.include("The Falling Box");
        });

        it('deleting the band deletes the musicians associated with it', async () => {
            await fallingBox.destroy();

            const band = await models.Band.findByPk(fallingBox.id);
            expect(band).to.be.null;

            const musician = await models.Musician.findByPk(adam.id);
            expect(musician).to.be.null;

            const musicians = await models.Musician.findAll();
            expect(musicians).to.be.an('array');
            expect(musicians).to.be.empty;
        });
    });
});
