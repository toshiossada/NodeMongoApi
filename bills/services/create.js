import Bill from '../schema/Bill'

export default (req, res) => {
	let bill = new Bill(req.body)

	bill
		.save()
		.then((created) => {
			if (!created) {
				return res.status(404)
						  .json({ status: false, data: {} })
			}

			return res.status(201)
					  .json({ status: true, data: created })
		})
		.catch(err => res.status(500)
						 .json({ status: false, msg: err, data: {} }) 
		)
}