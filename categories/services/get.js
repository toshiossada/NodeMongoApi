import Category from '../schema/Category'

export default (req, res) => {
    Category
    .findById(req.params.id)
    .then((category) => {
        if (!category) {
            return res.status(404)
                      .json({
                          status: false,
                          data: {}
                      })
        }

        return res.status(200)
                  .json({
                      status: true,
                      data: category
                  })
    })
    .catch(err => res.status(500)
                     .json({
                         status: false,
                         msg: err,
                         data: {}
                     })
    )
}