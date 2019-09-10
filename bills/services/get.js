import Bill from '../schema/Bill'

export default (req, res) => {
    Bill
    .findById(req.params.id)
    .populate('category')
    .then((bill) => {
        if (!bill) {
            return res.status(404)
                      .json({
                          status: false,
                          data: {}
                      })
        }

        return res.status(200)
                  .json({
                      status: true,
                      data: bill
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