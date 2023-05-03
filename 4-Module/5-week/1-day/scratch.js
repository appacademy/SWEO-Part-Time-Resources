/*
constraints: false MAKES IT POLYMORPHIC
scope will add a 'where' to the joins to pull from the correct table
*/

app.get('/images/:id', async (req, res) => {
  let image = await Image.findByPk(req.params.id);

  let resource = image.getImageable({
    order: [[content]]
  }); // image.getUserProfile() || image.getBlogPost()
});