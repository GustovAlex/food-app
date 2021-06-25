import "./categoryItemStyles.scss"

export default function CategoryItem({ category }) {
    return (
        <div className='categoryItem'>
            <div className='categoryItem-wrap'>
                <img
                    className='categoryItem-wrap-img'
                    src={`/img/${category.img}`}
                    alt='img'
                />
                <h3 className='categoryItem-wrap-title'>{category.name}</h3>
            </div>
        </div>
    )
}
