import hello from './hello/index'
import bills from './bills/index'
import categories from './categories/index'
import address from './address/index'

export default (app) => {
    app.use('/', hello)
    app.use('/bills', bills)
    app.use('/categories', categories)
    app.use('/address', address)
}