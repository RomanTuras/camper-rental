import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import css from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return <Container mt={true}>
    <span className={css.title}>404</span>
    <p>We couldn't find the page you where loking for.</p>
    <Link to='/' className={css.link}>GO HOME</Link>
  </Container>;
};

export default NotFoundPage;
