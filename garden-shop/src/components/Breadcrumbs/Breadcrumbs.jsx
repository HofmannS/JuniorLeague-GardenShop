import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Breadcrumbs.scss'

const crumbNames = {
    '/': 'Main page',
    '/categories': 'Categories',
    '/discount': 'All Sales',
    '/products': 'All Products',
    '/category': 'Categories'

    //сюда будем добавлять остальные пути
};
const Breadcrumbs = ({breadcrumbTitle = {}}) => {
    const { pathname } = useLocation();

    const breadcrumbsArray = pathname === '/' ? [] : pathname.slice(1).split('/'); //массив сегментов пути
console.log(breadcrumbsArray);


    return (
        <div className='breadcrumbs container'>
            <nav className='breadcrumbs'>
                <Link to={'/'} className='breadcrumbs__link breadcrumbs__item'>{crumbNames['/']}</Link>
                {breadcrumbsArray.length > 0 && (
                    <>

                        {breadcrumbsArray.map((breadcrumb, crumbIndex, allBreadcrumbs) => {
                            const crumbPath = '/' + allBreadcrumbs.slice(0, crumbIndex + 1).join('/');
                            const isActive = crumbIndex === allBreadcrumbs.length - 1;
                            const linkPath = crumbPath === '/category' ? '/categories': crumbPath // Пришлось подменить ссылку
                            const label = breadcrumbTitle[crumbPath] || breadcrumbTitle[breadcrumb] || crumbNames[crumbPath] || breadcrumb
                         
                            return isActive ? (
                                <span key={crumbPath} className='breadcrumbs__current breadcrumbs__item'>{label}</span>
                            ) : (
                                
                                <Link key={crumbPath} to={linkPath} className='breadcrumbs__link breadcrumbs__item'>{label}</Link>
                                
                            )
                        })}
                    </>
                )
                }
            </nav>
        </div>
    )
}

export default Breadcrumbs