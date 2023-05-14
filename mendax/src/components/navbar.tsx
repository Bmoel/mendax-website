interface NavbarProps {
  currentPage: number; //number to correspond to page, starting at 0
}

/*
 * Pre: Used in setting up link classNames
 * Post: Tells page if currently active page or not
 * Params: page (page number of theoretical page)
 *         currentPage (page of what was passed into Navbar)
 * Return: string (string to put in className field)
 */
function getLink(page: number, currentPage: number): string {
  const base_str = "nav-link";
  if (page == currentPage) {
    return base_str + " active";
  }
  return base_str;
}

function Navbar({ currentPage }: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light" data-bs-theme="light">
      <div className="container-fluid">
        <a className="navbar-brand">
          <b>Mendax</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className={getLink(0, currentPage)}
              aria-current="page"
              href="/home"
            >
              Home
            </a>
            <a className={getLink(1, currentPage)} href="/downloads">
              Downloads
            </a>
            <a className={getLink(2, currentPage)} href="/about">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
