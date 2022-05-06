
export default function Conteudo(props){
    return (
        <div style={{display: 'flex', justifyContent: 'center', padding: "10px", overflow: 'scroll', width: '100%'}}>
            {props.children}
        </div>
    )
}