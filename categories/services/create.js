import Category from '../schema/Category'

export default (req, res) => {
    let category = new Category(req.body);
    
    category
        .save()
        .then((created) => {
            if(!created){
                return res.status(404)
                        .json({ status: false, data: {} })
            }

            return res.status(201)
                    .json({ status: true, data: created })
        })
        .catch((err) => 
            res.status(404)
                    .json({ status: false, data: {}, msg: err })
        )
}   