import cepService from 'cep-promise'

export default (req, res) => {
    cepService(req.params.cep)
        .then(result => res.status(200)
                            .json({ status:true, data: result }))
}