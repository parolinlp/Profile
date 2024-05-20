import Styles from './Styles.module.css'

export default function Index(props) {
    return (
        <div className={Styles.container}>
            
        <img className={Styles.img} src={props.foto} alt="Foto-de-perfil" />

        <h1 className={Styles.nome}>{props.nome}</h1>
        <h2 className={Styles.bio}>{props.bio}</h2>
        <h2 className={Styles.email}>{props.email}</h2>
        <h2 className={Styles.numero}>{props.numero}</h2>

            <div className={Styles.divBtn}>
                <a className={Styles.bnt} href={props.portfolio} target='_blank'>Portfólio</a>
                <a className={Styles.bnt} href={props.linkedin}target='_blank'>Linkedin</a>
                <a className={Styles.bnt} href={props.curriculo}target='_blank'>Curriculo</a>
                <a className={Styles.bnt} href={props.wpp} target='_blank'>Whatsapp</a>
            </div>

        </div>
    )
}