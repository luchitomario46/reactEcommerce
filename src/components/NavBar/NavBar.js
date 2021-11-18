import './NavBar.css';
import { Icon } from 'semantic-ui-react';


const NavBar = () => {
	return (
		<nav className='container'>
			<Icon name='cart arrow down' />
			<ul>
				<li>
					<a href='https://www.google.com'>Inicio</a>
				</li>
				<li>
					<a href='https://www.google.com'>Productos</a>
				</li>
				<li>
					<a href='https://www.google.com'>Carrito de Compras</a>
				</li>
				<li>
					<a href='https://www.google.com'>Contacto</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;