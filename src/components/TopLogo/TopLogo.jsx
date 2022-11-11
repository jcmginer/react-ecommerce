import { logo } from "../../assets/img";

const TopLogo = () => {
  return (
    <>
      {/* Start Header Navigation */}
      
        <a className="navbar-brand" href="./"><img src= {logo} className="logo" alt="Logo"/></a>
      
      {/* End Header Navigation */}
    </>
  )
}

export default TopLogo