import '../App.css'; 

export default function Formulario({ adicionarAnimal }) {
    return (
        <>
            <form className="form" onSubmit={(event) => {
                event.preventDefault()
                const URL = event.target.URL.value
                const Raça = event.target.Raça.value
                const Local = event.target.Local.value
                const Status = event.target.Status.value
                adicionarAnimal({ URL, Raça, Local, Status })

                event.target.reset()
                event.target.URL.focus()
            }}>
                <label htmlFor="URL">URL</label>
                <input type="text" id="URL" />
                <label htmlFor="Raça">Raça</label>
                <input type="text" id="Raça" />
                <label htmlFor="Local">Local</label>
                <input type="text" id="Local" />
                <label htmlFor="Status">Status</label>
                <input type="text" id="Status" />
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}
