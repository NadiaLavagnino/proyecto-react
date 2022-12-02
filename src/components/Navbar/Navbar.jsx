import Form from '../Form/Form';
import Categorias from './Categorias/categorias';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Categorias/>
            <Form/>
        </div>
        </div>
        </nav>

    );
}

export default Navbar;
