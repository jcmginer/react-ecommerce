import { logo } from "../../assets/img";

const TopLogo = () => {
  return (
    <>
      {/* Start Header Navigation */}
      <div className="navbar-header">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars"></i>
        </button>
        <a className="navbar-brand" href="index.html"><img src= {logo} className="logo" alt="Logo" /></a>
      </div>
      {/* End Header Navigation */}
    </>
  )
}

export default TopLogo