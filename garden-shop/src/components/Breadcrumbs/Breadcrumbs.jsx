import React, { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '@features/categoriesSlice'
import './Breadcrumbs.scss'

const crumbNames = {
    '/': 'Main page',
    '/categories': 'Categories',
    '/discount': 'All Sales',
    '/products': 'All Products',
    '/favorites': 'Liked products'
};
const Breadcrumbs = ({ breadcrumbTitle = {} }) => {
    const { pathname, state } = useLocation()
    const params = useParams()
    const dispatch = useDispatch()

    const categories = useSelector(state => state.categories.categories)
    const products = useSelector(state => state.products.products)

    useEffect(() => {
        if (!categories.length)
            dispatch(fetchCategories())
    }, [categories.length, dispatch])

    const getCategoryTitle = id =>
        categories.find(category => String(category.id) === String(id))?.title || ''

    const getProduct = id =>
        products.find(product => String(product.id) === String(id))

    const crumbs = [{ name: crumbNames['/'], path: '/' }]

    if (pathname === '/categories') {
        crumbs.push({ name: crumbNames['/categories'], path: '/categories' })
    } else if (pathname.startsWith('/category/') && params.categoryId) {
        crumbs.push({ name: crumbNames['/categories'], path: '/categories' })
        crumbs.push({
            name: getCategoryTitle(params.categoryId) || 'Loading...',
            path: `/category/${params.categoryId}`
        })
    } else if (pathname.startsWith('/product/') && params.productId) {
        if (state?.from === 'favorites') {
            crumbs.push({ name: crumbNames['/favorites'], path: '/favorites' })
        } else if (state?.from === 'discount') {
            crumbs.push({ name: crumbNames['/discount'], path: '/discount' })
        } else if (state?.from === 'categories') {
            crumbs.push({ name: crumbNames['/categories'], path: '/categories' })
            crumbs.push({
                name: getCategoryTitle(state.categoryId) || 'Loading...',
                path: `/category/${state.categoryId}`
            })
        } else {
            crumbs.push({ name: crumbNames['/products'], path: '/products' })
        }

        if (state?.productTitle) {
            crumbs.push({
                name: state.productTitle,
                path: `/product/${params.productId}`
            })
        } else {
            const product = getProduct(params.productId)
            if (product) {
                crumbs.push({
                    name: product.title,
                    path: `/product/${params.productId}`
                })
            } else {
                crumbs.push({
                    name: 'Product',
                    path: `/product/${params.productId}`
                })
            }
        }
    } else if (pathname !== '/') {
        let builtPath = ''
        pathname.slice(1).split('/').forEach(partPath => {
            builtPath += `/${partPath}`
            crumbs.push({
                name: breadcrumbTitle[builtPath] || crumbNames[builtPath] || partPath,
                path: builtPath
            })
        })
    }

    return (
        <div className='breadcrumbs container'>
            <nav className='breadcrumbs'>
                {crumbs.map(({ name: crumbName, path }, index) => {
                    const isLast = index === crumbs.length - 1
                    return (
                        <div key={`${path}`} className={`breadcrumbs__item ${isLast ? 'breadcrumbs__current' : ''}`}>
                            {isLast ? crumbName : (
                                <Link to={path} className='breadcrumbs__link'>{crumbName}</Link>
                            )}
                        </div>
                    )
                })}
            </nav>
        </div>
    )
}

export default Breadcrumbs