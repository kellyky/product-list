import Button from '../../../common/Button/Button'

const DessertItem = ({image, name, category, price}) => {
  return (
    <div>
      <div>
        <picture>
          <source media="(min-width:1440px)" srcSet={image.desktop} />
          <source media="(min-width:765px)" srcSet={image.tablet} />
          <img src={image.mobile} alt={name} />
        </picture>
        <Button
          className=''
          text='Add to Cart'
        />
      </div>

      <div>
        <h3>{category}</h3>
        <h2>{name}</h2>
        <span>${price.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default DessertItem;
