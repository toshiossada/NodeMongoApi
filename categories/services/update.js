import Category from '../schema/Category'

export default (req, res) => {
    Category
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(() =>  res.status(204).end())
        .catch((err) => 
            res.status(404)
                    .json({ status: false, data: {}, msg: err })
        )
}