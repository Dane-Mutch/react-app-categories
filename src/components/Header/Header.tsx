import classes from "./header.module.scss";

const linkTexts: string[] = [
  'Products', 
  'Suppliers', 
  'Help'
]

const Header = () => { 
  return (
    <nav className={classes.container}>
      <section>
        {linkTexts.map(text => (
          <a href='#' key={text} className={classes.link}>{text}</a>
        ))}
      </section>
    </nav>
  )
}

export default Header;