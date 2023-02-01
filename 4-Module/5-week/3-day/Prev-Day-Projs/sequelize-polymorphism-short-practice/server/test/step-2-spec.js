const chai = require('chai');
const expect = chai.expect;

const { BlogPost, UserProfile, Image } = require('../db/models');

describe('Step 2 Specs - Create Associations', () => {
  let testPost;
  let testProfile;
  let testPostImages = [];
  let testProfileImages = [];

  before(async () => {
    testPost = await BlogPost.create({ content: 'Test Blog Post' });
    testProfile = await UserProfile.create({
      displayName: 'Test User Profile'
    });
    testPostImages.push(await testPost.createImage({ url: 'blog1.png' }));
    testPostImages.push(await testPost.createImage({ url: 'blog2.png' }));
    testPostImages.push(await testPost.createImage({ url: 'blog3.png' }));
    testProfileImages.push(await testProfile.createImage({ url: 'profile1.png' }));
    testProfileImages.push(await testProfile.createImage({ url: 'profile1.png' }));
  });

  context('Valid Data', () => {
    it('assign blog post to image', async () => {
      const foundImages = await testPost.getImages();

      expect(foundImages).to.be.an.instanceof(Array);
      expect(foundImages.length).to.eq(testPostImages.length);

      for (let i in foundImages) {
        const image = foundImages[i];
        expect(image.id).to.eq(testPostImages[i].id);
        expect(image).to.be.an.instanceof(Image);
      }
    });

    it('assign user profile to image', async () => {
      const foundImages = await testProfile.getImages();

      expect(foundImages).to.be.an.instanceof(Array);
      expect(foundImages.length).to.eq(testProfileImages.length);

      for (let i in foundImages) {
        const image = foundImages[i];
        expect(image.id).to.eq(testProfileImages[i].id);
        expect(image).to.be.an.instanceof(Image);
      }
    });

    it('assign image to blog post', async () => {
      const foundPost = await testPostImages[0].getBlogPost();

      expect(foundPost).to.be.an.instanceof(BlogPost);
      expect(foundPost.id).to.eq(testPost.id);
      expect(testPostImages[0].imageableType).to.eq('BlogPost');
    });

    it('assign image to user profile', async () => {
      const foundProfile = await testProfileImages[0].getUserProfile();

      expect(foundProfile).to.be.an.instanceof(UserProfile);
      expect(foundProfile.id).to.eq(testPost.id);
      expect(testProfileImages[0].imageableType).to.eq('UserProfile');
    });
  });
});
