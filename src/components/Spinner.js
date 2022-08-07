import styles from '../assets/styles/spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.spinner}></div>
      <h4>Loading...</h4>
    </div>
  )
}
export default Spinner
