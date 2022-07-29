import NavBar from '../NavBar';
import Footer from '../Footer';
//import './page.css';

const Page = ({ children, useAbsoluteCenter = false, showNavBar = true, pageTitle = "..." }) => {
  let className = ['hero','min-h-screen','bg-base-200'];
  if (useAbsoluteCenter) {
    className.push('absoluteCenter');
  }
  if (showNavBar) {
    className.push('withNavBar');
  }

  return (
    <>
   
      {showNavBar && <NavBar title={pageTitle} />}
      <section className={className.join(' ')}>
        {children}
      </section>
      {showNavBar && <Footer />}
   
    </>
  );
}

export default Page;