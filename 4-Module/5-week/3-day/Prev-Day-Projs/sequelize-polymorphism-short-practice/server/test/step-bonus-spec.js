// const chai = require('chai');
// const expect = chai.expect;
//
// const { Image, BlogPost, UserProfile} = require('../db/models');
//
// describe('Bonus Step Specs - Eager Loading', () => {
//     context('Valid Data', () => {
//         it('get imageable blog post', async () => {
//             const testPost = await BlogPost.create({
//                 content: 'Test Blog Post'
//             });
//             const testImage = await testPost.createImage({
//                 url: 'blog.png'
//             });
//
//             const foundImage = await Image.findByPk(
//                 testImage.id,
//                 { include: [BlogPost] },
//             );
//             expect(foundImage.imageableType).to.eq('BlogPost');
//
//             const foundImageable = foundImage.imageable;
//             expect(foundImageable).to.be.an.instanceof(BlogPost);
//             expect(foundImageable.id).to.eq(testPost.id);
//         });
//
//         it('get imageable user profile', async () => {
//             const testProfile = await UserProfile.create({
//                 displayName: 'Test User Profile'
//             });
//             const testImage = await testProfile.createImage({
//                 url: 'profile.png'
//             });
//
//             const foundImage = await Image.findByPk(
//                 testImage.id,
//                 { include: [UserProfile] },
//             );
//             expect(foundImage.imageableType).to.eq('UserProfile');
//
//             const storedImageable = foundImage.imageable;
//             expect(storedImageable).to.be.an.instanceof(UserProfile);
//             expect(storedImageable.id).to.eq(testProfile.id);
//         });
//
//         it('get null imageable for disconnected image ' +
//             '(neither blog post nor user profile)', async () => {
//             const testImage = await Image.create({ url: 'none.png' });
//
//             const foundImage = await Image.findByPk(
//                 testImage.id,
//                 { include: [BlogPost, UserProfile] },
//             )
//             expect(foundImage.imageableType).to.be.null;
//
//             const storedImageable = foundImage.imageable;
//             expect(storedImageable).to.be.null;
//         });
//
//         it('all images have correct imageable', async () => {
//             const foundImages = await Image.findAll({
//                 include: [BlogPost, UserProfile],
//             });
//             expect(foundImages.length).to.be.gt(0);
//
//             for (const id in foundImages) {
//                 const image = foundImages[id];
//
//                 if (image.imageableType === 'BlogPost') {
//                     expect(image.imageable).to.be.an.instanceof(BlogPost);
//                 } else if (image.imageableType === 'UserProfile') {
//                     expect(image.imageable).to.be.an.instanceof(UserProfile);
//                 } else {
//                     expect(image.imageable).to.be.null;
//                 }
//             }
//         });
//     });
// });