import styles from './ExcursionComponent.module.css';

export const ExcursionComponent = () => {

  return (
    <div className={styles.main}>
      <div className={styles.description_section}>
        <div className={styles.content}>
          <form className={styles.form}>
            <div className={styles.form_header}>Запись на экскурсию в коливинг</div>
            <hr/>
            <div className={styles.form_body}>
              <input className={styles.form_input} placeholder={'Имя'} type='text'/>
              <input className={styles.form_input} placeholder={'Фамилия'} type='text' />
              <input className={styles.form_input} placeholder={'E-mail'} type='email'/>
              <button className={styles.form_button} onClick={() => {}} type={'button'} >Записаться на экскурсию</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )

}