const { setupBeforeNoSeeds, setupChai, removeTestDB, seedAllDB, runSQLQuery } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe("Intermediate Phase 7: Fetching Related Records (Eager & Lazy Loading)", () => {
  let DB_TEST_FILE, models, server;
  before(async () => {
    ({ server, models, DB_TEST_FILE } = await setupBeforeNoSeeds(__filename));
    const ant = await models.Insect.create({
      name: "Leafcutter Ant",
      description: "Rust to dark-brown color",
      fact: "Their life expectancy is 10-15 years.",
      territory: "South and Central America",
      millimeters: 10,
    });
    const kapok = await models.Tree.create({
      tree: "Kapok",
      location: "Arenal National Park",
      heightFt: 200,
      groundCircumferenceFt: 50,
    });
    const rubber = await models.Tree.create({
      tree: "Indian Rubber",
      location: "Southeast Asia",
      heightFt: 100,
      groundCircumferenceFt: 105,
    });
    await seedAllDB(DB_TEST_FILE);
  });
  after(async () => await removeTestDB(DB_TEST_FILE));

  describe("Eager loading: GET /trees-insects", () => {
    it("eager loads trees with associated insect data", async () => {
      await chai
        .request(server)
        .get("/trees-insects")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an("array");

          res.body.forEach(tree => {
            expect(tree).to.have.own.property("id");
            expect(tree).to.have.own.property("tree");
            expect(tree).to.have.own.property("location");
            expect(tree).to.have.own.property("heightFt");
            expect(tree).to.have.own.property("Insects");
            expect(tree.Insects).to.be.an("array");
            expect(tree.Insects).to.have.length.greaterThan(
              0,
              "only includes trees that have insects near them"
            );

            tree.Insects.forEach(insect => {
              expect(insect).to.have.own.property("id");
              expect(insect).to.have.own.property("name");
              expect(insect).to.not.have.own.property(
                "millimeters",
                "Insects should only return id and name properties"
              );
            });
          });

          const insect1Name = res.body[3].Insects[0].name.toLowerCase();
          const insect2Name = res.body[3].Insects[1].name.toLowerCase();

          expect(insect1Name.localeCompare(insect2Name)).to.equal(
            -1,
            "Insects should be ordered alphabetically by name"
          );
        });
    });
  });

  describe("Lazy loading: GET /insects-trees", () => {
    it("lazy loads insects with associated tree data", async () => {
      await chai
        .request(server)
        .get("/insects-trees")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an("array");

          res.body.forEach(insect => {
            expect(insect).to.have.own.property("id");
            expect(insect).to.have.own.property("name");
            expect(insect).to.have.own.property("description");
            expect(insect).to.have.own.property("trees");
            expect(insect.trees).to.be.an("array");

            insect.trees.forEach(tree => {
              expect(tree).to.have.own.property("id");
              expect(tree).to.have.own.property("tree");
              expect(tree).to.not.have.own.property(
                "heightFt",
                "Trees should only return id and tree properties"
              );
            });
          });

          const tree1Name = res.body[2].trees[0].tree.toLowerCase();
          const tree2Name = res.body[2].trees[1].tree.toLowerCase();

          expect(tree1Name.localeCompare(tree2Name)).to.equal(
            -1,
            "Trees should be ordered alphabetically by name"
          );
        });
    });
  });
});
