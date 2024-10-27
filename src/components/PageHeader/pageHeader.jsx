import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import houseIcon from '../../assets/images/icons/house-solid.svg';

function PageHeader({pageTitle, crumbs}) {
    return (
        <section className='page-header'>
            { crumbs ?
                <ul className='page-header-breadcrumb'>
                    <li className='page-header-breadcrumb-item'>
                        <Link to='/' className='page-header-breadcrumb-item-link'><img src={ houseIcon } alt='Icône de maison'/></Link>
                    </li>
                    { crumbs.map((crumb, index) =>
                        <li className='page-header-breadcrumb-item' key={ 'crumb-' + index }>
                            <Link to={ crumb.link } className='page-header-breadcrumb-item-link'>{ crumb.label }</Link>
                        </li>
                    ) }
                </ul> : null 
            }
            <h1 className='page-header-title'>{ pageTitle }</h1>
        </section>
    )
}

PageHeader.Prototypes = {
    pageTitle: PropTypes.string.isRequired,
    crumbs: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    )
}

export default PageHeader;
