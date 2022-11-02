import AddToCard from "../AddToCart/AddToCard"

const MaskIcon = () => {
  return (
    <div className="mask-icon">
      <ul>
        <li><a href="./" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
        <li><a href="./" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
        <li><a href="./" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
      </ul>

      <AddToCard />

    </div>
  )
}

export default MaskIcon